<?php
$rayonCercleCentral = 150;
$diametreCercleCentral = $rayonCercleCentral*2;
$rayonCercleMiniature = 25;
$diametreCercleMiniature = $rayonCercleMiniature*2;
$marge = 10;
$margeTotal = $diametreCercleMiniature+$marge;

$tabPositions = array(
	array('nom' => 'Mercure', 'src' => 'images/planete1.jpg', 'title' => 'Mercure', 'description' => 'Mercure est la plan&egrave;te la plus proche du Soleil et la moins massive du Syst&egrave;me solaire'),
	array('nom' => 'V&eacute;nus', 'src' => 'images/planete2.jpg', 'title' => 'V&eacute;nus', 'description' => 'V&eacute;nus est la deuxi&egrave;me des huit plan&egrave;tes du Syst&egrave;me solaire en partant du Soleil, et la sixi&egrave;me par masse ou par taille d&eacute;croissantes'),
	array('nom' => 'Terre', 'src' => 'images/planete3.jpg', 'title' => 'Terre', 'description' => 'La Terre est la troisi&egrave;me plan&egrave;te du Syst&egrave;me solaire par ordre de distance croissante au Soleil, et la quatri&egrave;me par taille et par masse croissantes'),
	array('nom' => 'Mars', 'src' => 'images/planete4.jpg', 'title' => 'Mars', 'description' => 'Mars est la quatri&egrave;me plan&egrave;te par ordre de distance croissante au Soleil et la deuxi&egrave;me par masse et par taille croissantes sur les huit plan&egrave;tes que compte le Syst&egrave;me solaire'),
	array('nom' => 'Jupiter', 'src' => 'images/planete5.jpg', 'title' => 'Jupiter', 'description' => 'Jupiter est une plan&egrave;te g&eacute;ante gazeuse. Il s\'agit de la plus grosse plan&egrave;te du Syst&egrave;me solaire, plus volumineuse et massive que toutes les autres plan&egrave;tes r&eacute;unies'),
	array('nom' => 'Saturne', 'src' => 'images/planete6.jpg', 'title' => 'Saturne', 'description' => 'Saturne est la sixi&egrave;me plan&egrave;te du Syst&egrave;me solaire par ordre de distance au Soleil et la deuxi&egrave;me plus grande, aussi bien en taille qu\'en masse, apr&egrave;s Jupiter'),
	array('nom' => 'Uranus', 'src' => 'images/planete7.jpg', 'title' => 'Uranus', 'description' => 'Uranus est une plan&egrave;te g&eacute;ante de glaces de type Neptune froid'),
	array('nom' => 'Neptune', 'src' => 'images/planete8.jpg', 'title' => 'Neptune', 'description' => 'Neptune est la huiti&egrave;me et derni&egrave;re plan&egrave;te du Syst&egrave;me solaire par distance croissante au Soleil')
);

