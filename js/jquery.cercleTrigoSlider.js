(function($)
{
    
    var timer = new Object;
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
    
    //LES FONCTIONS UTILISEES DANS LE PLUGIN
    var fonctions = {
        init : function() {
            //ON ENREGISTRE EN VARIABLE THIS
            divPrincipale = this;

            //ON RECUPERE LES IMAGES
            var $images = divPrincipale.children("img");

            var nbImages = $images.length;

            //LA VARIABLE POUR LA TRIGO DES POSITIONS DES MINIATURES
            var trigStart = (Math.PI/nbImages)-(Math.PI/2);
            var k = rayonCercleCentral+marge+rayonCercleMiniature;
            var K = rayonCercleCentral+marge+diametreCercleMiniature;

            //ON CREE LES MINIATURES
            $images.each(function() {

                positionLeft = (Math.cos(trigStart)*k)+K-rayonCercleMiniature;
                positionTop = (Math.sin(trigStart)*k)+K-rayonCercleMiniature;
                divPrincipale.before('<a class="lienMiniature" href="javascript:void(0)"><img class="trigo-slider-miniature" src="'+$(this).attr("src")+'" style="position: absolute;left:'+positionLeft+'px;top:'+positionTop+'px;" /></a>');

                trigStart += (2*Math.PI)/nbImages;
            });

            //DIV POUR LA DESCRIPTION ET LE TITRE
            divPrincipale.before('<div id="trigo-slider-description"><div id="trigo-slider-haut"></div><div id="trigo-slider-bas"></div></div>');

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

                fonctions['remplirCercle'].apply();
                console.log('FIN INIT');

            });
            
        },
        nextSlide : function() {
            if($(".trigo-slider:visible").next().length == 0){
                next = $(".trigo-slider").eq(0);
            }else{
                next = $(".trigo-slider:visible").next();
            }

            $(".trigo-slider:visible").stop(true, true).fadeOut("normal");
            next.stop(true, true).fadeIn("normal");
            fonctions['restartCercle'].apply();
        },
        restartCercle : function() {
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
        },
        gotoSlide : function(numSlide){
            $(".trigo-slider:visible").stop(true, true).fadeOut("fast");
            $(".trigo-slider").eq(numSlide).stop(true, true).fadeIn("normal");;
            fonctions['restartCercle'].apply();
        },
        remplirCercle : function() {
            console.log('TEST');
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
                    fonctions['nextSlide'].apply();
                }
            }
            $.doTimeout(3000, fonctions['remplirCercle'].apply());
        }

        
    };
    
    
    //MON PLUG IN
    $.fn.cercleTrigoSlider = function(methodOrOptions)
    {

        if ( fonctions[methodOrOptions] ) {
            return fonctions[methodOrOptions].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
            // Default to "init"
            return fonctions.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }  

        return this;
    };
    
})(jQuery);