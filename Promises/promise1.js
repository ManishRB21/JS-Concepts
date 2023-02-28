function fetchData() {
    return new Promise((resolve, reject) => {
      const randomNum = Math.floor(Math.random() * 10);
  
      setTimeout(() => {
        if (randomNum < 5) {
          reject(`Error: The random number ${randomNum} is less than 5`);
        } else {
          resolve(`Success: The random number ${randomNum} is greater than or equal to 5`);
        }
      }, 2000);
    });
  }
  
  console.log('Starting the program...');
  
  fetchData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('Finished the program!');
    });