<?php

    $name = $_POST['name'];
    $address = $_POST['address'];
    $address2 = $_POST['address2'];
    $state = $_POST['state'];
    $city = $_POST['city'];

    //$lamp = $_POST['lamp'];
    $lamp = (isset($_POST['lamp']) ) ? 'Lâmpada' : isset($lamp);
    $batteries = (isset($_POST['batteries']) ) ? 'Pilhas e Baterias' : isset($batteries);
    $papers = (isset($_POST['papers']) ) ? 'Papéis e Papelão' : isset($papers);
    $eletronic = (isset($_POST['eletronic']) ) ? 'Resíduos Eletrônicos' : isset($eletronic);
    $organic = (isset($_POST['organic']) ) ? 'Resíduos Orgânicos' : isset($organic);
    $oil = (isset($_POST['oil']) ) ? 'Óleos de Cozinha' : isset($oil);

    echo $name.'<br>';
    echo $address.' - '. $address2.'<br>';
    echo $city.'/'.$state;
    '<br>';
    '<br>';

    echo $lamp;
    '<br>';
    echo $batteries;
    '<br>';
    echo $papers;
    '<br>';
    echo $eletronic;
    '<br>';
    echo $organic;
    '<br>';
    echo $oil;
    '<br>';


    

?>