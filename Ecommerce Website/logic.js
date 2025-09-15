// const template = document.querySelector('template');
// const section6 = document.querySelector('.section-6');
// // section6.appendChild(template.content.cloneNode(true));


// let all_product_callation = [
//     {
//         product_name : "parfiom",
//         pic:"images (2).jpg"
//     }
// ];
// // clone করা হলো
// const clone = template.content.cloneNode(true);

// // clone এর ভেতরে img select করা
// const img = clone.querySelector("img");
// const name = clone.querySelector("#poduct-n")

// // data থেকে src বসানো
// img.src = all_product_callation[0].pic;
// name.innerText = all_product_callation[0].product_name;

// // clone কে DOM এ append করা
// section6.appendChild(clone);





// main product arr start 

let arr = [
    {
        name : "camera",
        img : "../allpic/camera.jpg",
        title:`Camera Price starts from BDT 4,700 to BDT 780,000 in Bangladesh, depending on camera type, brand, and model. Buy latest DSLR, Mirrorless, Digital Camera, Action ...`,
        prices : 5673,
        stocks:60,
    },
    {
        name : "jota",
        img : "../allpic/jota.jpg",
        title:`allow or cause (something) to be visible.`,
        prices : 763,
        stocks:40
    },
    {
        name : "liptick",
        img : "../allpic/liptick.jpg",
        title:"Matte lipstick → শুকনো/shine কম থাকে, লং-লাস্টিং।Glossy",
        prices : 3324,
        stocks:70
    },
    {
        name : "perfiom",
        img:"../allpic/perfiom.jpg",
        title:"Best Perfume Shop in Bangladesh. Perfume Bangladesh is selling 100% authentic perfumes. We are dedicated to serving you the best, fast, & reliable service ...",
        prices :675,
        stocks : 989

    }
]


// main product arr ends


let tem = document.querySelector("template");
let maincontener = document.querySelector(".section-6");



let output = (valu) => {
    if(!valu){
        return false;
    }

    let i = 1;
    valu.forEach((element) => {

        let colon = tem.content.cloneNode(true);
        const {name,img,title,prices,stocks} = element;

        colon.querySelector("#product").setAttribute("id",`product${i++}`);
        colon.querySelector("#poduct-n").innerText = name;
        colon.querySelector("#poduct-name").innerText = name;
        colon.querySelector("#product-img").src = img;
        colon.querySelector("#product-img").alt = name;
        colon.querySelector("#price-1").innerText = ` $${prices}`;
        colon.querySelector("#price-2").innerText = ` $${prices*3}`;
        colon.querySelector("#poduct-stocks").innerText = stocks;
        colon.querySelector("#poduct-title").innerText = title;

        colon.querySelector("#main-quantity").addEventListener("click",(e) => {

        })


        maincontener.append(colon);

    });
    

}

output(arr)