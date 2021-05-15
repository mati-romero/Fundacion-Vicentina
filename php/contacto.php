<?php

	$destino = "matias.1993.romero@gmail.com";

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];

	mail($destino, $asunto, $mensaje);

	echo "<script>alert('Su correo a sido enviado con exito');</script>";
	echo "<script>setTimeout(\"location.href('index.html')\",1000)</script>";

?>