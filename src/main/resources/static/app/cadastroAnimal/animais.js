System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animal;
    return {
        setters:[],
        execute: function() {
            Animal = (function () {
                function Animal(id, identificador, dtNascimento, power, alterEgo) {
                    this.id = id;
                    this.identificador = identificador;
                    this.dtNascimento = dtNascimento;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return Animal;
            }());
            exports_1("Animal", Animal);
        }
    }
});
//# sourceMappingURL=animais.js.map