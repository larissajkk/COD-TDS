function soma() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
   
    var result = num1 + num2;
    document.getElementById("resultado").textContent = result;
    console.log(result)
   }
   function sub() {
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;

    var result = num3 - num4;
    document.getElementById("resultadosub").textContent = result;
    console.log(result)
   }
   function div() {
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;

    var result = num5 / num6;
    document.getElementById("resultadodiv").textContent = result;
    console.log(result)
   }
   function mult() {
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;

    var result = num7 * num8;
    document.getElementById("resultadomult").textContent = result;
    console.log(result)
   }
   function media() {
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11= document.getElementById("num11").valueAsNumber;

    var result = (num9 + num10 + num11)/3;
    document.getElementById("resultadomed").textContent = result;
    console.log(result)
   }
   
