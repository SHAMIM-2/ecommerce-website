//  "দুটি সংখ্যার যোগফল বের করো",

// let sum = (a,b) => {
//     return a + b;
// }
// let a = sum(33,44);
// console.log(a)

// "দুটি সংখ্যার গুণফল বের করো"

// let multiple = (a , b) => {
//     return a * b;
// }
// let a = multiple(3,5);
// console.log(a);


// "একটি সংখ্যার ফ্যাক্টরিয়াল বের করো",

// let factoreal = (n) => {
//     let f = 1;
//     for(let i = 1; i <= n; i++){
//         f *= i
//     }
//     return f
// }

// let ff = factoreal(5);
// console.log(ff)



// "ফিবোনাচি সিরিজের প্রথম n টার তালিকা তৈরি করো",


// let f = (n) => {
//     let arr = [0,1];
//     for(let i = 2; i<n; i++){
//         arr[i] = arr[i-1]+arr[i - 2]
//     }
//     return arr;
// }
// let z = f(10);
// console.log(z)



// "একটি সংখ্যার পলিনড্রোম কিনা যাচাই করো",

// let palindom = (number) =>{

//     let nu = number.toString();
//     let a = nu.split("").reverse().join("");

//     if(a == nu){
//         return "palidom"
//     }else{
//         return"not a palindom"
//     }
// }
// let p = palindom("anaanadekhao");
// console.log(p)


// "একটি অ্যারে থেকে সর্বোচ্চ সংখ্যা খুঁজে বের করো",

// let arr = [11,33,22,23,55,44,33,6];
// let a = []
// let x = arr.reduce((a,b) => {
//     if( a > b){
//         return "a", a;
//     }else{
//         return "b",b
//     }
// });

// console.log(x)


// let arr = [11,33,22,23,55,434,33,6];
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))


// "একটি স্ট্রিং-এর দৈর্ঘ্য বের করো (বিনা .length ব্যবহার করে)",

// let str = "shamim";
// let lan = 0;
// for (let i in str){
//     console.log(i)
//     lan++;
// }
// console.log(lan)



// "একটি সংখ্যার প্রাইম কিনা যাচাই করো",


