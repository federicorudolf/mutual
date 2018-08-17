<?php
/**
 * @version 1.0
 */
 
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

require("../contacto/PHPMailer.php");
require("../contacto/SMTP.php");

// Valores enviados desde el formulario
// if ( !isset($_POST["submit"]) || !isset($_POST["email"]) ) {
// 	die ("Es necesario que completes algunos datos más");
// }
echo $_POST;

$email = $_POST["email"];
$nombre = $_POST["name"];
$company = $_POST["company"];
$phone = $_POST["phone"];
$msg = $_POST["message"];
$checked = $_POST["checked"];

$email_message = 
    "<table width='100%' style='background: white; text-align:center'>
     <tr>
       <td>
         <table width='100%'>
           <tr>
             <td>
                 <h1 style='background-color: #3386ff;color: #fff;min-width: 100%;font-weight: 400;padding: 10px;font-size: 20px;'>Asociacion Mutual Primero de Noviembre</h1>
             </td>
           </tr>
         </table>
       </td>
     </tr>
     <tr>
       <td>
         <table table cellspacing='0' cellpadding='10' border='0' width='100%' align='center'>
           <tr style='border:0;border-collapse:collapse;width:100%;margin: 0 auto;background-color: #000;color: #fff; min-width: 100%;'>
             <th>Email</th>
             <th>Nombre</th>
             <th>Empresa</th>
             <th>Telefono</th>
             <th>Mensaje</th>
             <th>Soy Empresa o Individuo</th>
           </tr>
           <tr>
             <td>$email</td>
             <td>$name</td>
             <td>$company</td>
             <td>$phone</td>
             <td>$msg</td>
             <td>$checked</td>
           </tr>
         </table>
       </td>
     </tr>
   </table>";

// Datos de la cuenta de correo utilizada para enviar vía SMTP
$smtpHost = "c0270168.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "contacto@unidadprimerodenoviembre.com";  // Mi cuenta de correo
$smtpClave = "November2018";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "matias.biasola.zani@gmail.com";

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
