
    function result1 () {
       var x = document.querySelector("#firstinput").value;
       var y = document.querySelector("#secondinput").value;
       var z = +x + +y;
       document.querySelector("#result").innerHTML = z;
       }

    var button1= document.querySelector("#Addition")
    button1.addEventListener ("click",result1)

    function result2 () {
       var x = document.querySelector("#firstinput").value;
       var y = document.querySelector("#secondinput").value;
       var z = +x - +y;
       document.querySelector("#result").innerHTML = z;
       }

    var button2= document.querySelector("#Substraction")
    button2.addEventListener ("click",result2)

    function result3 () {
       var x = document.querySelector("#firstinput").value;
       var y = document.querySelector("#secondinput").value;
       var z = +x * +y;
       document.querySelector("#result").innerHTML = z;
       }

    var button3= document.querySelector("#Multiplication")
    button3.addEventListener ("click",result3)

    function result4 () {
       var x = document.querySelector("#firstinput").value;
       var y = document.querySelector("#secondinput").value;
       var z = +x / +y;
       document.querySelector("#result").innerHTML = z;
       }

    var button4= document.querySelector("#Division")
    button4.addEventListener ("click",result4)
