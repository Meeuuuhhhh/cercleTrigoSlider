/*
JS file for cercleTrigoSlider jquery plugin
*/
/* 
    Created on : 11 avr. 2014, 12:56
    Author     : Ollivier Tristan
*/

(function($)
{
    
    var ctx2;
    var ctx1;
    var ratio = 0;
    var color = "#91c2ff";
    var color2 = "#f7f7f7";
    var hover = false;
    
    //LES DIMENSIONS
    var rayonCercleCentral = 150;
    var diametreCercleCentral = rayonCercleCentral*2;
    var rayonCercleMiniature = 25;
    var diametreCercleMiniature = rayonCercleMiniature*2;
    var marge = 10;
    var margeTotal = diametreCercleMiniature+marge;
        
    //MON PLUG IN
    $.fn.cercleTrigoSlider = function(methodOrOptions)
    {
        
        if ( $[methodOrOptions] ) {
            return $[ methodOrOptions ]( Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return $["init"]( $(this) );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }  
        
        return this;
    };
    
    $.init = function(divPrincipale){

        //ON DECALE L'IMAGE CENTRALE
        divPrincipale.css('top',margeTotal).css('left',margeTotal).css('width',diametreCercleCentral).css('height',diametreCercleCentral);

        //ON RECUPERE LES IMAGES
        var $images = divPrincipale.children("img");

        var nbImages = $images.length;

        //LA VARIABLE POUR LA TRIGO DES POSITIONS DES MINIATURES
        var trigStart = (Math.PI/nbImages)-(Math.PI/2);
        var k = rayonCercleCentral+marge+rayonCercleMiniature;
        var K = rayonCercleCentral+marge+diametreCercleMiniature;

        //ON CREE LES MINIATURES
        $images.each(function() {

            $(this).addClass("trigo-slider");
            positionLeft = (Math.cos(trigStart)*k)+K-rayonCercleMiniature;
            positionTop = (Math.sin(trigStart)*k)+K-rayonCercleMiniature;
            divPrincipale.before('<a class="lienMiniature" href="javascript:void(0)"><img class="trigo-slider-miniature" src="'+$(this).attr("src")+'" style="width : '+diametreCercleMiniature+'px;height : '+diametreCercleMiniature+'px;position: absolute;left:'+positionLeft+'px;top:'+positionTop+'px;" /></a>');

            trigStart += (2*Math.PI)/nbImages;
        });

        //DIV POUR LA DESCRIPTION ET LE TITRE
        divPrincipale.before('<div id="trigo-slider-description"><div id="trigo-slider-haut"></div><div id="trigo-slider-bas"></div></div>');

        $("#trigo-slider-description").css("width",(diametreCercleMiniature+marge)*2+diametreCercleCentral).css("height",(diametreCercleMiniature+marge)*2+diametreCercleCentral);
        $("#trigo-slider-haut").css("width",(diametreCercleMiniature+marge)*2+diametreCercleCentral).css("height",diametreCercleMiniature*2/3).css("top", marge);
        $("#trigo-slider-bas").css("width",(diametreCercleMiniature+marge)*2+diametreCercleCentral).css("top", diametreCercleMiniature+diametreCercleCentral+marge+10)

        //L'INPUT POUR LA BARRE DE CHARGEMENT
        divPrincipale.before('<input type="text" name="round" class="round"/>');

        $('input.round').wrap('<div class="round" />').each(function(){
            var $input = $(this);
            var $div = $input.parent();
            var min = $input.data('min');
            var max = $input.data('max');
            var ratio = ($input.val() - min) / (max - min);


            var $circle = $('<canvas width="'+(diametreCercleCentral+20)+'px" height="'+(diametreCercleCentral+20)+'px"/>');
            var $color = $('<canvas width="'+(diametreCercleCentral+20)+'px" height="'+(diametreCercleCentral+20)+'px"/>');
            $div.append($circle);
            $div.append($color);
            ctx1 = $circle[0].getContext('2d');

            // On dessine le cercle blanc avec ombre portÃ©
            ctx1.beginPath();
            ctx1.arc(160,160,155,0,2*Math.PI);
            ctx1.lineWidth = 5;
            ctx1.strokeStyle = color2;
            ctx1.shadowOffsetX = 2;
            ctx1.shadowBlur = 5;
            ctx1.shadowColor="rgba(0,0,0,0.1)";
            ctx1.stroke();

            // On dessine le certcle de couleur
            ctx2 = $color[0].getContext('2d');
            ctx2.beginPath();
            ctx2.arc(160,160,155, Math.PI + Math.PI / 2,  Math.PI / 2 + Math.PI);
            ctx2.lineWidth = 5;
            ctx2.strokeStyle = color;
            ctx2.stroke();

            //SI DANS LA LISTE RIEN N'EST AFFICHER, ON AFFICHE LE PREMIER
            if($(".trigo-slider:visible").length == 0){
                $(".trigo-slider").eq(0).show();
            }

            $.remplirCercle();

        });
        
        //EVENEMENTS
        $(".trigo-slider").hover(function(){
            hover = true;
            $("#trigo-slider-haut").html($(this).attr("data-title"));
            $("#trigo-slider-bas").html($(this).attr("data-description"));
            $("#trigo-slider-description").stop(true, true).fadeIn();
        }, function(){
            hover = false;
            $("#trigo-slider-description").stop(true, true).fadeOut();
        });
        
        $(".trigo-slider-miniature").click(function(){
            $.gotoSlide($(".trigo-slider-miniature").index(this));
        });
        
    };
    
    $.nextSlide = function(){
        if($(".trigo-slider:visible").next().length == 0){
            next = $(".trigo-slider").eq(0);
        }else{
            next = $(".trigo-slider:visible").next();
        }

        $(".trigo-slider:visible").stop(true, true).fadeOut("fast");
        next.stop(true, true).fadeIn("normal");
        $.restartCercle();
    };
    
    $.restartCercle = function(){
             //ON INVRSE LES COULEURS
            colorIntermediaire = color;
            color = color2;
            color2 = colorIntermediaire;

            // On nettoie la zone de dessin
            ctx1.clearRect(0,0,diametreCercleCentral + 20,diametreCercleCentral + 20);
            // On dessine le cercle blanc avec ombre port&eacute;e
            ctx1.beginPath();
            ctx1.arc(160,160,155,0,2*Math.PI);
            ctx1.lineWidth = 5;
            ctx1.strokeStyle = color2;
            ctx1.shadowOffsetX = 2;
            ctx1.shadowBlur = 5;
            ctx1.shadowColor="rgba(0,0,0,0.1)";
            ctx1.stroke();
            ratio = 0;
    };
    
    $.gotoSlide = function(numSlide) {
        $(".trigo-slider:visible").stop(true, true).fadeOut("fast");
        $(".trigo-slider").eq(numSlide).stop(true, true).fadeIn("normal");;
        $.restartCercle();
    };
    
    $.remplirCercle = function(){
        if(!hover){
            // On nettoie la zone de dessin
            ctx2.clearRect(0,0,diametreCercleCentral+20,diametreCercleCentral+20);
            // Et on redessine le cercle
            ctx2.beginPath();
            ctx2.arc(160,160,155, 0, ratio * 2 * Math.PI);
            ctx2.lineWidth = 5;
            ctx2.strokeStyle = color;
            ctx2.stroke();
            ratio = ratio+0.001;
            if(ratio >= 1){
                $.nextSlide();
            }
        }
        setTimeout($.remplirCercle, 0);
    }
    
})(jQuery);