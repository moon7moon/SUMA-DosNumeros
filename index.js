<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="estilos.css">
    <title id="titulo">Suma 2 numeros</title>
</head>
<body>
    <div class="container">
        <h1>Aplicación que suma 2 números</h1>
        <h2>Suma dos números consumiendo un servicio de API en Render</h2>

        <form onsubmit="event.preventDefault(); calcularSuma();">
            <label for="num1">Ingresa el primer número</label>
            <input type="text" id="num1" placeholder="Ej. 10">

            <label for="num2">Ingresa el segundo número</label>
            <input type="text" id="num2" placeholder="Ej. 5">

            <button type="submit">Sumar</button>
        </form>

        <h1 id="resultado">Esperando números...</h1>
    </div>

<script src="suma.js"></script>
</body>
</html>