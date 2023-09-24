const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// return system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// information about system
const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log("OS Specifications");
console.log(currentOS);
