<?php
error_reporting( E_ERROR );  
 //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['Name']))		    {$Name		= $_POST['Name'];	    if ($Name == '')	{unset($Name);}}
if (isset($_POST['Size']))		    {$Size	= $_POST['Size'];		if ($Size == '')	{unset($Size);}}
if (isset($_POST['Submit']))		{$Submit		= $_POST['Submit'];		if ($Submit == '')	{unset($Submit);}}
//стирание треугольных скобок из полей формы
if (isset($Name) ) {
$Name=stripslashes($Name);
$Name=htmlspecialchars($Name);
}
if (isset($Size) ) {
$Size=stripslashes($Size);
$Size=htmlspecialchars($Size);
}
// адрес почты куда придет письмо
$address="getreadyshopua@gmail.com";
// текст письма 
$note_text="Имя : $Name \r\n Размер : $Size \r\n ";

if (isset($Name)  &&  isset ($Submit) ) {
mail($address,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
echo "<p style='color:#009900;'>Уважаемый(ая) <b>$Name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $email1</b>.</p>";
}
?>