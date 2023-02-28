let fetchUser = (id)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Manish', age: 21 },
          { id: 2, name: 'Ranjan', age: 25 },
          { id: 3, name: 'Behera', age: 40 }
        ];
        const user = users.find(user => user.id === id);
  
        if (user) {
          resolve(user);
        } else {
          reject(`Error: User with id ${id} not found`);
        }
      }, 2000);
    });
  }
  
  console.log('Starting the program...');
  
  fetchUser(2)
    .then(user => {
      console.log(`User with id ${user.id} found:`, user);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('Finished the program!');
    });