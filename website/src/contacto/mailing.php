<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $msg = $_POST['message'];
    $checked = $_POST['checked'];

    $formMessage = '
    <table width='100%' style='background: white; text-align:center'>
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
    </table>'

    $to = 'matias.biasola.zani@gmail.com';
    $subject = 'ASOCIACION MUTUAL PRIMERO DE NOVIEMBRE';
    $message = $formMessage;
    $headers = "Form:".$email;
  }
?>
