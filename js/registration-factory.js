var Factory = function(stored) {

    var regMap = stored || {};

    function addReg(plate) {
        if (regMap[plate] === undefined) {
            regMap[plate] = 0;
            return true;
        }
        return false;
    }

    function getRegList() {
        return Object.keys(regMap);
    }

    function formatPlate(plate) {
        var array = plate.split(" ")[1]
        var formattedPlate = "";

        if (array.length == 6) {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                formattedPlate += element;
                if (index == 2) {
                    formattedPlate += "-";
                }
            }
        }
        return plate.split(" ")[0] + " " + formattedPlate;

    }

    function validateReg(input) {

        var validCharacters = /^[\w ]+$/;

        var validTowns = ["CA", "CAA", "CY", "CJ"];


        if (input.match(validCharacters)) {

            for (let i = 0; i < validTowns.length; i++) {
                const element = validTowns[i];
                if (element == getCode(input)) {
                    return true;
                }
            }
        }
        return false
    }

    function getCode(userinput) {
        return userinput.split(" ")[0].toUpperCase()
    }

    function getAllPlates() {
        return regMap;
    }

    function filterByTown(loc) {
        var regList = getRegList();

        if (loc == "") {
            return regList;
        }
        var list = []
        for (var i = 0; i < regList.length; i++) {
            var reg = regList[i].trim()
            if (reg.startsWith(loc)) {
                list.push(reg);
            }
        }
        return list;
    }

    return {
        addReg,
        getRegList,
        getAllPlates,
        validateReg,
        filterByTown,
        getCode,
        formatPlate
    }
}