cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const detailRollName = document.querySelector('#roll-name');
detailRollName.innerText =  rollType + " Cinnamon Roll";

const detailImage = document.querySelector('.detail-item-image');
detailImage.src = './assets/' + rolls[rollType].imageFile;

const detailPrice = document.querySelector("#detail-item-price");
detailPrice.innerHTML = "$" + rolls[rollType].basePrice;

let selectElement = document.querySelector('#glazing');
let selectElement2 = document.querySelector('#pack-size');
let basePriceElement = document.querySelector('#detail-item-price');
let basePrice = rolls[rollType].basePrice;
// let selectedGlazingIndex = 0; // start with the first glazing
// let selectedPackIndex = 0; // start with the first pack size
  
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
    let finalPrice = (basePrice + glazingPrice) * packPrice;
    basePriceElement.innerText = ("$" + finalPrice.toFixed(2));
  }

onChange();

selectElement.addEventListener('change', onChange);
selectElement2.addEventListener('change', onChange);

