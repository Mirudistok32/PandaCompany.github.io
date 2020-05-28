<?php
  $name = $_POST['user_name']; // input name="name"
  $email = $_POST['user_email']; // input name="phone"

  $message = "Новый заказ на сайте".PHP_EOL."Имя: ".$name.PHP_EOL."Email: ".$email; //Обрабатываем данные из формы, для передачи их в письме PHP_EOL - это перенос на другую стороку

  send(101105716,$message); // id страницы на которую будут отправляться заявки

  function send($id , $message) {
    $url = 'https://api.vk.com/method/messages.send';
    $params = array(
      'user_id' => $id,    // Кому отправляем
      'message' => $message,   // Что отправляем
      'access_token' => 'a22c4fbbf51248675faf7fc11224f6283157529ffd4fd21831e96d8280db72c90e73ea52311f6e50f3146',  
      'v' => '5.62',
    );

    $result = file_get_contents($url, false, stream_context_create(array(
        'http' => array(
          'method'  => 'POST',
          'header'  => 'Content-type: application/x-www-form-urlencoded',
          'content' => http_build_query($params)
        )
    )));
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Отправка формы</title>
</head>
<body>
	<div class="loader">
		<div class="center">
			<h1 style="text-align: center;">Всё ок!</h1>
		</div>
	</div>
</body>
</html>


