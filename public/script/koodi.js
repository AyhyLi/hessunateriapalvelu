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
var id;
var maH=0;
var tiH=0;
var keH=0;
var toH=0;
var peH=0;
var laH=0;
var suH=0;

var nimi;
var snimi;
var puh;
var poNu;
var osoite;
var email;
var maa;
var tis;
var kes;
var tor;
var per;
var lau;
var sun;

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
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>";
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
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>";
                }
            
            else if(valio=="g" && result.ruokalista[i].ruokavalio[1]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio[0]== "Gluteeniton"||valio=="g" && result.ruokalista[i].ruokavalio== "Gluteeniton"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>";
                }
            
            else if(valio=="vl" && result.ruokalista[i].ruokavalio== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[0]== "Vähälaktoosinen"||valio=="vl" && result.ruokalista[i].ruokavalio[1]== "Vähälaktoosinen"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>";
                }
            
            else if(valio=="k" && result.ruokalista[i].ruokalaji== "kasvisruoka"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>";
                }
            
            else if(valio=="all"){
                ateriat += "<div class='ateriat'><span class='glyphicon glyphicon-plus-sign vasen mob'></span><p class='eiNay'>" + result.ruokalista[i].id + "</p><h1 class='ateria mob'>" + result.ruokalista[i].nimi + "</h1><div class='tiedot piilo'><p>" + result.ruokalista[i].ainekset + " <b>" + result.ruokalista[i].hinta.toFixed(2) + "€</b></p></div><h1 class='desk'>" + result.ruokalista[i].nimi + "</h1><div class='desk'><p>"
                + result.ruokalista[i].ainekset +  " <b>" + result.ruokalista[i].hinta.toFixed(2) +"€</b></p><p class='lyhenne'>" + result.ruokalista[i].lyhenne + "</p><span class='glyphicon glyphicon-plus-sign oikea'></span>" + "<p class='eiNay'>" + result.ruokalista[i].id + "</p></div></div>"
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
    $("#etuS").click(function(){
        $("#etusivu").removeClass("piilo");
        $("#paivat").removeClass("piilo");
        $("#landing").addClass("piilo");
    });
    
    $("#oIcon").click(function(){
        $("#ostoskori").removeClass("piilo");
        $("#etusivu").addClass("piilo");
        $("#lomake").addClass("piilo");
        $("#paivat").addClass("piilo");
        $("#landing").addClass("piilo");
    });
    
    $(".eIcon").click(function(){
        $("#etusivu").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#lomake").addClass("piilo");
        $("#paivat").removeClass("piilo");
        $("#landing").addClass("piilo");
    });
    
    $("#tilaa").click(function(){
        $("#lomake").removeClass("piilo");
        $("#ostoskori").addClass("piilo");
        $("#etusivu").addClass("piilo");
        $("#paivat").addClass("piilo");
        $("#landing").addClass("piilo");
        //Lasketaan tilauksen hinta lomake sivulle
        var tulostus="Tilauksen hinta yhteensä: ";
        var hinta=maH + tiH + keH + toH + peH + laH + suH;
        $("#hintaL").html(tulostus + hinta.toFixed(2) + "€");
    });
    
    $("#pallero").html(ostokset);
    
    //Ostoslistaan lisääminen
    $("#ruokalista").on("click", ".glyphicon-plus-sign", function(result){
        id=$(this).next("p").text()
        
        $.ajax({url:lista,
            success:function(result){
                lisaaOstoskoriin(result);
            }
        });
    });
    
    
    function lisaaOstoskoriin(result){

        var tulostus="Tilauksen hinta yhteensä: ";
        
        for(i=0; i < result.ruokalista.length; i++){
            var hinta=maH + tiH + keH + toH + peH + laH + suH;
            
            if(p=="ma" && ma==0 && result.ruokalista[i].id==id){
                ostokset++;
                ma++;
                $("#mA").html(result.ruokalista[i].nimi);
                $("#mH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                maH=result.ruokalista[i].hinta;
                $("#m").addClass("disabled");
                $("#m").removeClass("active");
            }
            
            else if(p=="ti" && ti==0 && result.ruokalista[i].id==id){
                ostokset++;
                ti++;
                $("#tI").html(result.ruokalista[i].nimi);
                $("#tiH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                tiH=result.ruokalista[i].hinta;
                $("#t").addClass("disabled");
                $("#t").removeClass("active"); 
            }

            else if(p=="ke" && ke==0 && result.ruokalista[i].id==id){
                ostokset++;
                ke++;
                $("#kE").html(result.ruokalista[i].nimi);
                $("#kH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                keH=result.ruokalista[i].hinta;
                $("#k").addClass("disabled");
                $("#k").removeClass("active");
            }
        
            else if(p=="to" && to==0 && result.ruokalista[i].id==id){
                ostokset++;
                to++;
                $("#tO").html(result.ruokalista[i].nimi);
                $("#toH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                toH=result.ruokalista[i].hinta;
                $("#o").addClass("disabled");
                $("#o").removeClass("active");
            }

            else if(p=="pe" && pe==0 && result.ruokalista[i].id==id){
                ostokset++;
                pe++;
                $("#pE").html(result.ruokalista[i].nimi);
                $("#pH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                peH=result.ruokalista[i].hinta;
                $("#p").addClass("disabled");
                $("#p").removeClass("active");
            }

            else if(p=="la" && la==0 && result.ruokalista[i].id==id){
                ostokset++;
                la++;
                $("#lA").html(result.ruokalista[i].nimi);
                $("#lH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                laH=result.ruokalista[i].hinta;
                $("#l").addClass("disabled");
                $("#l").removeClass("active");
            }

            else if(p=="su" && su==0 && result.ruokalista[i].id==id){
                ostokset++;
                su++;
                $("#sU").html(result.ruokalista[i].nimi);
                $("#sH").html(result.ruokalista[i].hinta.toFixed(2) + "€");
                suH=result.ruokalista[i].hinta;
                $("#s").addClass("disabled");
                $("#s").removeClass("active");
            }
        }
        $("#pallero").html(ostokset);        
        $("#hinta").html(tulostus + hinta.toFixed(2) + "€");   
    }

    //Lomakkeen tarkistus
    $("#vahvista").click(function(){
        puh=$("#puh").val();
        poNu=$("#posti").val();
        nimi=$("#nimi").val();
        snimi=$("#sNimi").val();
        osoite=$("#osoite").val();
        email=$("#email").val();
        
        maa=$("#mA").text();
        tis=$("#tI").text();
        kes=$("#kE").text();
        tor=$("#tO").text();
        per=$("#pE").text();
        lau=$("#lA").text();
        sun=$("#sU").text();
        hinta=$("#hinta").text();
        
        var poNuO="";
        var puhO="";
        
        for(var i=0; i < poNu.length;i++){
            if(poNu.length -1 < 4 || poNu.length -1 > 4){
            alert("ei");
            }
            
            else{
                poNuO="ok";
                
            }
        }
  
        for(var i=0; i < puh.length;i++){
            if(puh.length -1 == 5 || puh.length -1 == 9){
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
            
            var hinta=maH + tiH + keH + toH + peH + laH + suH;
            var tilausArray=[];
            var tilausOlio={
                "nimi":nimi,
                "sukunimi":snimi,
                "osoite":osoite,
                "postinumero":poNu,
                "puhelin":puh,
                "s-posti":email,
                "ateriat":{"maanantai":maa, "tiistai":tis, "keskiviikko":kes, "torstai":tor, "perjantai":per, "lauantai":lau, "sunnuntai":sun},
                "hinta":hinta.toFixed(2)
            };
            tilausArray.push(tilausOlio);;
            
            $.ajax({
                url:lista,
                method:"POST",
                data:tilausArray,
                success:function(result){
                    console.log(result);
                },
                error:function(xhr){
                    alert("Virhe " + xhr.statusText);
                }
            });
            
            
        }
        
    });
    
   /* $("#tallenna").click(function(){
            $("#alku").val("");
            $("#loppu").val("");
            $("#nimi").val("");
            $("#puhelin").val("");
            $("#sPosti").val("");

            var varausArray=[];
            var urli="http:../Ot5/ohjelma.php";

            var varausOlio={
                "nimi":nimi,
                "puh":puh,
                "s-posti":email,
                "varauspäivä":p1,
                "palautuspäivä":p2,
                "automalli":luokka,
                "hinta":hinta
            };
            varausArray.push(varausOlio);
            var varausJSON=JSON.stringify(varausArray);
            console.log(varausJSON);

            $.ajax({
                url:urli,
                method:"POST",
                data:varausJSON,
                success:function(result){
                    console.log(result);
                },
                error:function(xhr){
                    alert("Virhe" + xhr.statusText);
                }
            });
        });
    */
});
