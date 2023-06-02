<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="v"iewport content="width=device-width, initial-scale=1.0">
    <title>TAREA - JAVASCRIPT</title>
</head>

<body>

    <h1>COMPROBANDO EL NUMERO MAYOR</h1>

    <script>

        n1 = parseFloat(prompt('Ingrese el primer numero:'));
        n2 = parseFloat(prompt('Ingrese el segundo numero:'));

        if (n1 > n2) {
            alert('el numero  ' + n1 + ' es mayor que el numero ' + n2)
            console.log('el numero  ' + n1 + ' es mayor que el numero ' + n2);
        }

        else if (n2 > n1) {
            alert('el numero ' + n2 + ' es mayor que el numero ' + n1);
            console.log('el numero ' + n2 + ' es mayor que el numero ' + n1);
        }

        else {

            alert('Ambos numeros son identicos.');
            console.log('Ambos numeros son idénticos.');
        }


        // UN SEGUNDO EJERCICIO
        // Mayor de tres números

        var num1, num2, num3, mayor;
        num1 = parseInt(prompt('Ingrese el primer numero:'));
        num2 = parseInt(prompt('Ingrese el segundo numero:'));
        num3 = parseInt(prompt('Ingrese el tercer numero:'));

        if (num1 >= num2 && num1 >= num3) {
            mayor = num1;
        }

        else if (num2 >= num1 && num2 >= num3) {
            mayor = num2;
        }

        else {
            mayor = num3;
        }

        document.write('El numero mayor es: ', mayor);

    </script>


</body>

</html>
