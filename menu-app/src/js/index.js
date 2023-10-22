const menu = [
    {
        id: 1,
        title: "buternmilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./Assests/a.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "Vegetable",
        category: "lunch",
        price: 13.99,
        img: "./Assests/b.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 3,
        title: "buternmilk pancakes",
        category: "shakes",
        price: 15.99,
        img: "./Assests/d.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 4,
        title: "buternmilk pancakes",
        category: "breakfast",
        price: 14.99,
        img: "./Assests/e.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 5,
        title: "buternmilk pancakes",
        category: "lunch",
        price: 15.99,
        img: "./Assests/f.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 6,
        title: "buternmilk pancakes",
        category: "shakes",
        price: 20.99,
        img: "./Assests/g.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 7,
        title: "buternmilk pancakes",
        category: "lunch",
        price: 15.99,
        img: "./Assests/h.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 8,
        title: "buternmilk pancakes",
        category: "shakes",
        price: 15.99,
        img: "./Assests/i.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 9,
        title: "buternmilk pancakes",
        category: "dinner",
        price: 15.99,
        img: "./Assests/j.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 10,
        title: "buternmilk pancakes",
        category: "dinner",
        price: 15.99,
        img: "./Assests/k.jpg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle , hammock freegan copper mug whatever cold-pressed`,
    },
];

let allDishes = document.getElementById("allDishes");
let content = "";

function displayAll(dishes){
    content = "";
    dishes.forEach((dish) => {
        let individualDish = `<div class="dish">
    <img src= ${dish.img}>
    <div class="dishOuter">
      <div class="dishInner">
        <h3 class="dishName">${dish.title}</h3>
        <h3 class="dishPrice">$${dish.price}</h3>
      </div>       
    <p class="dishContent"> ${dish.desc}</p>
    </div> 
    </div>`;
    content+= individualDish;
    });
    allDishes.innerHTML = content;
}




// filter logic here

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button)=>button.addEventListener("click", (e)=>{filterItems(e.target.innerText);}));

function filterItems(category){
    allDishes.innerHTML += "";
    menu.filter((dish)=>dish.category.toLowerCase() == category.toLowerCase());
    displayAll(menu);
}