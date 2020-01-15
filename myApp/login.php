
<?php
 
// Importing DBConfig.php file.
include 'config.php';
 
// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
$account = $obj['account'];
$password = $obj['password'];

$Sql_Query = "SELECT * FROM users where account = '$account' and password = '$password' ";
$Sql_Email = "SELECT * FROM users where email = '$account' and password = '$password' ";

$checkAccount = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
$checkEmail = mysqli_fetch_array(mysqli_query($con,$Sql_Email));

    if(isset($checkAccount)){

        $SuccessLoginMsg = 'Data Matched';
         
         // Converting the message into JSON format.
        $SuccessLoginJson = json_encode($SuccessLoginMsg);
         
        // Echo the message.
         echo $SuccessLoginJson ; 
        
    }
    elseif(isset($checkEmail)){

        $SuccessLoginMsg = 'Data Matched';
             
         // Converting the message into JSON format.
        $SuccessLoginJson = json_encode($SuccessLoginMsg);
             
        // Echo the message.
         echo $SuccessLoginJson ; 
            
    }  
    else{
        $InvalidMSG = '錯ㄖ' ;
        $InvalidMSGJson = json_encode($InvalidMSG);
        echo $InvalidMSGJson ;
    }


 mysqli_close($con);
?>