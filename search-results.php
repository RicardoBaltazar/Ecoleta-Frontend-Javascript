<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./src/styles/index.css">
    <link rel="stylesheet" href="./src/styles/search-results.css">
    <link rel="stylesheet" href="./styles/responsive.css">
    <title>Resultado da pesquisa</title>
</head>

<body>

    <div class="page-search-results">
        <header>
            <img src="./src/assets/logo.svg" alt="logotipo">
            <a href="index.html">
                <span></span> Voltar para home
            </a>
        </header>

        <main>
            <h4><strong>pontos </strong>encontrados</h4>

            <?php
            require_once('db.php');


            $objDb = new db();
            $link = $objDb->connect_mysql();

            $sql = "SELECT * FROM point";


            $result = mysqli_query($link, $sql);

            while ($datas = mysqli_fetch_array($result)) {
                $name = $datas['name'];
                $address = $datas['address'];
                $address2 = $datas['address2'];
                $city = $datas['city'];
                $state = $datas['state'];

                $lamp = $datas['lamp'];
                $batteries = $datas['batteries'];
                $papers = $datas['papers'];
                $eletronic = $datas['eletronic'];
                $organic = $datas['organic'];
                $oil = $datas['oil'];

            ?>

                <div class='cards' id='cards'>
                    <div class='card' id='card'>
                        <img src="https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="imagem do ponto">
                        <h1> <?php echo $name; ?> </h1>
                        <h3><?php echo $lamp . ' ' . $batteries . ' ' . $papers . ' ' . $eletronic . ' ' . $organic . ' ' . $oil ?></h3>
                        <p>
                            <?php echo $state . ', ' . $city . '<br>' . $address . ', ' . $address2  ?>
                        </p>
                    </div>
                </div>

            <?php
            }
            ?>

        </main>
        
        </div>
</body>

</html>