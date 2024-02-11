var Vide = /** @class */ (function () {
    function Vide(id) {
        this.selected = false;
        this.id = id;
        this.selected = false;
    }
    Object.defineProperty(Vide.prototype, "init", {
        get: function () {
            var _this = this;
            var thisObject = document.getElementById(this.id);
            thisObject.addEventListener('click', function () {
                if (_this.selected) {
                    _this.selected = false;
                    console.log("".concat(_this.id, " just got deselected"));
                }
                else {
                    _this.selected = true;
                    console.log("".concat(_this.id, " just got selected"));
                }
            });
            console.log('just initiated ' + this.id);
            return;
        },
        enumerable: false,
        configurable: true
    });
    return Vide;
}());
