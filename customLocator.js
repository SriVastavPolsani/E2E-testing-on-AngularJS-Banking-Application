/**
 * Created by SriVastav on 3/20/2017.
 */

var customLocator = function() {

    by.addLocator('ngClick', function(toState, parentalelement){

        var using = parentalelement || document ;
        var prefixes = ['ng-click'];
        for (var p =0; p< prefixes.length; ++p){
            var selector = '*[' + prefixes[p] + '="' + toState + '"]';
            var inputs = using.querySelectorAll(selector);
            if (inputs.length) {
                return inputs;
            }
        }
    });
}

module.exports=new customLocator();
