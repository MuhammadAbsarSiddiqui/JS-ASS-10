// *****Q1*****
fruits = ["mango","apple","pomegranet","grapes"]
const listHTML = `<ul id="fruitlist">${fruits.map(fruit => `<li>${fruit}</li>`).join('')}</ul>`;

document.body.innerHTML += listHTML;



// *****Q2*****




document.addEventListener("DOMContentLoaded", function() {
    let numbers = [1, 2,,70, 3, 6,777, 4,,99, 5];

    function displayArray() {
        alert("Current Array: " + numbers.join(", "));
    }

    document.getElementById("addButton").addEventListener("click", function() {
        let newNumber = prompt("Enter THE number to add:");
        if (!isNaN(newNumber)) { 
            numbers.push(parseInt(newNumber));
            displayArray();
        } else {
            alert("Invalid input. Please enter a number.");
        }
    });

    document.getElementById("removeButton").addEventListener("click", function() {
        let indexToRemove = prompt("Enter the index of the number to remove:");
        if (!isNaN(indexToRemove)) { 
            indexToRemove = parseInt(indexToRemove);
            if (indexToRemove >= 0 && indexToRemove < numbers.length) {
                numbers.splice(indexToRemove, 1); 
                displayArray();
            } else {
                alert("Invalid index. Please enter a valid index.");
            }
        } else {
            alert("Invalid input. Please enter a number.");
        }
    });



    document.getElementById("findIndexButton").addEventListener("click", function() {
        let numberToFind = prompt("Enter the number to find its index:");
        let index = numbers.indexOf(parseInt(numberToFind));
        if (index !== -1) {
            alert("Index of " + numberToFind + " in the array is: " + index);
        } else {
            alert("Number not found in the array.");
        }
    });
});







