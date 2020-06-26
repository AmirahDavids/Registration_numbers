var Factory = function (stored) {

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

        var code = plate.split(" ")[0];
        var regNumber = plate.split(" ")[1].replace(/-/g,);
        var formattedPlate = "";
        var length = regNumber.length;

        for (let i = 0; i < regNumber.length; i++) {
            let character = regNumber[i];
            if (length == 6 && i == 3) {
                formattedPlate += "-";
            }
            formattedPlate += character;
        }

        return code + " " + formattedPlate;
    }


    function validateReg(input) {


        var validCharacters = /^[\w -]+$/;

        var validTowns = ["CA", "CY", "CJ"];

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