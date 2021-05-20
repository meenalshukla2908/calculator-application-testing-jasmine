describe("Calculator Functions", function() {
 
    describe("add", function() {
   
      it("should add two positive numbers", function() {
        let value = add(3, 2);
        expect(value).toBe(5);
      });
   
      it("should add a positive and a negative number", function() {
        let value = add(3, -2);
        expect(value).toBe(1);
      });
   
      it("should give the same value when adding zero", function() {
        let value = add(3, 0);
        expect(value).toBe(3);
      });
   
    });

    describe("subtract", function() {
   
        it("should subtract two positive numbers", function() {
          let value = subtract(3, 2);
          expect(value).toBe(1);
        });
     
        it("should subtract a positive and a negative number", function() {
          let value = subtract(3, -2);
          expect(value).toBe(5);
        });
     
        it("should give the same value when subtracting zero", function() {
          let value = subtract(3, 0);
          expect(value).toBe(3);
        });
     
      });

      describe("multiply", function() {
   
        it("should multiply two positive numbers", function() {
          let value = multiply(3, 2);
          expect(value).toBe(6);
        });
     
        it("should multiply a positive and a negative number", function() {
          let value = multiply(3, -2);
          expect(value).toBe(-6);
        });
     
        it("should give 0 when multiplying by zero", function() {
          let value = multiply(3, 0);
          expect(value).toBe(0);
        });
        
        it("should multiply by a decimal number and return a whole number, 10*(0.5) = 5", function() {
        let value = multiply(5,0.5);
        expect(value).toBe(2.5);
    });
     
      });

      describe("divide", function() {
   
        it("should divide two positive numbers", function() {
          let value = divide(3, 3);
          expect(value).toBe(1);
        });
     
        it("should divide a positive and a negative number", function() {
          let value = divide(3, -3);
          expect(value).toBe(-1);
        });
     
        it("should throw an exception when dividing by zero", function() {
            let divideByZero = function() { divide(3, 0); };
            expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
          });
     
      });

      describe("mixed operations", function() {
   
        it("should be able to perform multiple operations", function() {
          let value = mixed(2,4,5,2);
          expect(value).toBe(12);
        });
    });
   
  });

/*describe("Calculator operations - Addition:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        currentInput = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });
       it("should add two numbers together", function () {
          expect(add(1, 2)).toBe(3);
    });

    it("should add two numbers together, 5+5 = 10", function() {
        inputs = ["5"];
        add();
        inputs = ["5"];
        equal();
        expect(total).toEqual(10);
    });
});*/

