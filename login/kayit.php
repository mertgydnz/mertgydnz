<?php
require 'baglan.php';
?>  


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giris Yap</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="login">
        <div class="login-screen">
            <div class="app-title">
                <h1>Kayit Ol</h1>
            </div>
        <form action="islem.php" method="post">
            <div class="login-form">
                <div class="control-group">
                    <input type="text" name="username" class="login-field" placeholder="Kullanici Adi" id="login-name">
                    <label class="login-field-icon fui-user"for="login-name"></label>

                </div>
                <div class="control-group">
                    <input type="password" name="password" class="login-field" placeholder="sifre" id="login-pass">
                    <label class="login-field-icon fui-user"for="login-pass"></label>
                </div>
                <div class="control-group">
                    <input type="password" name="password_again" class="login-field" placeholder="Tekrar sifre" id="login-pass">
                    <label class="login-field-icon fui-user"for="login-pass"></label>
                </div>
            
                <button href="kayit.php" name="kayit" class="btn btn-primary btn-large btn-block">Kayit ol</button>
            </div>
        </form>
        <a href="index.php"><button href="index.php" class="btn btn-primary btn-large btn-block">Giris yap</button></a>
        </div>
    </div>
    
</body>
</html>