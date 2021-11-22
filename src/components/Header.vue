<template>
    <div id='Header'>
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="../assets/css/styles.css" rel="stylesheet" />
    <body id='page-top'>
    <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">FindNewCar</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><router-link to="/home" class="nav-link"><a class="nav-link">Inicio</a></router-link></li>
                        <li class="nav-item nav-link"><a class="nav-link" href="#about">Acerca De</a></li>
                        <li class="nav-item"><router-link to="/carros" class="nav-link"><a class="nav-link">Comprar/Vender</a></router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </body>
    </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
<script src="../assets/js/scripts.js"></script>
        
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

<script>
export default {
    name: 'Header',
}
</script>
<style>
@import '../assets/css/styles.css';
</style>
