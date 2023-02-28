let wait = (time)=> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  
  async function main() {
    console.log('Waiting for 1 second...');
    await wait(1000);
    console.log('Done waiting for 1 second.');
  
    console.log('Waiting for 2 seconds...');
    await wait(2000);
    console.log('Done waiting for 2 seconds.');
  
    console.log('Waiting for 3 seconds...');
    await wait(3000);
    console.log('Done waiting for 3 seconds.');
  }
  
  main();