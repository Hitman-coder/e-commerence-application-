// // let allData = JSON.parse(localStorage.getItem("allproducts")); 
// // let uniqueId = JSON.parse(localStorage.getItem("Uniqueid"));
// // console.log(allData);
// // console.log(uniqueId);
// // let matchingobject= allData.find((product)=>{
// //     return product.id == uniqueId 
// // })
// // console.log(matchingobject);

// let allData = JSON.parse(localStorage.getItem("allproducts")); 
// let uniqueId = JSON.parse(localStorage.getItem("Uniqueid")); 
// console.log(allData);
// console.log(uniqueId);

// let cnt=document.getElementById("cnt")

// let matchingobject = allData.find((product) => { 
//     return product.id == uniqueId;
// });
// console.log(matchingobject); 
// let imageUrl = matchingobject.images[0];
// let product_category = matchingobject.category;
// let product_title = matchingobject.title;
// let rating = matchingobject.rating;
// let price = matchingobject.price;
// let description = matchingobject.description;
// cnt.innerHTML = `
//         <div class="bg-gray-100 dark:bg-gray-800 py-8">
//             <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div class="flex flex-col md:flex-row -mx-4">
//                     <div class="md:flex-1 px-4">
//                         <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//                             <img class="w-full h-full object-cover" src="${imageUrl}" alt="Product Image">
//                         </div>
//                         <div class="flex -mx-2 mb-4">
//                             <div class="w-1/2 px-2">
//                                 <a href="Cart.html"> <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
//                                 </a>
//                             </div>
//                             <div class="w-1/2 px-2">
//                                 <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="md:flex-1 px-4">
//                         <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${product_title}</h2>
//                         <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${product_category}</p>
//                         <div class="flex mb-4">
//                             <div class="mr-4">
//                                 <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
//                                 <span class="text-gray-600 dark:text-gray-300">$${price}</span>
//                             </div>
//                             <div>
//                                 <span class="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
//                                 <span class="text-gray-600 dark:text-gray-300">${rating}</span>
//                             </div>
//                         </div>
//                         <div class="mb-4">
//                             <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
//                             <div class="flex items-center mt-2">
//                                 <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
//                                 <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
//                                 <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
//                                 <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
//                             </div>
//                         </div>
//                         <div class="mb-4">
//                             <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
//                             <div class="flex items-center mt-2">
//                                 <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
//                                 <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
//                                 <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
//                                 <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
//                                 <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
//                             </div>
//                         </div>
//                         <div>
//                             <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
//                             <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
//                                 ${description}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;

// // let arr = []
// // for(let i=0;i<=100;i++){
// //     arr.push(i)
// // }
// // let newarr = arr.filter((num)=>{
// //     return num>70
// // })
// // console.log(newarr);


// // let arr = []
// // for(let i=0;i<=100;i++){
// //     arr.push(i)
// // }
// // let newarr = arr.filter((num)=>{
// //     return num>70
// // })
// // console.log(newarr); 

let allData = JSON.parse(localStorage.getItem("allproducts")) || [];
let uniqueId = localStorage.getItem("Uniqueid");

let matchingObject = allData.find((product) => product.id == uniqueId);

if (matchingObject) {
    let cnt = document.getElementById("cnt");

    let imageUrl = matchingObject.images[0];
    let productTitle = matchingObject.title;
    let productCategory = matchingObject.category;
    let rating = matchingObject.rating;
    let price = matchingObject.price;
    let description = matchingObject.description;

    cnt.innerHTML = `
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img class="w-full h-full object-cover" src="${imageUrl}" alt="Product Image">
                        </div>
                        <div class="flex -mx-2 mb-4">
                            <div class="w-1/2 px-2">
                                <button  id="addtocart" class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                    Add to Cart
                                </button>
                            </div>
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${productTitle}</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${productCategory}</p>
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span class="text-gray-600 dark:text-gray-300">$${price}</span>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
                                <span class="text-gray-600 dark:text-gray-300">${rating}</span>
                            </div>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">${description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

 let addtocart =   document.getElementById("addtocart");
 console.log(addtocart);
 addtocart.addEventListener("click",()=>{
    let  cartProduct =   JSON.parse( localStorage.getItem("cart")) || [];
    // if(cartProduct.length===0){
    //     cartProduct.push(matchingObject)
    //     localStorage.setItem("cart",JSON.stringify(cartProduct))
    //     return
    // }
    let check = cartProduct.find((product)=>{
        return product.id == matchingObject.id

    })
    if(check){
        alert("Product already added to cart")
        return
    }
    cartProduct.push(matchingObject)
    localStorage.setItem("cart",JSON.stringify(cartProduct))
 })