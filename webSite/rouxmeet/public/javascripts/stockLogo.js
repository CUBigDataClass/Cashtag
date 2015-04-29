$(function(){
  var route = JSON.stringify(window.location.pathname); // take the route name and convert it into a string so that you can get the right path to the right json document
  $("#stockImage").prepend("<img id='stockLogo' src='images/logos" + route.substring(1, route.length-1) + ".png'/>");
 $("#stockLogo").each(function(){ 
      var image = $(this); 
      if(image.context.naturalWidth == 0 || image.readyState == 'uninitialized'){  
         $(image).unbind("error").hide();
      } 
   }); 
});
