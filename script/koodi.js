$(document).ready(function(){
    
    $.ajax({url:"../data/data.json",
                success:function(result){
                    tulostatuotteet();
                }
            });


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
    
    function tulostatuotteet(result){
        var ateriat;
        
        console.log(result.ruokalista[1].nimi);
        
        /*for(var i=0; i < result.length; i++){
                ateriat += "<h1>" + result[2].nimi + "</h1><div class='tiedot piilo'>" + result[2].ainekset + result[2].hinta + "</div>";
            }
        
        $("#ruokalista").html(ateriat);*/
    }
    
});