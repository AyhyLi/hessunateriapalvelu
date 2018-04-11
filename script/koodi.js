$(document).ready(function(){
    //Haetaan ateriat json tiedostosta
    $.ajax({url:"../data/data.json",
                success:function(result){
                    tulostatuotteet(result);
                }
            });
    
        //Tulostetaan haetut areriat sivulle
    function tulostatuotteet(result){
        var ateriat="hello";
        
        for(var i=0; i < result.ruokalista.length; i++){
                ateriat += "<h1 class='ateria'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'>" + result.ruokalista[i].ainekset + result.ruokalista[i].hinta + "</div>";
            }
        
        $("#ruokalista").html(ateriat);
    }


    //Avataan otsikon allaolevan tietolaatikon
    $(".ateria").click(function(){
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