var Factory = function (stored) {

    var regMap = stored || {};

    function addReg(plate) {
        addRegNumber(plate);

    }

    function addRegNumber(plate) {
        if (regMap[plate] === undefined) {
            regMap[plate] = 0;
        }
    }

    function getRegList() {
        return Object.keys(regMap);
    }

    function validateReg(code) {
        var validTowns = ["CA","CL","CJ"]
        for (let i = 0; i < validTowns.length; i++) {
            const element = validTowns[i];
            if (element == code) {
                return true
            }
            
        }
        return false 
    }
    function getCode(userinput){
        return userinput.split(" ")[0].toUpperCase()
    }

    function getAllPlates() {
        return regMap;
    }

    function filterByTown(loc) {
        var regList = getRegList();
        var list = []
        for (var i = 0; i < regList.length; i++) {
            var reg = regList[i].trim()
            if (reg.startsWith(loc)) {
                list.push(reg);
            }
        }
        return list;
    }

    function resetBtn() {
         regMap = {};
        localStorage.clear("registrations");
    }


    return {
        addReg,
        getRegList,
        getAllPlates,
        validateReg,
        filterByTown,
        getCode,
        resetBtn
    }
}

