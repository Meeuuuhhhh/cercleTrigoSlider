<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html lang="en" xml:lang="en">
    <head>
        <title>cercleTrigoSlider</title>
        <meta http-equiv="Content-Type" content="txt/html; charset=utf-8" />
        <link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" media="screen, print" href="css/styles.css" />
        <script type="text/javascript" src="js/jquery-1.8.2.min.js" ></script>
        <link rel="stylesheet" type="text/css" media="screen, print" href="css/jquery.cercleTrigoSlider.css" />
        <script type="text/javascript" src="js/jquery.cercleTrigoSlider.js" ></script>
    </head>
    <body style="margin : 0;">
        <script type="text/javascript">
            $( document ).ready(function(){
                //APPEL DU PLUG IN
                $("#centre").cercleTrigoSlider();
            });
        </script>
        <div id="centre">	                   
            <img class="trigo-slider" src="images/planete1.jpg" data-title="Mercure" data-description="Mercure est la plan&egrave;te la plus proche du Soleil et la moins massive du Syst&egrave;me solaire" />
            <img class="trigo-slider" src="images/planete2.jpg" data-title="V&eacute;nus" data-description="V&eacute;nus est la deuxi&egrave;me des huit plan&egrave;tes du Syst&egrave;me solaire en partant du Soleil, et la sixi&egrave;me par masse ou par taille d&eacute;croissantes" />
            <img class="trigo-slider" src="images/planete3.jpg" data-title="Terre" data-description="La Terre est la troisi&egrave;me plan&egrave;te du Syst&egrave;me solaire par ordre de distance croissante au Soleil, et la quatri&egrave;me par taille et par masse croissantes" />
            <img class="trigo-slider" src="images/planete4.jpg" data-title="Mars" data-description="Mars est la quatri&egrave;me plan&egrave;te par ordre de distance croissante au Soleil et la deuxi&egrave;me par masse et par taille croissantes sur les huit plan&egrave;tes que compte le Syst&egrave;me solaire" />
            <img class="trigo-slider" src="images/planete5.jpg" data-title="Jupiter" data-description="Jupiter est une plan&egrave;te g&eacute;ante gazeuse. Il s\'agit de la plus grosse plan&egrave;te du Syst&egrave;me solaire, plus volumineuse et massive que toutes les autres plan&egrave;tes r&eacute;unies" />
            <img class="trigo-slider" src="images/planete6.jpg" data-title="Saturne" data-description="Saturne est la sixi&egrave;me plan&egrave;te du Syst&egrave;me solaire par ordre de distance au Soleil et la deuxi&egrave;me plus grande, aussi bien en taille qu\'en masse, apr&egrave;s Jupiter" />
            <img class="trigo-slider" src="images/planete7.jpg" data-title="Uranus" data-description="Uranus est une plan&egrave;te g&eacute;ante de glaces de type Neptune froid" />
            <img class="trigo-slider" src="images/planete8.jpg" data-title="Neptune" data-description="Neptune est la huiti&egrave;me et derni&egrave;re plan&egrave;te du Syst&egrave;me solaire par distance croissante au Soleil" />
        </div>
    </body>
</html>