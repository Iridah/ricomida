$("#button1").on( "click", function() {
    $(".card").toggle("slow");
  });
$("#button2").on( "click", function() {
    $(".card").toggle("slow");
  });
$("#button3").on( "click", function() {
    $(".card").toggle("slow");
  });


$( "#jq-title" ).on( "dblclick", function() {
    $(this).css({ 
    "color": "red",    
    });
});
$( "#jq-title2" ).on( "dblclick", function() {
    $(this).css({ 
    "color": "red",    
    });
});

$("#mailsend").on( "click", function() {
  alert( "El correo fue enviado correctamente..." );
});

$('#mover').on( "mouseenter", function() {
  $('body').append("<div id='hoveringTooltip' style='position:fixed;'></div>");
  $('#hoveringTooltip').html("Haz click y la receta llegara a tu correo en unos momentos");
  $('#hoveringTooltip').css({
      "top" : $(this).offset().top + MYTOPOFFSET,
      "left" : $(this).offset().left + MYLEFTOFFSET
  });
});
$('#mover').on( "mouseenter", function() {
  $('#hoveringTooltip').remove();
});
$(function() {
  $( '.mover[title]' ).tooltip();
});