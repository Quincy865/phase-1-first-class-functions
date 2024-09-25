const receivesAFunction = (callback) => {
    callback(); 
  };
  function returnsANamedFunction() {
    return function namedFunction() {
      return "The Named Function!";
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
      return "The anonymous function!";
    };
  }
  