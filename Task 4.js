  
function ElectricalDevices() { // Т.к. это конструктор объекта, это как раз один из тех случаев, где camelCase использовать не нужно :)
	this.enabled = false;
	this.powerConsum;
}

 ElectricalDevices.prototype.plugin = function () {
	this.enabled = true;
	console.log("Устройство включено");
};

 ElectricalDevices.prototype.unplug = function () {
	this.enabled = false;
	console.log("Устройство выключено");
};

function Phone(power) {
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

function Printer(power) {
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

Phone.prototype = Printer.prototype = new ElectricalDevices();

const addPhone = new Phone(300);
addPhone.reduceHibernation();
addPhone.unplug();

const addPrinter = new Printer(550);
addPrinter.plugin();
addPrinter.addCanvasSize();

console.log(addPhone);
console.log(addPrinter);