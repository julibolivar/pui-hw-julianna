let glazeOptions = [
    {
        glaze: 'Original',
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
  
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//class ---------------------------------------------------------------
let glazingPrice = 0;
let packPrice = 1;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedPrice = parseFloat(this.calcPrice(basePrice).toFixed(2));
        // console.log("calculated price" + this.calculatedPrice);

        this.element = null;
    }

    calcPrice() {
      for (let i = 0; i < glazeOptions.length; i++) {
          if (glazeOptions[i].glaze.toLowerCase() === this.glazing.toLowerCase()) {
              glazingPrice = glazeOptions[i].priceAdd;
              break; // exit the loop once the match is found
          }
      }
  
      for (let i = 0; i < packSizes.length; i++) {
          if (packSizes[i].packSize == this.size) {
              packPrice = packSizes[i].priceMultiply;
              break; // exit the loop once the match is found
          }
      }
  
      let finalPrice = (this.basePrice + glazingPrice) * packPrice;
      console.log("glaze", glazingPrice)
  
      return finalPrice;
  }
  
  

}


//set ---------------------------------------------------------------


const cartSet = new Set();

cartSet.add(new Roll ("Original", "Sugar milk", 1, 2.49));
cartSet.add(new Roll ("Walnut", "Vanilla milk", 12, 3.49));
cartSet.add(new Roll ("Raisin", "Sugar milk", 3, 2.99));
cartSet.add(new Roll ("Apple", "Keep original", 3, 3.49));

// console.log(cartSet);

//add, create, update ---------------------------------------------------------------

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
    // console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteRoll(cartItem);
    });
    
    // add the clone to the DOM
    // find the parent and add as its child
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
    const cartTotalPrice = document.querySelector('#cart-calc-price');
   
    // duplicates the cart content to the corresponding html elements
    cartImageElement.src = './assets/' + rolls[cartItem.type].imageFile;
    cartNameElement.innerText = cartItem.type + " Cinnamon Roll";
    cartGlazingElement.innerText = 'Glazing: ' + cartItem.glazing;
    cartPackElement.innerText = 'Pack Size: ' + cartItem.size;
    cartPriceElement.innerText = '$ ' + cartItem.calculatedPrice.toFixed(2);;
    cartTotalPrice.innerText = cartTotal();
  }

// delete --------------------------------------------------------------------------------

function deleteRoll(cartItem) {
    cartItem.element.remove();
    cartSet.delete(cartItem);
    
    const cartTotalElement = document.querySelector('#cart-calc-price');
    
    let currentTotalPrice = parseFloat(cartTotalElement.innerText.replace('$', '')); //numeric value
    let newTotalPrice = currentTotalPrice - cartItem.calculatedPrice;

    cartTotalElement.innerText = "$" + parseFloat(newTotalPrice.toFixed(2));
  }


//update --------------------------------------------------------------------------------

for (const cartItem of cartSet) {
    console.log(cartItem);
    createElement(cartItem);

    const cartTotalElement = document.querySelector('#cart-calc-price');
    cartTotalElement.innerText = "$" + cartTotal();
  }

  function cartTotal() {
    let total = 0.00;
    
    for (const cartItem of cartSet) {
      total += cartItem.calculatedPrice;
    }

    // console.log("total" + total);    
    return total;
  }
