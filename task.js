let box = document.getElementById("displayData")
 
 
fetch("https://dummyjson.com/products").then((e)=>e.json()).then((data)=>{
    // console.log(data.products);
    let all_products = data.products;
    let jsondata = JSON.stringify(all_products)
    localStorage.setItem("allproducts",jsondata)
    let input = ""
   all_products.map((product)=>{
let productId = product.id;
console.log(productId)
let imageUrl= product.images[0];
let product_category = product.category
let product_title = product.title;
let rating = product.rating;
input = input+`
<div class="card">
  <img src=${imageUrl} alt=${product_title}/>
  <h4>${product_title}</h4>
  <p>${product_category}</p>
  <div>
    <p>${rating}</p>
    <a href="viewmore.html"><button onclick="getId(${productId})">VIEW MORE</button></a>
  </div>
</div>
`
// console.log(product.title)
 
   })
 
  console.log(input)
  box.innerHTML = input
 
}).catch((e)=>{console.error(e)})

function getId(id){
    localStorage.setItem("Uniqueid",id)
}



// chatbot logic
let botimg=document.getElementById("botimg")
let Cross=document.getElementById("Cross")
let messagebox=document.getElementById("messagebox")


botimg.addEventListener("click",()=>{
  messagebox.style.display="block";
})
Cross.addEventListener("click",()=>{
  messagebox.style.display="none";
})


let messagecnt=document.getElementById("messagecnt")
let userid=document.getElementById("userid")
let messagearray=["hello,","how can i help you","enter your query","will never get back to you","tkbsdk 😎"]
let index =0

userid.addEventListener("keydown",(e)=>{
  // console.log(e.key)
  if (e.key=="Enter"){
    console.log(e.target.value) 
    let div = document.createElement("div")
    let botmsgcnt = document.createElement("botmsgcnt")
    botmsgcnt.innerHTML=`<div class="flex items-start space-x-2">
                <div class="w-8 h-8 rounded-full neo-shadow flex-shrink-0 flex items-center justify-center">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">AD</span>
                </div>
                <div class="bg-white dark:bg-gray-700 p-3 rounded-lg neo-shadow max-w-xs">
                    <p class="text-sm text-gray-700 dark:text-gray-300">${messagearray[index]})</p>
                </div>
            </div>`

      div.innerHTML=`<div class="flex items-start justify-end space-x-2">
                <div class="bg-blue-500 p-3 rounded-lg neo-shadow max-w-xs">
                <p >${e.target.value}</p>
                    
                </div>
            </div>
        </div>`;
      messagecnt.appendChild(div)
      messagecnt.appendChild(botmsgcnt)
      index++;
      userid.value=""
    
}})

// let div=document.createElement("div")
// div.textContent= "this div is created dynamically"
// div.innerHTML=`
// <div class="flex items-start space-x-2">
//                 <div class="w-8 h-8 rounded-full neo-shadow flex-shrink-0 flex items-center justify-center">
//                     <span class="text-sm font-medium text-gray-700 dark:text-gray-300">AD</span>
//                 </div>
//                 <div class="bg-white dark:bg-gray-700 p-3 rounded-lg neo-shadow max-w-xs">
//                     <p class="text-sm text-gray-700 dark:text-gray-300">Hey there! How's it going?</p>
//                 </div>
//             </div>`
// console.log(div)

// let cnt=document.getElementById("cnt");

// cnt.appendChild(div)
