"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class EventManager {
  constructor() {
    this.mlisteners = {};
  }

  trigger(event) {
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.mlisteners[event]) {
      this.mlisteners[event].forEach(el => {
        el.call(this, payload);
      });
    }
  }

  on(event, callback) {
    if (this.mlisteners[event] === undefined) {
      this.mlisteners[event] = [];
    }

    this.mlisteners[event].push(callback);
  }

}

exports.default = EventManager;