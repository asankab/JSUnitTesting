var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

describe('Sanitize', function(){
   it('return lower case of a string', function(){
       var inputWord = 'hello world';
       inputWord = word.sanitize(inputWord);

       expect(inputWord).to.equal('hello world');
       expect(inputWord).to.not.equal('HELLO WORLD');
       expect(inputWord).to.be.a('string');
       expect(inputWord).to.not.be.a('number');
       expect(inputWord).contain('hello');
       //expect("arrayVariable").to.include.members([ 'hello','world' ]);
   });

    it('remove any hypens');
});


describe('Git Hub Info', function () {
    it('returns repo info from GitHub', function (done) {//skip or it.only('returns repo info from GitHub', function (done) {
        word.info(function(reply){
            console.log(reply);
            expect(reply.language).to.equal("HTML");
            done();
        })

        console.log('HELLO');
    })
})

//mocha --timeout 5000