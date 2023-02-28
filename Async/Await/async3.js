function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data has been fetched!');
      }, 2000);
    });
  }
  
  async function main() {
    console.log('Starting the program...');
  
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
    console.log('Finished the program!');
  }
  
  main();