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