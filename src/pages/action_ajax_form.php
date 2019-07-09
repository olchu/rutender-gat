<?php
    $dataForm = json_decode(file_get_contents("php://input"), true);

    $name=$dataForm['name'];
    $phonenumber=$dataForm['phone'];
    $email=$dataForm['email'];
    $checkedItems =$dataForm['checkedItems'];

    $to = "ochurkin@gmail.com"; 
    $from = "site@rostn.ru"; 
  
    foreach ($checkedItems as $value) {
        $service.="<li>";
        $service.=$value;
        $service.="</li>";
    }

    $mail_to_myemail = "
    <h1> Здравствуйте! </h1>
    <h3>Было отправлено сообщение с сайта! </h3>
    <p>Имя отправителя: $name </p>
    <p>Номер телефона: $phonenumber</p>
    <p>email: $email</p>
    <p>Выбранные услуги :</p>
    <ul> $service </ul>
    ";
    
    $headers = "From: $from \r\n";
    $subject = "Cообщение с сайта rostn.ru";
   
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/html; charset=UTF-8');

?>