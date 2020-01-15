<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$o_id = $obj['o_id'];
$user_name = $obj['user_name'];
$send_address1 = $obj['send_address1'];
$message = $obj['message'];
$shipping_method = $obj['shipping_method'];
$cost = $obj['cost'];
$payment = $obj['payment'];


// $Sql_Entry = "INSERT INTO machines (`m_id`, `m_name`, `m_photo`, `m_address1`, `m_guarantee`, owner_id) VALUES ('','$m_name', '$m_photo', '$m_address1', '$m_guarantee','29')";
$Sql_Entry = "INSERT INTO shopping_order (order_No, o_id, user_name, shipping_method, send_address1, message, cost, payment ) VALUES ('', '$o_id', '$user_name', '$shipping_method', '$send_address1', '$message', '$cost', '$payment')";
	if(mysqli_query($con,$Sql_Entry)){
		$MSG = '下單成功！！' ;
		$json = json_encode($MSG);
		echo $json ;	
	} else{
		$ErrMSG = '失敗！！' ;
		$Errjson = json_encode($ErrMSG);
		echo $Errjson ;
	}	

 mysqli_close($con);
?>