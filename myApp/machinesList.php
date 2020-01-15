<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$id = $obj['id'];

$json_arry= array();


$result = mysqli_query($con, " SELECT * FROM machines WHERE owner_id = '$id' ");
while($row = mysqli_fetch_assoc($result))
{
	$json_arry[] = $row;
}

print(json_encode($json_arry));

?>