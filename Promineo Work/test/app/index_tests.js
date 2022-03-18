// writing unit tests practice.

 var expect = chai.expect;

describe('My Functions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5'); 
        });

        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        });
    });
});

// describe('Boiler Function', function(){
//     it ('should return "Boiler Up!"', function(){

//         var x = boilers("hi", 70);
//         expect(x).to.equal('Boiler Up!');
//     })
// })

