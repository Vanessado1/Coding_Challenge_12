// Task 1 Created Revenue Metric Card 

const dashboard_1 = document.getElementById("dashboard"); // using getElementById
const dashboard_2 = document.querySelector("#dashboard"); // using querySelector
const revenueCard = document.createElement("div"); // create a new <div> element 
// assigned class and id to the new element 
revenueCard.setAttribute("class", "metric-card"); // setting class attribute 
revenueCard.setAttribute("id", "revenueCard"); // setting id attribute 
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>" // creating card title and placeholder value 
dashboard_1.appendChild(revenueCard); // new metric card to dashboard container

// Task 2 Updating Dashboard Metrics 
// selected all elements in the metric card 
const metricCards = document.querySelectorAll(".metric-card");
// updated each card inner text and style 
Array.from(metricCards).forEach(card =>{card.innerHTML += " - Updated";
    card.style.backgroundColor = 'lightgreen';
});

// Task 3 Dynamic Inventory Management 
// append new product item to inventory list 
const inventoryList = document.getElementById('inventoryList');
// created a function to represent a product 
function addInventoryItem(productName) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class','product-item'); // set class attribute 
    listItem.setAttribute('data-product', productName); // set custom data attribute 
    listItem.textContent = productName; // setting inner text to product name 

    listItem.addEventListener('click', () =>{
        inventoryList.removeChild(listItem); // removed clicked items from inventory list 
    });
    inventoryList.appendChild(listItem);
}