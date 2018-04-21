var lista=/api/;

$(document).ready(function(){
    //Haetaan ateriat json tiedostosta
    $.ajax({url:lista,
                success:function(result){
                    tulostatuotteet(result);
                }
            });
    
    var ateriat="<div id='eka' class='col-lg-6'>";
    var napit="<div class='oikea napit'><button>Muokkaa</button><button data-toggle='modal' data-target='#poista'>Poista</button></div>"
    
    //Tulostetaan haetut areriat sivulle
    function tulostatuotteet(result){
        
        for(i=0; i < result.ruokalista.length; i++){
                ateriat +="<h1>" + result.ruokalista[i].nimi + "<span class='glyphicon glyphicon-remove ml10' data-toggle='modal' data-target='#poista'></span><span class='glyphicon glyphicon-edit'></span></h1><div class='tiedot piilo'>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta  + "€</b>" + napit + "</div>";
            
                if(i==13){
                    ateriat+="</div><div id='toka' class='col-lg-6'>";
                    for(i=13; i < result.ruokalista.length; i++){
                        ateriat +="<h1>" + result.ruokalista[i].nimi + "<span class='glyphicon glyphicon-remove ml10' data-toggle='modal' data-target='#poista'></span><span class='glyphicon glyphicon-edit'></span></h1><div class='tiedot piilo'>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta  + "€</b>" + napit + "</div>";
                    }
                }
            }
        ateriat+="</div><div class='col-lg-2'><button type='button' data-toggle='modal' data-target='#myModal'><span class='glyphicon glyphicon-plus'></span></button></div>"
        
        $("#nakyma").html(ateriat);
    }
    
    $("#kS").click(function(){
        $("#kU").removeClass("piilo");
        $("#nakyma").removeClass("piilo");
        $("#kirjautuminen").addClass("piilo");
        $("#icon").removeClass("piilo");
    });
    
    //Avataan otsikon allaolevan tietolaatikon
    $("#nakyma").on("click", "h1", function(e){
        $(this).next(".tiedot").toggle();
    });
    
    
    $("#kU").click(function(){
        $("#kU").addClass("piilo");
        $("#nakyma").addClass("piilo");
        $("#icon").addClass("piilo");
        $("#kirjautuminen").removeClass("piilo");
    });
}); 
