<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$g_id = $obj['g_id'];
$id = $obj['id'];
$YMD = $obj['YMD'];
$HMS = $obj['HMS'];
$status = $obj['status'];


//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM queue WHERE time='$HMS'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));


$Sql_GoodsEntry = "INSERT INTO `queue` (`p_id`, `g_id`, `id`, `date`, `time`, `status`) VALUES ('', '$g_id', '$id', '$YMD', '$HMS', '$status');";
	if(mysqli_query($con,$Sql_GoodsEntry)){
		$MSG = '排隊成功！！' ;
		$json = json_encode($MSG);
		echo $json ;	
	} else{
		$ErrMSG = '失敗！！' ;
		$Errjson = json_encode($ErrMSG);
		echo $Errjson ;
	}	
	
$json_arry= array();
	
$result = mysqli_query($con, " SELECT * FROM queue WHERE g_id = '$g_id' and date = '$YMD' and status = 'queue' ");
	while($row = mysqli_fetch_assoc($result))
	{
		$json_arry[] = $row;
	}
	if(empty($json_arry)) echo "null"; 
	else print(json_encode($json_arry));
		

 mysqli_close($con);
?>