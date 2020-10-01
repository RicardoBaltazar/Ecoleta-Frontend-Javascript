<?php

    require_once('db.php');

    $name = $_POST['name'];
    $address = $_POST['address'];
    $address2 = $_POST['address2'];
    $state = $_POST['state'];
    $city = $_POST['city'];

    $lamp = (isset($_POST['lamp']) ) ? 'Lâmpada' : isset($lamp);
    $batteries = (isset($_POST['batteries']) ) ? 'Pilhas e Baterias' : isset($batteries);
    $papers = (isset($_POST['papers']) ) ? 'Papéis e Papelão' : isset($papers);
    $eletronic = (isset($_POST['eletronic']) ) ? 'Resíduos Eletrônicos' : isset($eletronic);
    $organic = (isset($_POST['organic']) ) ? 'Resíduos Orgânicos' : isset($organic);
    $oil = (isset($_POST['oil']) ) ? 'Óleos de Cozinha' : isset($oil);


    $objDb = new db();
    $link = $objDb->connect_mysql();

    $sql = "insert into point(
        name, address, address2, state, city, lamp, batteries, papers, eletronic, organic, oil)
        values(
            '$name', '$address', '$address2', '$state', '$city', '$lamp', '$batteries', '$papers', '$eletronic',
            '$organic', '$oil')";


            if(mysqli_query($link, $sql)){
                echo 'Dados cadastrados no banco de dados';
            } else {
                echo 'erro ao registrar dados';
            }

?>