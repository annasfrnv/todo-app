var Clock = function(){
    var self = this;

    self.checkTime = function(i){
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    self.startTime = function(){
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();

        minutes = self.checkTime(minutes);
        seconds = self.checkTime(seconds);
        document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
        today = setTimeout(function() {
            self.startTime()
        }, 500);
    }
    self.startTime();

}();

