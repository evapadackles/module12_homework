  
function electricalDevices() {
	this.enabled = false;
	this.powerConsum;
}

electricalDevices.prototype.plugin = function () {
	this.enabled = true;
	console.log("Устройство включено");
};

electricalDevices.prototype.unplug = function () {
	this.enabled = false;
	console.log("Устройство выключено");
};

function phone(power) {
	this.powerConsum = power;
	this.hibernation = 75;

	this.addHibernation = function () {
		if (this.hibernation < 100) {
			this.hibernation += 10;
		}
	}

	this.reduceHibernation = function () {
		if (this.hibernation > 0) {
			this.hibernation -= 10;
		}
	}
}

function printer(power) {
	this.powerConsum = power;
	this.canvasSize = 55;

	this.addCanvasSize = function () {
		if (this.canvasSize < 100) {
			this.canvasSize += 5;
		}
	}

	this.reduceCanvasSize = function () {
		if (this.canvasSize > 0) {
			this.canvasSize -= 5;
		}
	}
}

phone.prototype = printer.prototype = new electricalDevices();

const addPhone = new phone(300);
addPhone.reduceHibernation();
addPhone.unplug();

const addPrinter = new printer(550);
addPrinter.plugin();
addPrinter.addCanvasSize();

console.log(addPhone);
console.log(addPrinter);