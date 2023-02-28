function add(a, b, callback) {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 1000);
  }
  
  add(1, 2, (result) => {
    console.log(`Result of addition: ${result}`);
  
    add(result, 3, (result) => {
      console.log(`Result of addition: ${result}`);
  
      add(result, 4, (result) => {
        console.log(`Result of addition: ${result}`);
  
        add(result, 5, (result) => {
          console.log(`Result of addition: ${result}`);
        });
      });
    });
  });