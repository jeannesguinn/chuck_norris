$('#getjoke').click(function(e){
  var chuck_norris_data = $.ajax({
    url: 'http://api.icndb.com/jokes/random',
    type: 'GET',
    dataType: 'json'
  });
  chuck_norris_data.done(function(data){
    var joke = data.value.id;
    console.log(joke);
    $('#').html('<p>' + joke + '</p>');
  });
  chuck_norris_data.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown)
  })
});


