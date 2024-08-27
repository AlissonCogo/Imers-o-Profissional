var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Aguia = /** @class */ (function (_super) {
    __extends(Aguia, _super);
    function Aguia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aguia.prototype.voa = function () {
        console.log("Voando");
    };
    return Aguia;
}(Animal));
var Galinha = /** @class */ (function (_super) {
    __extends(Galinha, _super);
    function Galinha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Galinha.prototype.voa = function () {
        console.log("Batendo bem forte , mas não sai do lugar");
    };
    return Galinha;
}(Animal));
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("Au Au");
    };
    return Cachorro;
}(Animal));
function decolar(animal) {
    animal.voa();
    console.log("aaaaaaaaaaaaaaaaaaaaa");
}
function protegerCasa(animal) {
    console.log("aaaaaaaaaaaaaaaaaaaaa");
}
var gaviao = new Aguia();
var cachorroLoco = new Cachorro();
protegerCasa(cachorroLoco);
decolar(gaviao);
// const pinsher = new Cachorro();
// decolar(pinsher);
