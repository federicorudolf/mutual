<?php
/**
 * @version 1.0
 */
 
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

require("class.phpmailer.php");
require("class.smtp.php");
header('Content-type: application/json');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Origin: *");

// Valores enviados desde el formulario
if ( !isset($_POST["submit"]) || !isset($_POST["email"]) ) {
	die ("Es necesario que completes algunos datos más");
}
$email = $_POST["email"];
$nombre = $_POST["name"];
$company = $_POST["company"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$checked = $_POST["checked"];

$email_message = "Contenido del Mensaje: \n\n";
$email_message .= "Nombre: ".$name."\n";
$email_message .= "Empresa: ".$company."\n";
$email_message .= "Email: ".$email."\n";
$email_message .= "Teléfono: ".$phone."\n";
$email_message .= "Mensaje: ".$message."\n";
$email_message .= "Empresa/Individuo: ".$checked."\n";

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c0270168.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "contacto@unidadprimerodenoviembre.com";  // Mi cuenta de correo
$smtpClave = "November2018";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "federicorudolf@hotmail.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->Subject = "Contacto desde la página web"; // Este es el titulo del email.
$mensajeHtml = nl2br($email_message);
$mail->Body = "{$mensajeHtml}"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$estadoEnvio = $mail->Send(); 

if($estadoEnvio){
    echo "<script>alert('Gracias por su consulta. Será respondida a la brevedad.'); location.href='unidadprimerodenoviembre.com/#/aboutUs'</script>";
} else {
    echo "<script>alert('Hubo un error al enviar tu consulta. Por favor inténtalo nuevamente más tarde.'); location.href='unidadprimerodenoviembre.com/#/aboutUs'</script>" . $mail ->ErrorInfo;
}
?>
