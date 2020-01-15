<?php
 
include 'config.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$m_id = $obj['m_id'];

$json_arry= array();


$result = mysqli_query($con, " SELECT * FROM goods WHERE m_id = '$m_id' ");
while($row = mysqli_fetch_assoc($result))
{
	$json_arry[] = $row;
}
if(empty($json_arry)) echo "null"; 
else print(json_encode($json_arry));

?>