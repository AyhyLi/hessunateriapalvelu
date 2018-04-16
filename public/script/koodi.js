var lista=/api/;
var ateriat="";
var valio;
var i;

$(document).ready(function(){
    //Haetaan ateriat json tiedostosta
    $.ajax({url:lista,
                success:function(result){
                    tulostatuotteet(result);
                }
            });
    
    //Tulostetaan haetut areriat sivulle
    function tulostatuotteet(result){
        
        for(i=0; i < result.ruokalista.length; i++){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
            }
        
        $("#ruokalista").html(ateriat);
    }
    
    //Ruokavalio suodatin nappi joka ottaa valinnan valuen ja hakee ateriat
    $("#hae").click(function(result){
        valio=$("#rValiot").val();
        
        $.ajax({url:lista,
                success:function(result){
                    tulostavaliot(result);
                }
            });
    });
    
    //Tulostaa ruokalistan jossa on vain atreiat jotka sisältävät valitun ruokavalion
    function tulostavaliot(result){
        ateriat="";
        console.log(valio);
        
        for(i=0; i < result.ruokalista.length; i++){
            //console.log(result.ruokalista[i].ruokavalio[0]);
            
            if(valio=="l" && result.ruokalista[i].ruokavalio == "Laktoositon"||valio=="l" && result.ruokalista[i].ruokavalio[0] == "Laktoositon"||valio=="l" && result.ruokalista[i].ruokavalio[1] == "Laktoositon"){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="g" && result.ruokalista[i].ruokavalio[1]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio[0]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio== "Gluteeniton"){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="vl" && result.ruokalista[i].ruokavalio== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[0]== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[1]== "Vähälaktoosinen"){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="k" && result.ruokalista[i].ruokalaji== "kasvisruoka"){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="all"){
                ateriat += "<div class='ateriat'><h1 class='ateria mob'><span class='glyphicon glyphicon-plus-sign'></span>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
            }
        
        $("#ruokalista").html(ateriat);
        }
    }

    //Tarkistetaan mikä päivä on valittu
    /*$(".nav-item").on("click","a", function(e){
            e.preventDefault();
            var p=$(this).attr("id");

            if(p=="ma"){
                hintaLuokka=80;
                luokka="Kompakti";
            }
            else if(p=="ti"){
                hintaLuokka=120;
                luokka="Keskiluokka";
            }
            else if(p=="ke"){
                hintaLuokka=180;
                luokka="Premium";
            }
            else if(p=="to"){
                hintaLuokka=180;
                luokka="Premium";
            }
            else if(p=="pe"){
                hintaLuokka=180;
                luokka="Premium";
            }
            else if(p=="la"){
                hintaLuokka=180;
                luokka="Premium";
            }
            else{
                hintaLuokka=300;
                luokka="Luksus";
            }
        });
*/
    
    //Avataan otsikon allaolevan tietolaatikon
    $("#ruokalista").on("click", ".ateria", function(e){
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
        $("#paivat").addClass("piilo");
    });
    
    $(".eIcon").click(function(){
        $("#etusivu").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#lomake").addClass("piilo");
        $("#paivat").removeClass("piilo");
    });
    
    $("#tilaa").click(function(){
        $("#lomake").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#etusivu").addClass("piilo");
        $("#paivat").addClass("piilo");
    });
    
    //Lomakkeen tarkistus
    $("#vahvista").click(function(){
        var puh=$("#puh").val();
        var poNu=$("#posti").val();
        
        var poNuO="";
        var puhO="";
        
        for(var i=0; i < poNu.length;i++){
            if(poNu.length -1 < 4 || poNu.length -1 > 4){
            alert("ei");
            }
            
            else{
                alert("kyll!");
                poNuO="ok";
                
            }
        }
  
        for(var i=0; i < puh.length;i++){
            if(puh.length -1 == 5 || puh.length -1 == 9){
                alert("kyll!");
                puhO="ok";
            }
            
            else{
                alert("ei");
            }
        }
        
        if(puhO == "ok" && poNuO == "ok"){
           $("#puh").val("");
            $("#posti").val(""); 
        }
        
    });
    
});