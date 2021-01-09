function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

function disableReactDevTools() {
  // Ensure the React Developer Tools global hook exists
  if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
    return;
  }

  // Replace all global hook properties with a no-op function or a null value
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
}

disableReactDevTools();
