System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, AiElement;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiElement = _export("AiElement", (function () {
        function AiElement(element) {
          _classCallCheck(this, AiElement);

          this.element = element;
        }

        _prototypeProperties(AiElement, {
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          addClass: {
            value: function addClass() {
              this.element.classList.add.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              this.element.classList.remove.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          },
          addEvent: {
            value: function addEvent(evt, callback) {
              var _this = this;

              this.element.addEventListener(evt, callInContext);

              function callInContext() {
                callback.apply(_this, arguments);
              }
            },
            writable: true,
            configurable: true
          },
          removeEvent: {
            value: function removeEvent() {
              var _this = this;

              this.element.removeEventListener(evt, callInContext, false);

              function callInContext() {
                callback.apply(_this, arguments);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return AiElement;
      })());
    }
  };
});