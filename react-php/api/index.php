<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM books";
        $path = explode('/', $_SERVER['REQUEST_URI']);
  
        if(isset($path[5]) && is_numeric($path[5])) {
            $sql .= " WHERE id = :id order by DateCreated desc";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();
            $books = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        else if(isset($path[5]) && $path[5] == "comment"){
            $sql = "SELECT * FROM `comments`";
            $sql .= " WHERE BookId = :BookId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':BookId', $path[6]);
            $stmt->execute();
            $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        else {
            $stmt = $conn->prepare($sql . "  order by DateCreated desc");
            $stmt->execute();
            $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($books);
        break;
    case "POST":
        $books = json_decode( file_get_contents('php://input') );     
        $sql = "INSERT INTO `books` (`Id`, `BookTitle`, `Author`, `TotalPages`, `ISBN`, `Publisher`, `ReleaseDate`, `DateCreated`, `IsDeleted`) VALUES (NULL, '".$books->booktitle."', '".$books->author."', '".$books->totalpage."', '".$books->isbn."', '".$books->publisher."', '".$books->releasedate."', current_timestamp(), '1')";

        if ($conn->query($sql) === TRUE) {
		echo json_encode(['status' => 1, 'message' => 'New record created successfully']);
		} else {
		echo json_encode(['status' => 0, 'message' => 'Failed to create']);
		}

    case "PUT":
       
        $path = explode('/', $_SERVER['REQUEST_URI']);      
        $comment = json_decode( file_get_contents('php://input') );  
        $ipaddress = get_client_ip();
                
        $sql = "INSERT INTO `comments` (`Id`, `BookId`, `Comments`, `CommentedBy`, `IPAddress`, `DateCreated`) VALUES (NULL, '" . $path[5] ."', '" . $comment->comments . "', '" . $comment->commentby . "', '" .  $ipaddress . "', current_timestamp());";
        if ($conn->query($sql) === TRUE) {
		echo json_encode(['status' => 1, 'message' => 'New record created successfully']);
		} else {
		echo json_encode(['status' => 0, 'message' => 'Failed to create']);
		}


        break;

    case "DELETE":
        $sql = "DELETE FROM books WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}


function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}