var Weather = function() {
	var self = this;

	self.url = "http://api.worldweatheronline.com/free/v1/weather.ashx?format=json&num_of_days=5&show_comments=no&key=zu7wwp4q9kgrcy4qhtr52jpq&callback=?&q=";
	self.city = 'Toronto';

	self.getWeather = function(){
		$.getJSON(self.url + self.city).done(function(data) { 
			var currTemp = (data.data.current_condition[0].temp_C);

			//the weather right now
			$('#currentTemp').html(currTemp + "°");
		});
	}

	self.getWeather();
}();





