E-Commerce Web Application
This is a simple e-commerce web application that allows users to browse products, view product details, and manage a shopping cart. It fetches product data dynamically using the DummyJSON API and uses LocalStorage for cart functionality.

📌 Features
✅ Product Listing Page – Displays products fetched from the API.
✅ Product Details Page – Shows product information when clicked.
✅ Shopping Cart – Add/remove items and view the total price.
✅ LocalStorage Integration – Stores cart data and selected products.
✅ Chatbot Feature – A simple chatbot for user interaction.
✅ Responsive Design – Works on desktop, tablet, and mobile devices.

🛠️ Technology Stack
Frontend: HTML, CSS (Tailwind), JavaScript

Backend (API): DummyJSON API

Storage: LocalStorage

Libraries: Font Awesome (Icons), Tailwind CSS (Styling)

/project-folder  
│── task.html         # Product listing page  
│── task.js           # Fetches API data & displays products  
│── task.css          # Styling & responsiveness  
│── viewmore.html     # Product details page  
│── viewmore.js       # Displays selected product details  
│── Cart.html         # Shopping cart page  
│── Cart.js           # Manages cart items  
│── README.md         # Project documentation  

Testing
Feature	Expected Outcome	Status
Fetch Products	Displays products from API	✅
View More Button	Opens product details page	✅
Add to Cart	Adds item to cart & updates LocalStorage	✅
Cart Display	Shows selected products & total price	✅
Clear Cart	Removes all items from cart	✅

Challenges & Solutions
1. API Fetching Issues
✔️ Solution: Implemented error handling with .catch(error => console.error(error)).

2. Cart Not Updating
✔️ Solution: Used DOMContentLoaded to refresh cart items.

3. Responsive Design
✔️ Solution: Used CSS Grid & Media Queries for better layout.

📩 Contact & Contributions
Feel free to fork, contribute, or raise issues in the repository. 🚀
For queries, reach out at: [aborse2003@gmail.com]

