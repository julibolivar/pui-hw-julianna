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
    let size = parseInt(document.querySelector("#size").value);
    let glazingPrice = parseFloat(allRolls[priceChange].priceAdaptation);
    let totalPrice = (2.49 + glazingPrice)*size;
    displayPrice(totalPrice.toFixed(2));
    console.log("totalPrice");
    console.log(totalPrice);
    console.log("glazingPrice");
    console.log(glazingPrice);
    console.log("size");
    console.log(size);
}

function displayPrice(rollPrice){
    let rollPriceDisplay = document.querySelector("#totalPrice");
    rollPriceDisplay.innerText = rollPrice;
}

function sizeChange(element){
    const size = element.value;
    let glazingPriceIndex = parseInt(document.querySelector("#glazing-options").value);
    let glazingPrice = parseFloat(allRolls[glazingPriceIndex].priceAdaptation);
    let totalPrice = (2.49 + glazingPrice)*size;
    displayPrice(totalPrice.toFixed(2));
    console.log("totalPrice");
    console.log(totalPrice);
    console.log("glazingPrice");
    console.log(glazingPrice);
    console.log("size");
    console.log(size);
    
}