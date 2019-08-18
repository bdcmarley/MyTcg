"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = "prod";
var _default = {
  setEnv: function setEnv() {
    let paramEnv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prod';
    env = paramEnv;
  },
  get: function get(modelName) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (env === "test") {
      modelName = "mock" + modelName.substr(0, 1).toUpperCase() + modelName.substr(1);
    }

    if (_config.default[modelName]) {
      var configParams = JSON.parse(_config.default[modelName].param),
          constructorParams = $.extend({}, configParams, params);
      var inst = Object.create(_config.default[modelName].class.prototype);

      _config.default[modelName].class.call(inst, constructorParams);

      return inst;
    } else {
      throw Error("can't load model " + modelName);
    }
  }
};
exports.default = _default;