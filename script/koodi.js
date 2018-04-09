$(document).ready(function(){

    //Avataan otsikon allaolevan tietolaatikon
    $("h1").click(function(){
        $(this).next(".tiedot").toggle();
    });
    
    //Vaihdetaan activity classia
    $(".pa").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    //Sivujen vaihto    
    $("#oIcon").click(function(){
        $("#ostoskori").removeClass("piilo");
        $("#etusivu").addClass("piilo");
        $("#lomake").addClass("piilo");
    });
    
    $(".eIcon").click(function(){
        $("#etusivu").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#lomake").addClass("piilo");
    });
    
    $("#tilaa").click(function(){
        $("#lomake").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#etusivu").addClass("piilo");
    });
    
});