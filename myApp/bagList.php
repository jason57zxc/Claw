<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$id = $obj['id'];

$json_arry= array();

// $result = mysqli_query($con, " SELECT * FROM goods_obtain WHERE id = '28' and status='reserved' ");
$result = mysqli_query($con, 
"Select * From goods_obtain, goods
Where goods_obtain.g_id = goods.g_id and status = 'reserved' and id = $id");

while($row = mysqli_fetch_assoc($result))
{
	$json_arry[] = $row;
}

print(json_encode($json_arry));

?>