// let s = ( n) => {
//     if(n < 2)return false;
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i===0){
//             return false;
//         }
//     }
//     return true
// }
// let a = s(78);
// console.log(a)



// দুটি স্ট্রিং যুক্ত করে নতুন স্ট্রিং ফেরত দাও"

// let a = "shamim";
// let b = "md";
// let c = b.concat(a);
// console.log(c)


// "একটি অ্যারের সব উপাদানের যোগফল বের করো"

// let arr = [11,22,33,44,55,66,77];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

// let x = arr.reduce((a,b)=>{
//     return a + b
// });
// console.log(x);


// "একটি সংখ্যাকে ছক (table) আকারে প্রিন্ট করো",

// let f = (n) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(`${n} * ${i} = ${n*i}`)
//     }
// }
// f(7);
// f(10)


// "একটি সংখ্যা বিপরীত চিহ্ন (negative/positive) কিনা চেক করো",

// const f = (n) => {
//     if(n == ""|| n ===0 ){
//         console.log("you number is 0")
//     }else if(n < 0){
//         console.log("negative number..")
//     }else{
//         console.log("positive number..")
//     }
// }
// f(0)


//  "বছরটি লিপ ইয়ার কিনা নির্ণয় করো",
// let lipiyear = (year) => {
//     if (year % 400 === 0) {
//         console.log(`${year} is leap year`);
//     } else if (year % 100 === 0) {
//         console.log(`${year} is not leap year`);
//     } else if (year % 4 === 0) {
//         console.log(`${year} is leap year`);
//     } else {
//         console.log(`${year} is not leap year`);
//     }
// }

// lipiyear(2020); // leap year
// lipiyear(1900); // not leap year
// lipiyear(2000); // leap year
// lipiyear(2023); // not leap year



// "একটি অ্যারের ডুপ্লিকেট উপাদান মুছে ফেলো",

// let arr = [33,66,33,66,88,7,55,22,77,55,44,11,11,11,];
// let s = Array.from (new Set([...arr]));
// console.log(s)



// "একটি নাম তালিকা আলফাবেটিক্যালি সাজাও",
// Array.from(s.sort())


// let name = (nam) => {
//     let s = Array.from(nam);
//     let z =s.sort();
//     return z.join("")
// }

// let s = name("shamim");
// // console.log(s)



// let name = "shamim";
// console.log(name.toUpperCase());

// let arr = ["shamim","rahim","karim"];
// let newarr = [];

// for(let i = 0; i < arr.length; i++){
//     newarr.push(arr[i].toUpperCase());
// }
// console.log(newarr)



// একটি সংখ্যার ডিজিটগুলো যোগ করো",

// let sum = (n) => {
//     let s = 0;
//     for(let i = 1; i <= n; i++){
//         s += i

//     }
//     return s;
// }
// let s1 = sum(5);
// console.log(s1)


// "দুই তারিখের মধ্যে দিন গণনা করো",
// 

// let day1 = new Date('2022-03-23');
// let day2 = new Date("2025-06-3");

// let final =Math.abs(day1-day2);
// console.log(final)


// function toRoman(num) {
//     const romanMap = [
//         { value: 1000, symbol: "M" },
//         { value: 900,  symbol: "CM" },
//         { value: 500,  symbol: "D" },
//         { value: 400,  symbol: "CD" },
//         { value: 100,  symbol: "C" },
//         { value: 90,   symbol: "XC" },
//         { value: 50,   symbol: "L" },
//         { value: 40,   symbol: "XL" },
//         { value: 10,   symbol: "X" },
//         { value: 9,    symbol: "IX" },
//         { value: 5,    symbol: "V" },
//         { value: 4,    symbol: "IV" },
//         { value: 1,    symbol: "I" }
//     ];

//     let result = "";

//     for (let i = 0; i < romanMap.length; i++) {
//         while (num >= romanMap[i].value) {
//             result += romanMap[i].symbol;
//             num -= romanMap[i].value;
//         }
//     }

//     return result;
// }

// // Example
// console.log(toRoman(199)); // MCMXCIV
// console.log(toRoman(2025)); // MMXXV




// let url = "https://catfact.ninja/fact";

// let s = async () => {
//     let resolve = await fetch(url);
//     let data = await resolve.json();
//     console.log(data)
//     let x = data.fact
//     console.log(x.length)

// }
// s()



// Node 18+ এ builtin fetch থাকে; পুরনো হলে node-fetch ইনস্টল করো
// npm i node-fetch@2   (Node <=16)  -- উদাহরণ টুকু

// const API_KEY = "YOUR_KEY_HERE";
// const email = "someone@example.com";
// const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${encodeURIComponent(email)}`;

// async function validate() {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// validate();


// let s = async () =>{
//     let url = `https://en.wikipedia.org/w/api.php`
//     let res = await fetch(url);
//     let resolve = await res.json()
//     console.log(resolve)
//     console.log(JSON.stringify(resolve))
// }
// s()


// async function searengin(valu) {
//     const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${valu}`;

//     try{
//         const res = await fetch(url);
//         if(!res.ok) throw new Error("HTTP " + res.status);

//         const data = await res.json();
//         console.log(data)
//         console.log(JSON.stringify(data,null,2));
//         console.log("Search Results:", data.query.search);
//         let Search_Results = (data.query.search)
//         console.log(Search_Results[0].title)
//         console.log(data)


//     }catch(error){
//         console.error("Error:", error.message);
//     }

// }
// let a = prompt("enter you values : ");

// searengin(a);








// // 1️⃣ Search function
// async function searchWiki(query) {
//     const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${encodeURIComponent(query)}`;
//     try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error("HTTP " + res.status);
//         const data = await res.json();

//         if (data.query.search.length > 0) {
//             // console এ search results দেখাও
//             console.log("Search Results:");
//             data.query.search.forEach((item, index) => {
//                 console.log(`${index + 1}: ${item.title} (pageid: ${item.pageid})`);
//             });
//             return data.query.search; // return all results
//         } else {
//             console.log("No results found!");
//             return [];
//         }
//     } catch (error) {
//         console.error("Error:", error.message);
//         return [];
//     }
// }
// async function fetchMedia(pageid) {
//   const url = `https://en.wikipedia.org/w/api.php?action=query&pageids=${pageid}&prop=pageimages|pageterms|media&format=json&origin=*`;

//   const res = await fetch(url);
//   const data = await res.json();

//   const page = data.query.pages[pageid];
//   if (!page.media || page.media.length === 0) {
//     console.log(`No media/video found for this page: ${page.title}`);
//   } else {
//     console.log(`Media for: ${page.title}`, page.media);
//   }
// }

// // Example call
// fetchMedia(61888513); // Free Fire (video game)


// const input = document.getElementById("myInput");
// const btn = document.getElementById("searchBtn");

// btn.addEventListener("click", async () => {
//     const query = input.value.trim();
//     if (!query) return;

//     const text = await fetchLongWikipediaText(query, 100);
//     console.log('Total lines:', (text.match(/\r?\n/g) || []).length + 1);
//     console.log(text.slice(0, 5000)); // first 5000 chars

//     const value = input.value;
//     // HTML element-এ text add করা
//     output.textContent = "User typed: " + value;
// });







// // Node or modern browser (uses fetch). Replace SEARCH with your query.
// async function fetchLongWikipediaText(search, minLines = 100) {
//     const apiBase = 'https://en.wikipedia.org/w/api.php?origin=*';
//     const encode = s => encodeURIComponent(s.replace(/\s+/g, ' '));

//     // helper to get extract of a single title
//     async function getExtractForTitle(title) {
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${encode(title)}&redirects=1&exlimit=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return '';
//         const page = Object.values(pages)[0];
//         return page && page.extract ? page.extract : '';
//     }

//     // get main extract
//     let accumulated = '';
//     let usedTitles = new Set();

//     // 1) fetch main
//     const mainExtract = await getExtractForTitle(search);
//     accumulated += mainExtract.trim();
//     usedTitles.add(search);

//     // count lines function
//     function countLines(text) {
//         if (!text) return 0;
//         // split by newline OR by sentences if no newline
//         const lines = text.split(/\r?\n/).filter(Boolean);
//         return lines.length;
//     }

//     // if enough lines return
//     if (countLines(accumulated) >= minLines) {
//         return accumulated;
//     }

//     // 2) fetch links from main page to expand content
//     // get links (first up to 50-500 depending)
//     async function getLinks(title) {
//         const url = `${apiBase}&action=query&format=json&prop=links&titles=${encode(title)}&pllimit=max&redirects=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return [];
//         const page = Object.values(pages)[0];
//         if (!page || !page.links) return [];
//         return page.links.map(l => l.title);
//     }

//     const toFetch = [];
//     try {
//         const links = await getLinks(search);
//         for (const t of links) {
//             if (!usedTitles.has(t) && toFetch.length < 50) { // cap to avoid too many requests
//                 toFetch.push(t);
//                 usedTitles.add(t);
//             }
//         }
//     } catch (e) {
//         // ignore and continue
//     }

//     // 3) batch fetch extracts in chunks until we reach minLines
//     const chunkSize = 10;
//     for (let i = 0; i < toFetch.length && countLines(accumulated) < minLines; i += chunkSize) {
//         const chunk = toFetch.slice(i, i + chunkSize);
//         // batch fetch by titles
//         const titlesParam = chunk.map(encodeURIComponent).join('|');
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${chunk.map(encode).join('|')}&redirects=1&exlimit=max`;
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             const pages = data.query && data.query.pages;
//             if (pages) {
//                 for (const p of Object.values(pages)) {
//                     if (p && p.extract) {
//                         accumulated += '\n\n' + p.extract.trim();
//                         if (countLines(accumulated) >= minLines) break;
//                     }
//                 }
//             }
//         } catch (e) {
//             // skip errors for particular chunks
//         }
//     }

//     // 4) final fallback: if still not enough, try searching related pages (search API)
//     if (countLines(accumulated) < minLines) {
//         const sUrl = `${apiBase}&action=query&list=search&srsearch=${encode(search)}&srlimit=20&format=json`;
//     try {
//       const res = await fetch(sUrl);
//       const data = await res.json();
//       if (data.query && data.query.search) {
//         for (const item of data.query.search) {
//           if (countLines(accumulated) >= minLines) break;
//           const t = item.title;
//           if (usedTitles.has(t)) continue;
//           const ex = await getExtractForTitle(t);
//           if (ex) {
//             accumulated += '\n\n' + ex;
//             usedTitles.add(t);
//           }
//         }
//       }
//     } catch (e) {}
//   }

//   return accumulated;
// }

// // Example usage:
// (async () => {
//   const text = await fetchLongWikipediaText(query, 100);
//   console.log('Total lines:', (text.match(/\r?\n/g) || []).length + 1);
//   console.log(text.slice(0, 5000)); // print the first chunk
// })();











// let acc = document.querySelector("input");
// let ok = [];
// acc.addEventListener( "input",() => {
//     // ok.push(acc.value);
//     const newValu = acc.value.slice(-1)
//     ok.push(newValu)
//     console.log(ok)

// })


// let acc = document.querySelector("input");
// let ok = [];

// // input এ typing হলে শুধুমাত্র শেষ value add হবে না, পুরো string add হবে একবার
// acc.addEventListener("input", () => {
//     ok[0] = acc.value; // array এর 0 index এ পুরো input রাখা
//     console.log(ok);
// });






// let input = document.getElementById("myInput");
// let ok = [];

// input.addEventListener ("input", () => {
//     ok[0] = input.value; // সবসময় একটাই element
//     console.log(ok);
// });


// let input = () => {
//     let acc = document.querySelector("input");

//     let arr = [];
   
//     let a = acc.addEventListener("input", () => {
//         arr[0] = acc.value;
//         let newarr = arr.join("")
//         console.log(newarr)
        
        
//     })
    
// }
// input();























// <script>
// const input = document.getElementById("myInput");
// const btn = document.getElementById("searchBtn");
// const output = document.getElementById("consoleOutput");

// btn.addEventListener("click", async () => {
//     const query = input.value.trim();
//     if (!query) return;

//     output.textContent = "Fetching...";

//     const text = await fetchLongWikipediaText(query, 100);

//     const totalLines = (text.match(/\r?\n/g) || []).length + 1;
//     output.textContent = `Total lines: ${totalLines}\n\n` + text.slice(0, 5000);
// });

// // fetchLongWikipediaText function same as yours
// async function fetchLongWikipediaText(search, minLines = 100) {
//     const apiBase = 'https://en.wikipedia.org/w/api.php?origin=*';
//     const encode = s => encodeURIComponent((s||'').replace(/\s+/g, ' '));

//     async function getExtractForTitle(title) {
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${encode(title)}&redirects=1&exlimit=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return '';
//         const page = Object.values(pages)[0];
//         return page && page.extract ? page.extract : '';
//     }

//     let accumulated = '';
//     let usedTitles = new Set();

//     const mainExtract = await getExtractForTitle(search);
//     accumulated += mainExtract.trim();
//     usedTitles.add(search);

//     function countLines(text) {
//         if (!text) return 0;
//         return text.split(/\r?\n/).filter(Boolean).length;
//     }

//     if (countLines(accumulated) >= minLines) return accumulated;

//     async function getLinks(title) {
//         const url = `${apiBase}&action=query&format=json&prop=links&titles=${encode(title)}&pllimit=max&redirects=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return [];
//         const page = Object.values(pages)[0];
//         if (!page || !page.links) return [];
//         return page.links.map(l => l.title);
//     }

//     const toFetch = [];
//     try {
//         const links = await getLinks(search);
//         for (const t of links) {
//             if (!usedTitles.has(t) && toFetch.length < 50) {
//                 toFetch.push(t);
//                 usedTitles.add(t);
//             }
//         }
//     } catch(e){}

//     const chunkSize = 10;
//     for (let i = 0; i < toFetch.length && countLines(accumulated) < minLines; i += chunkSize) {
//         const chunk = toFetch.slice(i, i + chunkSize);
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${chunk.map(encode).join('|')}&redirects=1&exlimit=max`;
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             const pages = data.query && data.query.pages;
//             if (pages) {
//                 for (const p of Object.values(pages)) {
//                     if (p && p.extract) {
//                         accumulated += '\n\n' + p.extract.trim();
//                         if (countLines(accumulated) >= minLines) break;
//                     }
//                 }
//             }
//         } catch(e){}
//     }

//     return accumulated;
// }
// </script>












// const input = document.getElementById("myInput");
// const btn = document.getElementById("searchBtn");
// const output = document.getElementById("consoleOutput");

// btn.addEventListener("click", async () => {
//     const query = input.value.trim();
//     if (!query) return;

//     output.textContent = "Fetching...";

//     const text = await fetchLongWikipediaText(query, 10000);

//     const totalLines = (text.match(/\r?\n/g) || []).length + 1;
//     output.textContent = `Total lines: ${totalLines}\n\n` + text.slice(0, 50000);
// });

// // fetchLongWikipediaText function same as yours
// async function fetchLongWikipediaText(search, minLines = 10000) {
//     const apiBase = 'https://en.wikipedia.org/w/api.php?origin=*';
//     const encode = s => encodeURIComponent((s||'').replace(/\s+/g, ' '));

//     async function getExtractForTitle(title) {
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${encode(title)}&redirects=1&exlimit=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return '';
//         const page = Object.values(pages)[0];
//         return page && page.extract ? page.extract : '';
//     }

//     let accumulated = '';
//     let usedTitles = new Set();

//     const mainExtract = await getExtractForTitle(search);
//     accumulated += mainExtract.trim();
//     usedTitles.add(search);

//     function countLines(text) {
//         if (!text) return 0;
//         return text.split(/\r?\n/).filter(Boolean).length;
//     }

//     if (countLines(accumulated) >= minLines) return accumulated;

//     async function getLinks(title) {
//         const url = `${apiBase}&action=query&format=json&prop=links&titles=${encode(title)}&pllimit=max&redirects=1`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const pages = data.query && data.query.pages;
//         if (!pages) return [];
//         const page = Object.values(pages)[0];
//         if (!page || !page.links) return [];
//         return page.links.map(l => l.title);
//     }

//     const toFetch = [];
//     try {
//         const links = await getLinks(search);
//         for (const t of links) {
//             if (!usedTitles.has(t) && toFetch.length < 50) {
//                 toFetch.push(t);
//                 usedTitles.add(t);
//             }
//         }
//     } catch(e){}

//     const chunkSize = 10;
//     for (let i = 0; i < toFetch.length && countLines(accumulated) < minLines; i += chunkSize) {
//         const chunk = toFetch.slice(i, i + chunkSize);
//         const url = `${apiBase}&action=query&format=json&prop=extracts&explaintext=1&titles=${chunk.map(encode).join('|')}&redirects=1&exlimit=max`;
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             const pages = data.query && data.query.pages;
//             if (pages) {
//                 for (const p of Object.values(pages)) {
//                     if (p && p.extract) {
//                         accumulated += '\n\n' + p.extract.trim();
//                         if (countLines(accumulated) >= minLines) break;
//                     }
//                 }
//             }
//         } catch(e){}
//     }

//     return accumulated;
// }




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
