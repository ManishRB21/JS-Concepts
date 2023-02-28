function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(data);
  }, 1000);
}
function handleData(data) {
  console.log("Received data:", data);
}
fetchData(handleData);