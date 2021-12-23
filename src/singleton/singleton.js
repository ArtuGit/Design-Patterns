import {Username} from "./Username.js"

export const Singleton = (function () {
  let instance;

  function createInstance() {
    let classObj = new Username();
    return classObj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();


export const Singleton2 = (function () {
  let instance = null;
  return class Singleton {
    constructor() {
      if (instance !== null) {
        return instance;
      }
      instance = this;
      this._username = null;
    }

    get username() {
      return this._username;
    }

    set username(value) {
      this._username = value;
    }

  };
})();