<?php

	/* 
	 * Exemplo de mapa de imagens.
	 * 
	 * 2014.1.08.010
	 * 
	 */


	// Acesso aos dois scripts de conversão do mapa (estão em scripts.js nessa mesma pasta.
	echo '<script type="text/javascript" src="scripts.js"></script>';


	// criação da tag <map> e suas respectivas tags <area>. É importante que tanto a área como o map tenham o atributo "id", pois eles são lidos pelo javascript.
	// a tag <map> também precisa ter o atributo 'name', pois ele é usado na montagem dos campos.
	echo '
		<map id="planetas" name="planetas">
			<area  alt="sol" id="sol" coords="128,223,58" shape="circle">
			<area  alt="mercurio" id="mercurio" coords="219,190,9" shape="circle">
			<area  alt="venus" id="venus" coords="276,185,16" shape="circle">
			<area  alt="terra" id="terra" coords="293,152,14" shape="circle">
			<area  alt="jupiter" id="jupiter" coords="370,116,23" shape="circle">
			<area  alt="marte" id="marte" coords="385,159,11" shape="circle">
			<area  alt="saturno" id="saturno" coords="478,116,20" shape="circle">
			<area  alt="urano" id="urano" coords="430,81,9" shape="circle">
			<area  alt="netuno" id="netuno" coords="528,79,9" shape="circle">
		</map>
	';
	
	echo "<br/>";
	echo "<p>Clique nos planetas:</p>";
	
	// div onde o mapa será implementado. Dentro de sua style, colocar o caminho até a imagem, acompanhado de sua altura e largura.
	echo '<div id="' . 'sistemasolar' . '" style="background-image:url(\'https://abrilveja.files.wordpress.com/2016/05/sistema-solar-voyager-620-original3.jpeg\'); width: ' . 620 . 'px; height: ' . 349 . 'px;">';
    echo '</div>';
	
	echo "<p>Planetas clicados:  ";
	// campo onde serão guardados os valores de quais mapas estão clicados.
	echo "<input type='text' name='planetasSelecionados' id='planetasSelecionados' value='" . $_REQUEST['planetasSelecionados'] . "' /> </p>";
	
	echo "<script type='text/javascript'>";
	// código que faz a conversão. A ordem de argumentos é: id da tag map, id da tag input, id da div do mapa.
	echo "	converterMapaemSVG('planetas', 'planetasSelecionados', 'sistemasolar');";
	echo "</script>";
	
	
	
?>

<?php
// get the q parameter from URL
$m = $_REQUEST["m"];
$q = $_REQUEST["s"];

$return = $q;

echo $return;

?>
