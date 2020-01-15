<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$m_name = $obj['m_name'];
$m_photo = $obj['m_photo'];
$m_address1 = $obj['m_address1'];
$m_guarantee = $obj['m_guarantee'];
$m_power = $obj['m_power'];


if($m_name != null && $m_photo != null && $m_address1 != null && $m_guarantee != null ){

	$Sql_GoodsEntry = "INSERT INTO machines (`m_id`, `m_name`, `m_photo`, `m_address1`, `m_guarantee`, m_power, owner_id) VALUES ('','$m_name', '$m_photo', '$m_address1', '$m_guarantee', '$m_power','29')";
		if(mysqli_query($con,$Sql_GoodsEntry)){
			$MSG = '機台新增成功！！' ;
			$json = json_encode($MSG);
			echo $json ;	
		} else{
			$ErrMSG = '失敗！！' ;
			$Errjson = json_encode($ErrMSG);
			echo $Errjson ;
		}	
} else {
	$EmpMSG = '漏打ㄌ喔！！' ;
	$Empjson = json_encode($EmpMSG);
	echo $Empjson ;
}


 mysqli_close($con);
?>