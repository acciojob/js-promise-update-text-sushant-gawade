//your JS code here. If required.
function hellowWorldPromise(){
	return new Promise(resolve => {
			setTimeout(() => resolve("Hello, World"), 1000);
	});
}
helloWorldPromise().then(message => {
	document.getElementById("output").textContent = message;
});