function calculate(num1, num2, operation, callback) {
    let result;
    
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      result = num1 / num2;
    } else {
      return callback(new Error('Invalid operation'));
    }
    
    callback(null, result);
  }
  
  function logResult(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(`The result is: ${result}`);
    }
  }
  
  calculate(10, 5, 'add', logResult); 
  
  calculate(10, 5, 'divide', logResult); 
  
  calculate(10, 5, 'foo', logResult); 