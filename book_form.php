<?php 

$connection = mysqli_connect('localhost', 'root', '', 'mikhails_book')

if(isset($_POST['send'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $location = $_POST['location'];
    $guests = $_POST['guests'];
    $arrivals = $_POST['arrivals'];
    $leaving = $_POST['leaving'];


    $_request = " insert into book_form(naem, email, phone, address, location, guests, arrivals, leaving) values 
    ('$name', '$email', '$phone', '$address', '$location', '$guests', '$arrivals', '$leaving')";

    mysqli_query($connection, $_request)

    header('location:book.html')
} else {
    echo 'something went wrong tru again'
}

?>