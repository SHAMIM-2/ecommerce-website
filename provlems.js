


const input = document.getElementById("myInput");
const btn = document.getElementById("searchBtn");
const output = document.getElementById("consoleOutput");

btn.addEventListener("click", async () => {
    const query = input.value.trim();
    if (!query) return;

    output.textContent = "Fetching...";

    const text = await fetchLongWikipediaText(query, 100);

    const totalLines = (text.match(/\r?\n/g) || []).length + 1;
    // ✅ Template literal fix
    output.textContent = `Total lines: ${totalLines}\n\n${text.slice(0, 5000)}`;
});

// Final working fetch function
async function fetchLongWikipediaText(search, minLines = 100) {
    const apiBase = 'https://en.wikipedia.org/w/api.php?origin=*';
    const encode = s => encodeURIComponent((s||'').replace(/\s+/g, ' '));

    async function getMainTitle(query) {
        const url = `${apiBase}&action=query&list=search&srsearch=${encode(query)}&format=json`;
        const res = await fetch(url);
        const data = await res.json();
        if (data?.query?.search?.length > 0) {
            return data.query.search[0].title;
        }
        return query;
    }

    async function getExtractForTitle(title) {
        const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${encode(title)}&redirects=1&exlimit=1`;
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query && data.query.pages;
        if (!pages) return '';
        const page = Object.values(pages)[0];
        return page && page.extract ? page.extract : '';
    }

    let accumulated = '';
    let usedTitles = new Set();

    const mainTitle = await getMainTitle(search);
    const mainExtract = await getExtractForTitle(mainTitle);
    accumulated += mainExtract.trim();
    usedTitles.add(mainTitle);

    function countLines(text) {
        if (!text) return 0;
        return text.split(/\r?\n/).filter(Boolean).length;
    }

    if (countLines(accumulated) >= minLines) return accumulated;

    async function getLinks(title) {
        const url = `${apiBase}&action=query&format=json&prop=links&titles=${encode(title)}&pllimit=max&redirects=1`;
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query && data.query.pages;
        if (!pages) return [];
        const page = Object.values(pages)[0];
        if (!page || !page.links) return [];
        return page.links.map(l => l.title);
    }

    const toFetch = [];
    try {
        const links = await getLinks(mainTitle);
        for (const t of links) {
            if (!usedTitles.has(t) && toFetch.length < 50) {
                toFetch.push(t);
                usedTitles.add(t);
            }
        }
    } catch(e){}

    const chunkSize = 10;
    for (let i = 0; i < toFetch.length && countLines(accumulated) < minLines; i += chunkSize) {
        const chunk = toFetch.slice(i, i + chunkSize);
        const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${chunk.map(encode).join('|')}&redirects=1&exlimit=max`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            const pages = data.query && data.query.pages;
            if (pages) {
                for (const p of Object.values(pages)) {
                    if (p && p.extract) {
                        accumulated += '\n\n' + p.extract.trim();
                        if (countLines(accumulated) >= minLines) break;
                    }
                }
            }
        } catch(e){}
    }

    return accumulated;
};
