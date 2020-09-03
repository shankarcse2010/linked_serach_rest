$(document).ready(()=>{
    $.ajax({url: "http://localhost:8080/", 
    async: false,
    type: 'GET',
    // crossDomain: true,
    // headers: {  'Access-Control-Allow-Origin': '*' },
    // dataType: 'jsonp',
    success: function(result){
        console.log(result);
        $("#div1").html(result);
      }});
})