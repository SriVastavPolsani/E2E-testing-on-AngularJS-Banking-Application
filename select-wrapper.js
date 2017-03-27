/**
 * Created by SriVastav on 3/26/2017.
 */

var SelectWrapper = function(selector){

    this.webElement = element(selector);

}

SelectWrapper.prototype.getOptions = function () {

    return this.webElement.all(by.tagName('option'));

};

SelectWrapper.prototype.getSelectedOptions = function () {

    return this.webElement.all(by.css('option[selected="selected"]'));

};

SelectWrapper.prototype.SelectByValue = function (value) {

    return this.webElement.all(by.css('option[value="'+value+'"]')).click();

};

SelectWrapper.prototype.SelectByPartialText = function (text) {

    return this.webElement.all(by.cssContainingText('option',text)).click();

};

SelectWrapper.prototype.SelectByText = function (text) {

    return this.webElement.all(by.xpath('option[.="'+text+'"]')).click();

};

module.exports = SelectWrapper;





