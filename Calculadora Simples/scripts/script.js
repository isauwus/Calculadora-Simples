function calcular(n1, n2){
    n1 = parseFloat(document.getElementsByClassName("n1")[0].value);
    n2 = parseFloat(document.getElementsByClassName("n2")[0].value);

    var selector = document.getElementsByClassName("selector")[0].value;

    switch(selector){
        case '+':
            var calculo = n1 + n2;
            document.getElementsByClassName("resultado")[0].innerHTML = `Resultado da soma de ${n1} + ${n2} é = ${calculo}`;
            break;

        case '-':
            var calculo = n1 - n2;
            document.getElementsByClassName("resultado")[0].innerHTML = `Resultado da subtração de ${n1} - ${n2} é = ${calculo}`;
            break;

        case '/':
            var calculo = Math.round(n1 / n2);
            if(Number.isNaN(calculo)){
                document.getElementsByClassName("resultado")[0].innerHTML = `Insira um divisor válido!`;
            } else {
                document.getElementsByClassName("resultado")[0].innerHTML = `Resultado da divisão de ${n1} / ${n2} é = ${calculo}`;
            }
            break;

        case '*':
            var calculo = n1 * n2;
            document.getElementsByClassName("resultado")[0].innerHTML = `Resultado da subtração de ${n1} * ${n2} é = ${calculo}`;
            break;
    }
}
