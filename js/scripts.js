$(document).ready( function(){
    $.getJSON('https://api.coincap.io/v2/assets/?limit=10', function( json )
    {
        CreateTable('#table', json['data']);
    }
     );

    /* Nav-toggle */
    $('#nav-toggle').on("click", function(event) {

        event.preventDefault();
        $(this).toggleClass("active");
        $('#nav').toggleClass("active");

        $(".nav__item").click(function(){
            $('#nav').removeClass("active");
            $('#nav-toggle').removeClass("active");
        });
    });
}); 

/* TABLE */
var tableDisplayCol =
['id','name','symbol','priceUsd'];

function CreateTable(selector, data) {
    var keys = Object.keys(Object.assign({}, data[0]));

    var head = '<table>'+'<thead><tr>';
    keys.forEach(function(key) {
      if(tableDisplayCol.includes(key)){
        head += '<th>'+key+'</th>';
      }
    });
    head = head+'</tr></thead>';

    var body = head + '<tbody>';
    data.forEach(function(obj) {
      var row = '<tr>';
      keys.forEach(function(key) {
        if(tableDisplayCol.includes(key)){
            row += '<td>';
            if (obj.hasOwnProperty(key)) { 
              row += obj[key];
            }
            row += '</td>';
        }
        
      });
      body += row+'</tr>';
    })
    $(selector).append(body+'</tbody>'+'</table>');



    /* COOKIES */
    $(".send").click(function () {
        document.cookie = 'email='+  $("input[name='field']").val();
    });

    var date = new Date(Date.now() + 86400e3*30);
    date = date.toUTCString();
    document.cookie = "cookies expires=" + date;
  
}



