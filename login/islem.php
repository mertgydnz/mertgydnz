<?php
require'baglan.php';


if(isset($_POST['kayit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password_again = @$_POST['password_again'];
    if(!$username){
        echo "lutfen kullanici adi girin";

    } elseif(!$password || !$password_again){
        echo "lutfen sifrenizi girin";
    } elseif($password!= $password_again){
        echo "girdiginiz sifreler ayni degil";
    } else{
        $sorgu = $db->prepare('INSERT INTO users SET user_name=?,user_password=?');
        $ekle =$sorgu->execute([
            $username,$password
        ]);
        if($ekle){
            echo "kayit basariyla yapildi, yonlendiriliyorsunuz";
            header('Refresh:2; index.html');
        } else{
            echo "bir hata olustu, tekrar kontrol edin";
        }

    }
}

if(isset($_POST['giris'])){
    header('Refresh:2; index.html');

}


