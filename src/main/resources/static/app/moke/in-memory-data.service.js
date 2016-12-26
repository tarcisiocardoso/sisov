"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var animais = [
            { id: 1, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2016, 10, 1), foto: '/foto/dorper.jpeg' },
            { id: 2, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2015, 10, 9), foto: '/foto/dorper.jpeg' },
            { id: 3, sexo: 'M', raca: 'Dorper', dtNascimento: new Date(2015, 0, 1), foto: '/foto/dorper.jpeg' },
            { id: 4, sexo: 'F', raca: 'Dorper', dtNascimento: new Date(2014, 0, 1), foto: '/foto/femea_dorper.jpg' }
        ];
        var upload = [];
        return { animais: animais };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map