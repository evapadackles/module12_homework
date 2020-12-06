class ElectricalDevices {
	constructor(power) {
		this.enabled = false;
		this.powerConsum = power;
	}

	plugin() {
		this.enabled = true;
		console.log("Устройство включено");
	};

	unplug() {
		this.enabled = false;
		console.log("Устройство выключено");
	};
}

class Phone extends ElectricalDevices {
	constructor(power) {
		super(power);
		this.hibernation = 75;
	}


	addHibernation() {
		if (this.hibernation < 100) {
              this.hibernation += 10;
		}
	}

	reduceHibernation() {
		if (this.hibernation > 0) {
              this.hibernation -= 10;
		}
	}
}

class Printer extends ElectricalDevices {
	constructor(power) {
		super(power);
		this.canvasSize = 55;
	}

	addCanvasSize() {
		if (this.canvasSize < 100) {
              this.canvasSize += 5;
		}
	}

	reduceCanvasSize() {
		if (this.canvasSize > 0) {
              this.canvasSize -= 5;
		}
	}
}

const addPhone = new Phone(300);
addPhone.reduceHibernation();
addPhone.unplug();

const addPrinter = new Printer(550);
addPrinter.plugin();
addPrinter.addCanvasSize();

console.log(addPhone);
console.log(addPrinter);