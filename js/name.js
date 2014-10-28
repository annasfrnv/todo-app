var Greeting = function() {
	var self = this;

	self.greet = document.getElementById('greet');
	self.userName = document.getElementById('userName');

	self.init = function(){
		self.setDayTimeGreeting(new Date);
		self.userName.onkeydown = self.getUserName;
	}

	self.getUserName = function(){
	    if(event.keyCode == 13) {
	        userName.style.display = "none";
	        greet.style.width = 60 + '%'; 
			greet.innerHTML = greet.innerHTML + this.value;        
	    }
	}

	self.setDayTimeGreeting = function(date){
		var timeOfDay;
		var hour = date.getHours(); 
		switch (true) {
			case (hour < 12):
			    timeOfDay = "Good morning, ";
			    break;
			case (hour >=12 && hour <= 17):
			    timeOfDay = "Good afternoon, ";
			    break;
			case (hour >= 17 && hour <= 24):
			    timeOfDay = "Good evening, ";
			    break;
		}

		self.greet.innerHTML = timeOfDay;
	}

	self.init();

}();



















