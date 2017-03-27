/**
 * Created by SriVastav on 3/26/2017.
 */
var selectWrapper = require('./../selectWrapper.js');
var selector = new selectWrapper(by.id('userSelect'));
var selector2 = new selectWrapper(by.id('currency'));
var locator = require('../Util/customLocator.js');

describe("Automating Bank Manager Login",function () {

    it("Add a customer",function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.ngClick("manager()")).click();


       element(by.ngClick("addCust()")).click();
        element(by.model("fName")).sendKeys("Wazza");
        element(by.model("lName")).sendKeys("roonster");
        element(by.model("postCd")).sendKeys("60113");
        element(by.css(".btn.btn-default")).click();

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);

        });

        alertDialog.accept();
        browser.sleep(2000);

        
    }) ;

    it("Open Customer Account", function(){

        element(by.ngClick("openAccount()")).click();
        selector.selectByText("Harry Potter");
        selector2.selectByText("Pound");
        element(by.buttonText("Process")).click();

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (text) {

            console.log(text);

        });

        alertDialog.accept();
        browser.sleep(2000);


    });

    it("Validate customer Data", function(){

        element(by.ngClick("showCust()")).click();
        element(by.model("searchCustomer")).sendKeys("Harry");
        browser.sleep(3000);
        element(by.repeater("cust in Customers").row("0").column("fName")).getText().then(function (text) {

            expect(text).toEqual("Harry");
            console.log(text);

        });


    });

});