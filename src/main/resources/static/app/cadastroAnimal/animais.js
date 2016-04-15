System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animal;
    return {
        setters:[],
        execute: function() {
            Animal = (function () {
                function Animal(id) {
                    this.id = id;
                    //this.pai = new Animal(0);
                    //this.mae = new Animal(0);
                }
                return Animal;
            }());
            exports_1("Animal", Animal);
        }
    }
});
//# sourceMappingURL=animais.js.map