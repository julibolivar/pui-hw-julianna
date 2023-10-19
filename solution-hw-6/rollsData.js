const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// cart = [];

// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get('roll');

// const detailRollName = document.querySelector('#roll-name');
// detailRollName.innerText =  rollType + " Cinnamon Roll";

// const detailImage = document.querySelector('.detail-item-image');
// detailImage.src = './assets/' + rolls[rollType].imageFile;

// const detailPrice = document.querySelector("#detail-item-price");
// detailPrice.innerHTML = "$" + rolls[rollType].basePrice;

// append to cart

// class Roll {
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//         this.type = rollType;
//         this.glazing =  rollGlazing;
//         this.size = packSize;
//         this.basePrice = basePrice;
//     }
// }


// function cartAdd() {
//     cartItem = new Roll(rollType, glazeOptions[selectedGlazingIndex],packSizes[selectedPackIndex], basePrice);
//     cart.push(cartItem);
//     console.log(cart);
// }


//--------------------------------------------------------------------------

let glazeOptions = [
    {
        glaze: 'Keep Original',
        priceAdd: 0
    },
    {
        glaze: 'Sugar Milk',
        priceAdd: 0
    },
    {
        glaze: 'Vanilla Milk',
        priceAdd: 0.50
    },
    {
        glaze: 'Double Chocolate',
        priceAdd: 1.50
    }
  ];

  let packSizes = [
    {
        packSize: '1',
        priceMultiply: 1
    },
    {
        packSize: '3',
        priceMultiply: 3
    },
    {
        packSize: '6',
        priceMultiply: 5
    },
    {
        packSize: '12',
        priceMultiply: 10
    }
  ];

let selectedGlazingIndex = 0; // start with the first glazing
let selectedPackIndex = 0; // start with the first pack size
