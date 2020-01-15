<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$g_name = $obj['g_name'];
$g_category = $obj['g_category'];
$g_photo = $obj['g_photo'];
$g_quantity = $obj['g_quantity'];
$g_info = $obj['g_info'];
$insertcoins = $obj['insertcoins'];
$g_sizeL = $obj['g_sizeL'];
$g_sizeW = $obj['g_sizeW'];
$g_sizeH = $obj['g_sizeH'];
$m_id = $obj['m_id'];


//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM goods WHERE g_name='$g_name'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));



$Sql_GoodsEntry = "INSERT INTO goods (`g_id`, `g_name`, `g_category`, `g_quantity`, `g_info`, `g_photo`,`g_sizeL`, `g_sizeW`, `g_sizeH`, insertcoins, m_id) VALUES ('','$g_name','$g_category', '$g_quantity', '$g_info', '$g_photo','$g_sizeL', '$g_sizeW', '$g_sizeH', '$insertcoins', '$m_id')";
	if(mysqli_query($con,$Sql_GoodsEntry)){
		$MSG = '上架成功！！' ;
		$json = json_encode($MSG);
		echo $json ;	
	} else{
		$ErrMSG = '失敗！！' ;
		$Errjson = json_encode($ErrMSG);
		echo $Errjson ;
	}	


 mysqli_close($con);
?>