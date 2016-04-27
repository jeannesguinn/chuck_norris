$(document).ready(function() {


$('#getJoke').click(function(e){
  var chuck_norris_data = $.ajax({
    url: 'http://api.icndb.com/jokes/random',
    type: 'GET',
    dataType: 'json'
  });
  chuck_norris_data.done(function(data){
    var joke = data.value.joke;
    console.log(joke);
    $('#jokeDiv').html('<p>' + joke + '</p>');
  });
  chuck_norris_data.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown)
  })
});

});


 window.fbAsyncInit = function() {
   FB.init({
     appId      : '1702852756650468',
     xfbml      : true,
     version    : 'v2.6'
   });
 };

 (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>





var express = require('express');
var router = express.Router();
var accountSid = 'YOUR accountSid GOES HERE';
var authToken = 'YOUR AUTH TOKEN GOES HERE';
var recepient = req.body.to;
var message = req.body.message;

