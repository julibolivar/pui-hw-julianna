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

let selectElement = document.querySelector('#glazing');
let selectElement2 = document.querySelector('#pack-size');
let basePriceElement = document.querySelector('#detail-item-price');
let selectedGlazingIndex = 0; // start with the first glazing
let selectedPackIndex = 0; // start with the first pack size
  
document.addEventListener('DOMContentLoaded', function(){
let selectElement = document.querySelector('#glazing');
for (var i = 0; i < glazeOptions.length; i++) {
    let current = glazeOptions[i];
    var option = document.createElement('option');
    option.text = current.glaze;
    option.value = i;
    selectElement.add(option);
    }
// selectElement.addEventListener('change', onChange);
});

document.addEventListener('DOMContentLoaded', function(){
let selectElement2 = document.querySelector('#pack-size');
for (var i = 0; i < packSizes.length; i++){
    let current = packSizes[i];
    var option = document.createElement('option');
    option.text = current.packSize;
    option.value = i;
    selectElement2.add(option);
    }
// selectElement2.addEventListener('change', onChange);
});



function onChange(){
    selectedGlazingIndex = selectElement.value;
    selectedPackIndex = selectElement2.value;
    let glazingPrice = parseFloat(glazeOptions[selectedGlazingIndex].priceAdd);
    let packPrice = parseInt(packSizes[selectedPackIndex].priceMultiply);
    let finalPrice = (2.49 + glazingPrice) * packPrice;
    basePriceElement.innerText = ("$" + finalPrice.toFixed(2));
    // basePriceElement.innerText = ("$ ${finalPrice.toFixed(2)}");
  }

onChange();

selectElement.addEventListener('change', onChange);
selectElement2.addEventListener('change', onChange);



// HOMEWORK 4


