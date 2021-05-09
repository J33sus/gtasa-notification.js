let GTASA = {
	defaultOptions: {
		message: 'My GTA SA Notification',
		time: 3000,
		position: 'up left',
		enableSound: true,
		soundUrl: './sounds/notification.wav'
	},
	notification: function(option = this.defaultOptions, position, time) {
		let notification = document.createElement('div');
		notification.className = 'gtasa-notification';

		let myOptions = {};
		if(typeof option == 'string') {
			myOptions.message = option;
			myOptions.time = time;
			myOptions.position = position;
		} else if(typeof option == 'object') {
			myOptions.message = option.message;
			myOptions.time = option.time;
			myOptions.position = option.position;
			myOptions.soundUrl = option.soundUrl;
			myOptions.enableSound = option.enableSound;
		}
		if(myOptions.time == undefined) myOptions.time = this.defaultOptions.time;
		if(myOptions.position == undefined) myOptions.position = this.defaultOptions.position;
		if(myOptions.enableSound == undefined) myOptions.enableSound = this.defaultOptions.enableSound;
		if(myOptions.soundUrl == undefined) myOptions.soundUrl = this.defaultOptions.soundUrl;
		if(myOptions.message == undefined) myOptions.message = this.defaultOptions.message;

		notification.innerHTML = myOptions.message.replaceAll('~n~', '<br/>');
	
		if(window.innerWidth <= 768) {
			myOptions.position = myOptions.position.replace('left', '');
			myOptions.position = myOptions.position.replace('right', '');
		}
		let containerName = myOptions.position.replace(' ', '-');
		let container = document.getElementById(`gtasa-container--${containerName}`);
		if(container == undefined) {
			container = document.createElement('div');
			container.id = `gtasa-container--${containerName}`;
			container.className = 'gtasa-notification-container';

			let myPosition = myOptions.position.split(' ');
			if(myPosition.includes('up')) container.style.cssText += 'top: 0px;';
			if(myPosition.includes('bottom')) container.style.cssText += 'bottom: 0px;';			
			if(myPosition.includes('left')) container.style.cssText += 'left: 0px;';			
			if(myPosition.includes('right')) container.style.cssText += 'right: 0px;';			
			document.body.appendChild(container);
		}
		container.appendChild(notification);
		if(myOptions.enableSound) new Audio(myOptions.soundUrl).play();

		let fadeTime = myOptions.time * .20;
		setTimeout(() => {
			notification.style.cssText += `animation: gtasa-fade ${fadeTime}ms;`;
		}, myOptions.time - fadeTime);

		setTimeout(() => {
			container.removeChild(notification);
			if(!container.childElementCount) document.body.removeChild(container);
		}, myOptions.time);
	}
}