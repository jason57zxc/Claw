<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$g_id = $obj['g_id'];
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


// if($g_id != null && $g_name != null && $g_quantity != null && $insertcoins != null ){

	$Sql_Update = 
	"UPDATE goods 
	SET g_name ='$g_name', g_category = '$g_category', g_photo = '$g_photo', g_quantity = '$g_quantity',
	g_info = '$g_info', insertcoins = '$insertcoins', g_sizeL = '$g_sizeL', g_sizeW = '$g_sizeW', g_sizeH = '$g_sizeH'
	WHERE g_id = '$g_id' ";

		if(mysqli_query($con,$Sql_Update)){
			$MSG = '更新成功！！' ;
			$json = json_encode($MSG);
			echo $json ;	
		} else{
			$ErrMSG = '失敗！！' ;
			$Errjson = json_encode($ErrMSG);
			echo $Errjson ;
		}	
// } else {
// 	$EmpMSG = '失敗！！' ;
// 	$Empjson = json_encode($EmpMSG);
// 	echo $Empjson ;
// }


 mysqli_close($con);
?>