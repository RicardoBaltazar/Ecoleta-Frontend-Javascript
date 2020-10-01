<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./src/styles/modalConfirm.css">
    <title>Ecoleta</title>
</head>

<body>





<?php

require_once('db.php');

$name = $_POST['name'];
$address = $_POST['address'];
$address2 = $_POST['address2'];
$state = $_POST['state'];
$city = $_POST['city'];

$lamp = (isset($_POST['lamp'])) ? 'Lâmpada' : isset($lamp);
$batteries = (isset($_POST['batteries'])) ? 'Pilhas e Baterias' : isset($batteries);
$papers = (isset($_POST['papers'])) ? 'Papéis e Papelão' : isset($papers);
$eletronic = (isset($_POST['eletronic'])) ? 'Resíduos Eletrônicos' : isset($eletronic);
$organic = (isset($_POST['organic'])) ? 'Resíduos Orgânicos' : isset($organic);
$oil = (isset($_POST['oil'])) ? 'Óleos de Cozinha' : isset($oil);


$objDb = new db();
$link = $objDb->connect_mysql();

$sql = "insert into point(
        name, address, address2, state, city, lamp, batteries, papers, eletronic, organic, oil)
        values(
            '$name', '$address', '$address2', '$state', '$city', '$lamp', '$batteries', '$papers', '$eletronic',
            '$organic', '$oil')";


if (mysqli_query($link, $sql)) {
    ?>
    
    <div class="modal hide">
        <div class="content">
            <div class="header">
                <h3>Ponto de Coleta Cadastrado com Sucesso</h3>
                <a href="create-point.html">Voltar</a>
            </div>
        </div>
    </div>
    
    <?php
} else {
    echo 'erro ao registrar dados';
}

?>

</body>
</html>