/**
 * Created by SriVastav on 3/26/2017.
 */

var selectWrapper = require('./../selectWrapper.js');
var selector = new selectWrapper(by.id('userSelect'));

describe("Automating Customer Login",function () {

   it("Selecting your name",function(){

       browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
       element(by.buttonText("Customer Login")).click();
       selector.selectByText("Ron Weasly");
       element(by.buttonText("Login")).click();

   }) ;

   it("Deposit Amount", function(){

       element(by.buttonText('Deposit')).click();
       element(by.model('amount')).sendKeys('1000');
       element(by.css(".btn.btn-default")).click();
       element(by.binding("message")).getText().then(function (text) {

           console.log(text);
           expect(text).toEqual("Deposit Successful");

       });


   });

    it("Withdraw Amount", function(){

        element(by.buttonText('Withdrawl')).click();
        element(by.model('amount')).sendKeys('500');
        element(by.css(".btn.btn-default")).click();
        element(by.binding("message")).getText().then(function (text) {

            console.log(text);
            expect(text).toEqual("Transaction successful");

        });


    });

});

