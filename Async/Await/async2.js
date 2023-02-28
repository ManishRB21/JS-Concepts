function add(x, y) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = x + y;
      resolve(result);
    }, 1000);
  });
}

async function main() {
  console.log('Starting the program...');

  const sum1 = await add(2, 3);
  console.log(`The sum of 2 and 3 is ${sum1}`);

  const sum2 = await add(4, 5);
  console.log(`The sum of 4 and 5 is ${sum2}`);

  const sum3 = await add(sum1, sum2);
  console.log(`The sum of ${sum1} and ${sum2} is ${sum3}`);

  console.log('Finished the program!');
}

main();