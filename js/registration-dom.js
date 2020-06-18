window.addEventListener("DOMContentLoaded", function () {

    var inputBox = document.getElementById("inputBox")
    var addButton = document.getElementById("addButton");
    var townSelect = document.getElementById('town');


    var listToBeDisplayed = document.getElementById("displayList")

    var resetBtn = document.getElementById("resetButton")

    var stored = localStorage['plates'] ? JSON.parse(localStorage['plates']) : {};

    var registrationFactory = Factory(stored);

    window.addEventListener("load", function () {
        var list = registrationFactory.getRegList();
        displayRegistrations(list);
    });

    addButton.addEventListener("click", function () {

        var input = inputBox.value.toUpperCase();
        
        var isValid = registrationFactory.validateReg(input);


        if (isValid) {
            var added = registrationFactory.addReg(input);
            if (added) {
                createPlate(input);
                localStorage['plates'] = JSON.stringify(registrationFactory.getAllPlates());
            }
        } else{
            message.innerHTML = "Please enter a valid registration like this CAA 123-456"; 
        }
        inputBox.value = "";
        inputBox.focus();
    });

    townSelect.addEventListener("change",function(){
        listToBeDisplayed.innerHTML = "";

        var list = registrationFactory.filterByTown(townSelect.value);
        displayRegistrations(list);
        
    });

    resetBtn.addEventListener("click", function () {
        reset();
        location.reload();
    });

    function displayRegistrations(list) {
        for (var i = 0; i < list.length; i++) {
            createPlate(list[i]);
        }
    }

    function createPlate(input) {
        var newListItem = document.createElement('li');
        newListItem.textContent = input.toUpperCase();
        newListItem.classList.add("number-plates")
        listToBeDisplayed.appendChild(newListItem);
         listToBeDisplayed.insertBefore(newListItem, listToBeDisplayed.childNodes[0]);
    }
    
    function reset() {
        localStorage.clear("registrations");
    }
});
