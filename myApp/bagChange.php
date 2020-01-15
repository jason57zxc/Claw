<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$o_id = $obj['o_id'];

$json_arry= array();


$Sql_Update = 
	"UPDATE goods_obtain 
	SET status = 'expired'
	WHERE o_id = '$o_id'";

		if(mysqli_query($con,$Sql_Update)){
			$MSG = '兌換成功！！' ;
			$json = json_encode($MSG);
			echo $json ;	
		} else{
			$ErrMSG = '失敗！！' ;
			$Errjson = json_encode($ErrMSG);
			echo $Errjson ;
		}	

mysqli_close($con);
?>