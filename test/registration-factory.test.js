describe("The Factory Function", function () {
    describe("The addReg Function", function () {
        it("should add a registration number to the map", function () {
            var factory = Factory();
            factory.addReg("CA-1456")
            assert.deepEqual(
                {
                    "CA-1456": 0
                },
                factory.getAllPlates()
            );
        });
        it("should not add duplicate registration", function () {
            var factory = Factory();
            factory.addReg("CA-1456")
            factory.addReg("CA-1456")
            assert.deepEqual(
                {
                    "CA-1456": 0
                },
                factory.getAllPlates()
            );
        });
    });
    describe("The getRegList Function", function () {
        it("should return an empty list", function () {
            var factory = Factory();
            // factory.addReg("CL-0000")
            assert.deepEqual([], factory.getRegList());
        });
        it("should return an empty list", function () {
            var factory = Factory();
            factory.addReg("CL-0000")
            assert.deepEqual(["CL-0000"], factory.getRegList());
        });
    });
    describe("The getAllPlates Function", function () {
        it("should return the map of registrations", function () {
            var factory = Factory();
            factory.addReg("CJ-1478")
            factory.addReg("CA-1953")
            factory.addReg("CL-0000")
            factory.addReg("CL-25891")



            var theObject={
                "CJ-1478":0,"CA-1953":0,"CL-0000":0,"CL-25891":0
            };


            assert.deepEqual(theObject, factory.getAllPlates())
        });
    });
    describe("The validateReg Function", function () {
        it("sholud return true if registration is from valid Towns list", function () {
            var factory = Factory();
            assert.equal(true, factory.validateReg(factory.getCode("CA 123-456")));
        });
        it("sholud return true if registration is from valid Towns list", function () {
            var factory = Factory();
            assert.equal(false, factory.validateReg(factory.getCode("CK 123-456")));
        });
    });
    describe("The getCode Function", function () {
        it("should get the town code from the user input", function () {
            var factory = Factory();
            assert.equal("CA", factory.getCode("CA 123658"));
        });
        it("should get the town code from the user input", function () {
            var factory = Factory();
            assert.equal("CL", factory.getCode("CL 123658"));
        });
        it("should get the town code from the user input", function () {
            var factory = Factory();
            assert.equal("CJ", factory.getCode("CJ 123658"));
        });
    });
    describe("The filterByTown Function", function () {
        it("should return plates from Cape Town only", function () {
            var factory = Factory();
            factory.addReg("CJ-1478")
            factory.addReg("CA-1953")
            factory.addReg("CL-0000")
            factory.addReg("CL-25891")
            assert.deepEqual(["CA-1953"], factory.filterByTown("CA"));
        });
        it("should return plates from Paarl only", function () {
            var factory = Factory();
            factory.addReg("CJ-1478")
            factory.addReg("CA-1953")
            factory.addReg("CL-0000")
            factory.addReg("CL-25891")
            assert.deepEqual(["CJ-1478"], factory.filterByTown("CJ"));
        });
        it("should return plates from Stellenbosch only", function () {
            var factory = Factory();
            factory.addReg("CJ-1478")
            factory.addReg("CA-1953")
            factory.addReg("CL-0000")
            factory.addReg("CL-25891")
            assert.deepEqual([ 'CL-0000', 'CL-25891'], factory.filterByTown("CL"));
        });
    });
});
