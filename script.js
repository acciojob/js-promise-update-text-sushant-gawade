

// Function returning a promise that resolves after 1 second
function helloWorldPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello, world!"), 1000);
  });
}

// Use the promise to update the HTML element
helloWorldPromise().then(message => {
  document.getElementById("output").textContent = message;
});
