var User = /** @class */ (function () {
    function User(id) {
        this.isSelected = false;
        this.id = id;
        this.isSelected = false;
    }
    Object.defineProperty(User.prototype, "init", {
        get: function () {
            var _this = this;
            var thisObject = document.getElementById(this.id);
            var cover = document.getElementById("".concat(this.id, "-cover"));
            thisObject.addEventListener('click', function () {
                if (_this.isSelected) {
                    cover.style.opacity = '0';
                    _this.isSelected = false;
                    console.log("".concat(_this.id, " just got deselected"));
                }
                else {
                    cover.style.opacity = '0.5';
                    _this.isSelected = true;
                    console.log("".concat(_this.id, " just got selected"));
                }
            });
            //DEBUG: console.log('just initiated ' + this.id)
            return;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Vid = /** @class */ (function () {
    function Vid() {
    }
    Vid.prototype.Vid = function (id, data) {
        this.id = id;
        this.data = data;
    };
    Object.defineProperty(Vid.prototype, "init", {
        get: function () {
            var _this = this;
            var thisObject = document.getElementById(this.id);
            thisObject.addEventListener('click', function () {
                localStorage.setItem('videoDetails', JSON.stringify(_this.id));
                console.log(JSON.parse(localStorage.getItem('videoDetails')));
            });
            return;
        },
        enumerable: false,
        configurable: true
    });
    return Vid;
}());
