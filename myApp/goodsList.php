<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json_arry= array();
$result = mysqli_query($con,"SELECT * FROM goods");
while($row = mysqli_fetch_assoc($result))
{
	$json_arry[] = $row;
}

// print(' "goods": ');
print(json_encode($json_arry));

// $g_name = $obj['g_name'];
// $g_category = $obj['g_category'];
// $g_photo = $obj['g_photo'];
// $g_quantity = $obj['g_quantity'];
// $g_info = $obj['g_info'];
// $g_sizeL = $obj['g_sizeL'];
// $g_sizeW = $obj['g_sizeW'];
// $g_sizeH = $obj['g_sizeH'];


?>