<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = "123456"; 
$dbname = "xcompany_db"; 
$dbport="3307";
$id = '';
 
$con = mysqli_connect($host, $user, $password, $dbname, $dbport);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
switch ($method) {
    case 'GET':
      if(isset($_GET["id"])){
        $id = $_GET['id'];  
      }     
      $sql = "select * from consumables".($id?" where id=$id":''); 
      break;
    case 'POST':
      if(isset($_GET["id"])){
        $id = $_GET['id']; 
        $number = $_POST["number"];
        $supplier = $_POST["supplier"];
        $weight = $_POST["weight"];
        $status = $_POST["status"];
        $save_date = $_POST["save_date"];
        $update_date = $_POST["update_date"];
        $sql = "UPDATE consumables SET number='$number', supplier='$supplier', weight='$weight', status='$status', save_date='$save_date', update_date='$update_date' WHERE id = $id";
      }else{  
        $number = $_POST["number"];
        $supplier = $_POST["supplier"];
        $weight = $_POST["weight"];
        $status = $_POST["status"];
        $save_date = $_POST["save_date"];
        $update_date = $_POST["update_date"];
        $sql = "insert into consumables (number, supplier, weight, status, save_date, update_date) values ('$number', '$supplier', '$weight', '$status', '$save_date, $update_date')"; 
      }
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();
