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
  
cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


const cartSet = new Set();

cartSet.add(new Roll ("Original", "Sugar milk", 1, 2.49));
cartSet.add(new Roll ("Walnut", "Vanilla milk", 12, 3.49));
cartSet.add(new Roll ("Raisin", "Sugar milk", 3, 2.99));
cartSet.add(new Roll ("Apple", "Keep original", 3, 3.49));

console.log(cartSet);

// this function creates a new cartItem object, and adds it to cartSet.
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
 
  const cartItem = new Roll (rollType, rollGlazing, packSize, basePrice);
  
  cartSet.add(cartItem);
  return cartItem;
}

function createElement(cartItem) {
    
    const template = document.querySelector('#cart-template'); 
    const clone = template.content.cloneNode(true);
    
    cartItem.element = clone.querySelector('.cart-item');
    
    const btnDelete = cartItem.element.querySelector('.remove-btn');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteRoll(cartItem);
    });
    
    // add the notecard clone to the DOM
    // find the notecard parent (#notecard-list) and add our notecard as its child
    const cartListElement = document.querySelector('.cart-columns');
    cartListElement.prepend(cartItem.element);
    
    // populate the notecard clone with the actual notecard content
    updateElement(cartItem);
  }
  
  function updateElement(cartItem) {
    // get the HTML elements that need updating
    const cartImageElement = cartItem.element.querySelector('.cart-item-image'); 
    const cartNameElement = cartItem.element.querySelector('.cart-item-name'); 
    const cartGlazingElement = cartItem.element.querySelector('.cart-item-glaze'); 
    const cartPackElement = cartItem.element.querySelector('.cart-item-size'); 
    const cartPriceElement = cartItem.element.querySelector('.cart-item-price');

    const calcPrice = calculatePrice(cartItem);

    // duplicates the cart content to the corresponding html elements
    cartImageElement.src = './assets/' + rolls[cartItem.type].imageFile;
    cartNameElement.innerText = cartItem.type + " Cinnamon Roll";
    cartGlazingElement.innerText = 'Glazing: ' + cartItem.glazing;
    cartPackElement.innerText = 'Pack Size: ' + cartItem.size;
    cartPriceElement.innerText = '$ ' + calcPrice;
  }

// delete --------------------------------------------------------------------------------

function deleteRoll(cartItem) {
    cartItem.element.remove();
    cartSet.delete(cartItem);
    updatePrice(); // update the total price after removing an item
  }

  //price --------------------------------------------------------------------------------

  function updatePrice() {
    const calcPrice = document.querySelector('#cart-calc-price'); 
    let sum = 0;
    for (let item of cartSet) { 
        sum += calculatePrice(item); //define a calculatePrice function
    }
    calcPrice.innerText = "$" + sum.toFixed(2);
}

  function calculatePrice(cartItem){
    // let glazingChange = 0;
    // for(const glazing of glazeOptions) {
    //     if(glazing.packSize == cartItem.glazing) {
    //         glazingChange = glazing.price;
    //     }
    // }
    // let packChange = 0;
    // for(const item of allPackSize) {
    //     if(item.packSize == cartItem.size) {
    //         packChange = pack.priceMultiply;
    //     }
    // }

    // // calculates price based up glaze + pack size changes
    // let calculatedPrice = (roll.basePrice + glazingChange) * packChange;

    // return calculatedPrice.toFixed(2);
    console.log("");
    }

//update --------------------------------------------------------------------------------

for (const cartItem of cartSet) {
    console.log(cartItem);
    createElement(cartItem);
  }


