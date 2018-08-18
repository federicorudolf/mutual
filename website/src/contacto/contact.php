<?php
/**
 * @version 1.0
 */

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

header('Access-Control-Allow-Origin: http://unidadprimerodenoviembre.com');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require("../contacto/PHPMailer.php");
require("../contacto/SMTP.php");

function clean_text($string) {
  $string = trim($string);
  $string = stripslashes($string);
  $string = htmlspecialchars($string);

  return $string;
}

if (isset($_POST["email"])) {
  //$data = file_get_contents('php://input');
  echo $_POST;
  $email = clean_text($_POST["email"]);
  $name = clean_text($_POST["name"]);
  $company = clean_text($_POST["company"]);
  $phone = clean_text($_POST["phone"]);
  $msg = clean_text($_POST["message"]);
  $checked_e = clean_text($_POST["checked"][0]);
  $checked_i = clean_text($_POST["checked"][1]);


  $email_message =
      "<table width='100%' style='background: white; text-align:center'>
      <tr>
        <td>
            <h1 style='background-color: #3386ff;color: #fff;min-width: 100%;font-weight: 400;padding: 10px;font-size: 20px;'>Asociacion Mutual Primero de Noviembre</h1>
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
               <td>$checked_e $checked_i</td>
             </tr>
           </table>
         </td>
       </tr>
     </table>";

  // Datos de la cuenta de correo utilizada para enviar vía SMTP
  $smtpHost = "smtp.gmail.com";  // Dominio alternativo brindado en el email de alta
  $smtpUsuario = "m.biasola@gmail.com";  // Mi cuenta de correo
  $smtpClave = "Googlenexus1991";  // Mi contraseña

  // Email donde se enviaran los datos cargados en el formulario de contacto
  $emailDestino = "matias.biasola.zani@gmail.com";

  $mail = new PHPMailer\PHPMailer\PHPMailer();
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
  $mail->FromName = $name;
  $mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
  $mail->Subject = "Contacto desde la página web"; // Este es el titulo del email.
  $mensajeHtml = nl2br($email_message);
  $mail->Body = "{$mensajeHtml}"; // Texto sin formato HTML
  // FIN - VALORES A MODIFICAR //

  $estadoEnvio = $mail->Send();

  if($estadoEnvio){
      echo "<script>alert('Gracias por su consulta. Será respondida a la brevedad.'); location.href='localhost:8080/#/aboutUs'</script>";
  } else {
      echo "<script>alert('Hubo un error al enviar tu consulta. Por favor inténtalo nuevamente más tarde.'); location.href='localhost:8080/#/aboutUs'</script>" . $mail ->ErrorInfo;
  }
}
?>
