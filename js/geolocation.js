$(function(){
    var latitude = $('#latitude');
    var longitude = $('#longitude');
    var accuracy = $('#accuracy');
    var altitude = $('#altitude');
    var altitudeAccuracy = $('#altitudeAccuracy');
    var heading = $('#heading');
    var speed = $('#speed');
    var timestamp = $('#timestamp');
    var code = $('#code');
    var message = $('#message');
    
    var msg = 'Sorry, we were unable to get your location.';
    
    if(Modernizr.geolocation){
        navigator.geolocation.getCurrentPosition(success,fail);
        latitude.text('Checking Location..');
        longitude.text('Checking Location..');
    }else{
        latitude.text(msg);
        longitude.text(msg);
    }
    function success(position){
        latitude.text(position.coords.latitude);
        longitude.text(position.coords.longitude);
        accuracy.text(position.coords.accuracy);
        altitude.text(position.coords.altitude);
        altitudeAccuracy.text(position.coords.altitudeAccuracy);
        heading.text(position.coords.heading);
        speed.text(position.coords.speed);
        timestamp.text(timestamp.coords.timestamp);
    }
    function fail(msg){
        code.text(msg.code);
        message.text(msg.message);
    }
});
