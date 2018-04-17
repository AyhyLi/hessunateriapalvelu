var lista=/api/;
var ateriat="";
var valio;
var i;
var p;
var ostokset=0;
var ma=0;
var ti=0;
var ke=0;
var to=0;
var pe=0;
var la=0;
var su=0;

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
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<h1 class='eiNay'>" + result.ruokalista[i].nimi + "<h1></div></div>";
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
        
        for(i=0; i < result.ruokalista.length; i++){
            
            if(valio=="l" && result.ruokalista[i].ruokavalio == "Laktoositon"||valio=="l" && result.ruokalista[i].ruokavalio[0] == "Laktoositon"||valio=="l" && result.ruokalista[i].ruokavalio[1] == "Laktoositon"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="g" && result.ruokalista[i].ruokavalio[1]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio[0]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio== "Gluteeniton"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="vl" && result.ruokalista[i].ruokavalio== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[0]== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[1]== "Vähälaktoosinen"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="k" && result.ruokalista[i].ruokalaji== "kasvisruoka"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
                }
            
            else if(valio=="all"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "<span class='glyphicon glyphicon-plus-sign oikea'></span></p></div></div>";
            }
        
        $("#ruokalista").html(ateriat);
        }
    }

    //Tarkistetaan mikä päivä on valittu
    $(".nav-pills").on("click","a", function(e){
            e.preventDefault();
            p=$(this).attr("id");
        console.log(p);
    });
    
        //Vaihdetaan activity classia
    $(".pa").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    //Avataan otsikon allaolevan tietolaatikon
    $("#ruokalista").on("click", ".ateria", function(e){
        $(this).next(".tiedot").toggle();
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
    
    $("#pallero").html(ostokset);
    
    //Ostoslistaan lisääminen MOBIILI
    $("#ruokalista").on("click", ".glyphicon-plus-sign", function(e){
        var ateria=$(this).next("h1").text();
        console.log(ostokset);
        
        if(p=="ma" && ma==0){
            ostokset++;
            ma++;
            $("#mA").html(ateria);
            $("#m").addClass("disabled");
            $("#m").removeClass("active");
        }
        
        else if(p=="ti" && ti==0){
            ostokset++;
            ti++;
            $("#tI").html(ateria);
            $("#t").addClass("disabled");
            $("#t").removeClass("active"); 
        }
        
        else if(p=="ke" && ke==0){
            ostokset++;
            ke++;
            $("#kE").html(ateria);
            $("#k").addClass("disabled");
            $("#k").removeClass("active");
        }
        
        else if(p=="to" && to==0){
            ostokset++;
            to++;
            $("#tO").html(ateria);
            $("#o").addClass("disabled");
            $("#o").removeClass("active");
        }
        
        else if(p=="pe" && pe==0){
            ostokset++;
            pe++;
            $("#pE").html(ateria);
            $("#p").addClass("disabled");
            $("#p").removeClass("active");
        }
        
        else if(p=="la" && la==0){
            ostokset++;
            la++;
            $("#lA").html(ateria);
            $("#l").addClass("disabled");
            $("#l").removeClass("active");
        }
        
        else if(p=="su" && su==0){
            ostokset++;
            su++;
            $("#sU").html(ateria);
            $("#s").addClass("disabled");
            $("#s").removeClass("active");
        }
        
        else{
           alert("hei");
        }
        
        $("#pallero").html(ostokset);
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
            $("#myModal").modal("show");
        }
        
    });
    
});
