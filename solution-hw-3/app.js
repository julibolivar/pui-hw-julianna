const basePrice = 2.49;

let glazeOptions = [
    {
        glaze: 'Keep Original',
        glazeAdd: '0'
    },
    {
        glaze: 'Sugar Milk',
        glazeAdd: '0'
    },
    {
        glaze: 'Vanilla Milk',
        glazeAdd: '0.5',
    },
    {
        glaze: 'Double Chocolate',
        glazeAdd: '1.5',
    }
];

let selectGlaze = document.getElementById("glazing")
for (index in glazeOptions) {
    selectGlaze.options[selectGlaze.options.length] = new Option(glazeOptions[index].glaze);
    console.log("Populating Glazing Menu");
}

let sizeOptions = [
    {
        size: '1',
        sizeMult: '1'
    },
    {
        size: '3',
        sizeMult: '3'
    },
    {
        size: '6',
        sizeMult: '5',
    },
    {
        size: '12',
        sizeMult: '10',
    }
];
//   rolls and price adaptations


function glazingChange(element) {
    const priceChange = element.value;
    // get value of selected glazing option

    let packPrice = parseInt(document.querySelector("#packPrice").value);
    //#packPrice to number

    let totalPrice = (basePrice + glazingPrice) * packPrice;
    // add your code to do update the price ...
}



function displayGlaze(glaze) {
    let carTitleElement = document.querySelector('#glaze');
    let carInfoElement = document.querySelector('#car-info');

    carTitleElement.innerText = car.model;
    carInfoElement.innerText = car.description;
}


function onSelectValueChange() {
    // In this function, `this` corresponds to the select
    // element. So `this.value` will contain the value of the
    // selected option as a string.
    console.log(this.value);

    // We need to convert the string value to an integer
    let rollsIndex = parseInt(this.value);

    // Now retrieve the object at the index specified by the select's value
    let rollsToDisplay = allRolls[rollsIndex];

    // Update the UI
    displayRolls(rollsToDisplay);
}


let selectElement = document.querySelector('#rolls');
//find the select element

selectElement.addEventListener('change', onSelectValueChange);
//event listener for when user changes the option

displayRolls(allRolls[0]);
// display the first roll

