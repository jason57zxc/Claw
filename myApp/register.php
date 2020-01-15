<?php
 
include 'config.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$name = $obj['name'];
$email = $obj['email'];
$password = $obj['password'];
$account = $obj['account'];
$pnone_number = $obj['pnone_number'];
$gender = $obj['gender'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM users WHERE account='$account'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

if($name != null && $email != null && $password != null && $account != null && $pnone_number != null && $gender != null){
	if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
		$EmailErr = 'E-mail 錯誤！！' ;
		$EmailErrjson = json_encode($EmailErr);
		echo $EmailErrjson ;
	}else {
		// if (preg_match('/^([\xe4-\xe9][\x80-\xbf]{2}){2,4}$/', $name)) {
			if(preg_match("/09[0-9]{8}/", $pnone_number)){
				if(isset($check)){
					$AccountExistMSG = '帳號被用過囉';
					$AccountExistJson = json_encode($AccountExistMSG);
					echo $AccountExistJson ; 
				
					}	else{
				$Sql_Query = "INSERT INTO users (id, account, password, name, email, phone_number, gender) values ('','$account','$password','$name','$email','$pnone_number','$gender')";
				// $Sql_Info = "INSERT INTO `users_info` (`account`, `name`, `email`, `phone_number`, `gender`) VALUES ('$account','$name','$email','$pnone_number','$gender')";
					if(mysqli_query($con,$Sql_Query)){
				
						$MSG = '註冊成功！！' ;
						$json = json_encode($MSG);
						echo $json ;	

					}	else{echo 'Try Again';}
				}
			}else{
				$PhoneErr = '手機錯誤！！' ;
				$PhoneErrjson = json_encode($PhoneErr);
				echo $PhoneErrjson ;
			}
		// } else {
		// 	$NameErr = '名字錯誤！！' ;
		// 	$NameErrjson = json_encode($NameErr);
		// 	echo $NameErrjson ;
		// }
	}
}	else {
	$InputErr = '少打ㄌ' ;
				$InputErrjson = json_encode($InputErr);
				echo $InputErrjson ;
	}


 mysqli_close($con);
?>