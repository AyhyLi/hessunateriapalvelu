$(document).ready(function(){
    $("#kS").click(function(){
        $("#kU").removeClass("piilo");
        $("#nakyma").removeClass("piilo");
        $("#kirjautuminen").addClass("piilo");
    });
    
    $("h1").click(function(){
        $(this).next(".tiedot").toggle();
    });
    
    $("#kU").click(function(){
        $("#kU").addClass("piilo");
        $("#nakyma").addClass("piilo");
        $("#kirjautuminen").removeClass("piilo");
    });
}); 