$pageAccueil = $tabPositions[0];
/*
$nbMiniatures = count($tabPositions);
$k = $rayonCercleCentral+$marge+$rayonCercleMiniature;
$K = $rayonCercleCentral+$marge+$diametreCercleMiniature;
$trigStart = M_PI/$nbMiniatures-M_PI/2;

for($i=0;$i<$nbMiniatures;$i++){
	$tabPositions[$i]['x'] = cos($trigStart)*$k+$K-$rayonCercleMiniature;
	$tabPositions[$i]['y'] = sin($trigStart)*$k+$K-$rayonCercleMiniature;
	$tabPositions[$i]['z-index'] = $i+1000;
	$trigStart += 2*M_PI/$nbMiniatures;
}
*/
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html lang="en" xml:lang="en">
	<head>
		<title>Menu</title>
		<meta http-equiv="Content-Type" content="txt/html; charset=utf-8" />
                <link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" media="screen, print" href="css/styles.css" />
		<script type="text/javascript" src="js/jquery-1.8.2.min.js" ></script>
		<script type="text/javascript" src="js/jquery.cercleTrigoSlider.js" ></script>
		<style type="text/css">
                body{
                    font-family: 'Varela Round', sans-serif;
                }
		.trigo-slider-miniature{
                    position : absolute;
                    overflow:hidden;
                    -webkit-border-radius:<?php echo $rayonCercleMiniature; ?>px;
                    -moz-border-radius:<?php echo $rayonCercleMiniature; ?>px;
                    border-radius:<?php echo $rayonCercleMiniature; ?>px;
                    width:<?php echo $diametreCercleMiniature; ?>px;
                    height:<?php echo $diametreCercleMiniature; ?>px;
                    z-index : 1004;
		}
		.select{
		}
		#centre{
                    z-index : 1006;
                    text-align : center;
                    position : absolute;
                    overflow:hidden;
                    top : <?php echo $margeTotal; ?>px;
                    left : <?php echo $margeTotal; ?>px;
                    -webkit-border-radius:<?php echo $rayonCercleCentral; ?>px;
                    -moz-border-radius:<?php echo $rayonCercleCentral; ?>px;
                    border-radius:<?php echo $rayonCercleCentral; ?>px;
                    width:<?php echo $diametreCercleCentral; ?>px;
                    height:<?php echo $diametreCercleCentral; ?>px;
                    margin : <?php echo $marginCentre-$tailleMiniatures/2; ?>px;
                    color : white;
		}
		#centre img{
                    display : none;
                    -webkit-border-radius:<?php echo $rayonCercleCentral; ?>px;
                    -moz-border-radius:<?php echo $rayonCercleCentral; ?>px;
                    border-radius:<?php echo $rayonCercleCentral; ?>px;
		}
                #trigo-slider-description{
                    display : none;
                    opacity : 0.92;
                    position : absolute ;
                    background-color : #FFFFFF;
                    top : 0px;
                    left : 0px;
                    width : <?php echo $diametreCercleMiniature*2+$marge*2+$diametreCercleCentral; ?>px;
                    height : <?php echo $diametreCercleMiniature*2+$marge*2+$diametreCercleCentral; ?>px;
                    z-index : 1005;
                    -webkit-border-radius:<?php echo $rayonCercleCentral+$marge+$diametreCercleMiniature; ?>px;
                    -moz-border-radius:<?php echo $rayonCercleCentral+$marge+$diametreCercleMiniature; ?>px;
                    border-radius:<?php echo $rayonCercleCentral+$marge+$diametreCercleMiniature; ?>px;
                }
                #trigo-slider-haut,#trigo-slider-bas{
                    padding : 0 10px 10px 0;
                    text-align : center;
                    width : <?php echo $diametreCercleMiniature*2+$marge*2+$diametreCercleCentral; ?>px;
                    height : <?php echo $diametreCercleMiniature*2/3 ?>px;
                    text-align :center;
                    color : #000000;
                }
                #trigo-slider-haut{
                    font-size : 28px;
                    position : absolute;
                    top : <?php echo $marge;?>px;
                }
                #trigo-slider-bas{
                    position : absolute;
                    bottom : 0px;
                }
		</style>
	</head>

	<body style="margin : 0;">
	<script type="text/javascript">
                var timer = new Object;
                var ctx2;
                var ctx1;
                var ratio = 0;
                var color = "#91c2ff";
                var color2 = "#f7f7f7";
                var hover = false
                
                /*
                function nextSlide(){
                    if($(".trigo-slider:visible").next().length == 0){
                        next = $(".trigo-slider").eq(0);
                    }else{
                        next = $(".trigo-slider:visible").next();
                    }
                    
                    $(".trigo-slider:visible").stop(true, true).fadeOut("normal");
                    next.stop(true, true).fadeIn("normal");
                    restartCercle();
                }*/
                /*
                function gotoSlide(numSlide){
                    $(".trigo-slider:visible").stop(true, true).fadeOut("fast");
                    $(".trigo-slider").eq(numSlide).stop(true, true).fadeIn("normal");;
                    restartCercle();
                }
                */
                /*
                function restartCercle(){
                    //ON INVRSE LES COULEURS
                    colorIntermediaire = color;
                    color = color2;
                    color2 = colorIntermediaire;

                    // On nettoie la zone de dessin
                    ctx1.clearRect(0,0,<?php echo $diametreCercleCentral+20 ?>,<?php echo $diametreCercleCentral+20 ?>);
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
                }*/
                /*
                function remplirCercle(){
                    if(!hover){
                        // On nettoie la zone de dessin
                        ctx2.clearRect(0,0,<?php echo $diametreCercleCentral+20 ?>,<?php echo $diametreCercleCentral+20 ?>);
                        // Et on redessine le cercle
                        ctx2.beginPath();
                        ctx2.arc(160,160,155, 0,  ratio * 2 * Math.PI);
                        ctx2.lineWidth = 5;
                        ctx2.strokeStyle = color;
                        ctx2.stroke();
                        ratio = ratio+0.001;
                        if(ratio >= 1){
                            nextSlide();
                        }
                    }
                    setTimeout(remplirCercle, 0);
                    
                }*/
                
                function test(){
                    $("#centre").cercleTrigoSlider('remplirCercle')
                    setTimeout(test, 0);
                }
                
                $( document ).ready(function(){
                    
                    $("#centre").cercleTrigoSlider();
                });
	</script>
                <div id="centre">
                    <?php
                    foreach($tabPositions as $numCercle=>$miniature){
                        ?>	
                            <img class="trigo-slider" style="<?php echo (($numCercle == 0)?'display : block;':'')?>position : absolute;top : 0px;left : 0px;" src="<?php echo $miniature['src']?>" data-title="<?php echo $miniature['title'] ?>" data-description="<?php echo $miniature['description'] ?>" />
                        <?php
                    }
                    ?>
                </div>
	</body>
</html>