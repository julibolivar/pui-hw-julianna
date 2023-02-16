// rolls array and sum numbers
let allRolls = [
    {
        roll: 'Keep Original',
        priceAdaptation: '0'
    },
    {
        roll: 'Sugar Milk',
        priceAdaptation: '0'
    },
    {
        roll: 'Vanilla Milk',
        priceAdaptation: '0.5',
    },
    {
        roll: 'Double Chocolate',
        priceAdaptation: '1.5',
    }
  ];
  

function glazingChange(element){
    // get value
    const priceChange = element.value;
    // size id to number
    let size = parseInt(document.querySelector("#size").value);
    // math with rolls array
    let glazingPrice = parseFloat(allRolls[priceChange].priceAdaptation);
    let totalPrice = (2.49 + glazingPrice)*size;
    // display price function
    displayPrice(totalPrice.toFixed(2));
}

function displayPrice(rollPrice){
    let rollPriceDisplay = document.querySelector("#totalPrice");
    // replace total price text
    rollPriceDisplay.innerText = rollPrice;
}

function sizeChange(element){
    const size = element.value;
    // glazing id to number
    let glazingPriceIndex = parseInt(document.querySelector("#glazing-options").value);
    // math with rolls array
    let glazingPrice = parseFloat(allRolls[glazingPriceIndex].priceAdaptation);
    let totalPrice = (2.49 + glazingPrice)*size;
    displayPrice(totalPrice.toFixed(2));
}