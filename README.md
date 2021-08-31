<img alt="Night Coding" src="https://giffiles.alphacoders.com/842/8426.gif" width="250px" align="right"/>

You can find and get examples with code source on these repositories 👀

[![facesar](https://img.shields.io/badge/facesar-click%20here-blue?style=for-the-badge&logo=github)](https://facesar.github.io/)

[![python_codes](https://img.shields.io/badge/python_codes-click%20here-blue?style=for-the-badge&logo=python)](https://facesar.github.io/python_codes/)

[![machine-learning](https://img.shields.io/badge/machine_learning-click%20here-blue?style=for-the-badge&logo=python)](https://facesar.github.io/machine-learning-codes/)

[![php_codes](https://img.shields.io/badge/php_codes-click%20here-blue?style=for-the-badge&logo=php)](https://facesar.github.io/php-source-codes/)


# JavaScript ![JavaScript](https://img.shields.io/badge/--0E2447?style=for-the-badge&logo=javascript&logocolor=6E8177)


**JavaScript** is the world's most popular programming language.

**JavaScript** is the programming language of the Web.

## JavaScript Can Change HTML Content
One of many JavaScript HTML methods is **getElementById()**

## The ```<script>``` Tag
In HTML, JavaScript code is inserted between ```<script>``` and ```</script>``` tags.

### **Example:**
```sh
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```
## External JavaScript
Scripts can also be placed in external files:

### **External file: myScript.js**
```sh
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```
- External scripts are practical when the same code is used in many different web pages.
- JavaScript files have the file extension .js.
- To use an external script, put the name of the script file in the ```src``` (source) attribute of a ```<script>``` tag:

### **Example:**
```sh
<script src="myScript.js"></script>
```

# External JavaScript Advantages
## Placing scripts in external files has some advantages:

> ✨It separates HTML and code
> 
> ✨ It makes HTML and JavaScript easier to read and maintain
> 
> ✨ Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:

### **Example:**
```sh
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

# JavaScript Output

## JavaScript can "_display_" data in different ways:
> <p>Writing into an HTML element, using <strong style="color:#C77474">  innerHTML</strong>.</p>
> 
> <p>Writing into the HTML output using <strong style="color:#C77474">  document.write()</strong>.</p>
> 
> <p>Writing into an alert box, using <strong style="color:#C77474">  window.alert()</strong>.</p>
> 
> <p>Writing into the browser console, using <strong style="color:#C77474">  console.log().</strong>.</p>

#

# Using innerHTML
<p>To access an HTML element, JavaScript can use the <strong style="color:#C77474">  document.getElementById(id)</strong> method.</p>

# **Example-1:**
### JavaScript Multiplication Table
<p><strong style="color:#C77474">File called calc.js</strong></p>

```sh
var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");

if (rows == "" || rows == null)
    rows = 10;
if (cols == "" || cols == null)
    cols == 10;

createTable(rows, cols);
function createTable(rows, cols) {
    var j = 1;
    var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
    for (i = 1; i <= rows; i++) {
        output = output + "<tr>";
        while (j <= cols) {
            output = output + "<td>" + i * j + "</td>";
            j = j + 1;
        }
        output = output + "</tr>";
        j = 1;
    }
    output = output + "</table>";
    document.getElementById("demo").innerHTML = output;
}
```
<p><strong style="color:#C77474">File called index.html</strong></p>

```sh
<html>
<head>
  <title>Multiplication Table</title>
  
</head>
<body>

    <div class="conatiner text-center">
        <h1>Multiplication Table</h1>
        <p class="text-center" id="demo"></p>
    </div>

<script src="calc.js"></script>  
</body>
</html>
```  
[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/javascript/index.html)

# **example-2:**

### Create a sample form program that collects the first name, last name, email, user id, password and confirms password from the user. All the inputs are mandatory and email address entered should be in correct format. Also, the values entered in the password and confirm password textboxes should be the same. After validating using JavaScript, In output display proper error messages in red color just next to the textbox where there is an error.

<p><strong style="color:#C77474">javascript code in the file called <em>main.js</em></strong></p>


```sh
var divs = new Array();
divs[0] = "errFirst";
divs[1] = "errLast";
divs[2] = "errEmail";
divs[3] = "errUid";
divs[4] = "errPassword";
divs[5] = "errConfirm";
function validate() {
    var inputs = new Array;
    inputs[0] = document.getElementById('first').value;
    inputs[1] = document.getElementById('last').value;
    inputs[2] = document.getElementById('email').value;
    inputs[3] = document.getElementById('uid').value;
    inputs[4] = document.getElementById('password').value;
    inputs[5] = document.getElementById('confirm').value;
    var errors = new Array();
    errors[0] = "<span style='color:red'>Please enter your first name!</span>";
    errors[1] = "<span style='color:red'>Please enter your last name!</span>";
    errors[2] = "<span style='color:red'>Please enter your email!</span>";
    errors[3] = "<span style='color:red'>Please enter your user id!</span>";
    errors[4] = "<span style='color:red'>Please enter your password!</span>";
    errors[5] = "<span style='color:red'>Please confirm your password!</span>";
    for (i in inputs) {
        var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
           document.getElementById('div').innerHTML = errMessage;
        else if (i == 2) {
            var atpos = inputs[i].indexOf("@");
            var dotpos = inputs[i].lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
            document.getElementById("errEmail").innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
            else docuemnt.getElementById("div").innerHTML = "OK!";
        } else if (i == 5) {
            var first = document.getElementById("password").value;
            var second = document.getElementById("confirm").value;
            if (second != first)
               document.getElementById("errConfirm").innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
            else document.getElementById("div").innerHTML = "OK!";
        } else document.getElementById("div").innerHTML = "OK!";
    }
}
function finalValidate() {
    var count = 0;
    for (i = 0; i < 6; i++) {
        var div = divs[i];
        if (document.getElementById("div").innerHTML == "OK!") count = count + 1;
    }
    if (count == 6)
       document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
}
```
<p><strong style="color:#C77474">HTML CODE</strong></p>

```sh
<body>

    <table id="table1">
        <tr>
            <td>First Name:</td>
            <td><input type="text" id="first" onkeyup="validate();" /></td>
            <td>
                <div id="errFirst"></div>
            </td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><input type="text" id="last" onkeyup="validate();" /></td>
            <td>
                <div id="errLast"></div>
            </td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="text" id="email" onkeyup="validate();" /></td>
            <td>
                <div id="errEmail"></div>
            </td>
        </tr>
        <tr>
            <td>User Id:</td>
            <td><input type="text" id="uid" onkeyup="validate();" /></td>
            <td>
                <div id="errUid"></div>
            </td>
        </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" id="password" onkeyup="validate();" /></td>
            <td>
                <div id="errPassword"></div>
            </td>
        </tr>
        <tr>
            <td>Confirm Password:</td>
            <td><input type="password" id="confirm" onkeyup="validate();" /></td>
            <td>
                <div id="errConfirm"></div>
            </td>
        </tr>
        <tr>
            <td><input class="btn" type="button" id="create" value="Create" onclick="validate();finalValidate();" /></td>
            <td>
                <div id="errFinal"></div>
            </td>
        </tr>
    </table>

<script src="main.js"></script>
</body>
```
[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/form_js/demo.html)

# **example-3:**

### Display a simple message "Welcome!!!" on your demo webpage and when the user hovers over the message, a popup should be displayed with a message "Welcome to my WebPage!!!".

<p><strong style="color:#C77474">javascript code, css code, html code</strong></p>

```sh
<html>
<head>
<title>Event!!!</title>

<script type="text/javascript">
    
    function trigger() {
        document.getElmentById("hover").addEventListener("mouseover", "popup");

        function popup(){
            alert("Welcome to my page!!!");
        }
    }

</script>

<style>
    
    p {
        font-size: 50px;
        position: fixed;
        left: 550px;
        top: 300px;
    }

</style>
</head>
<body onload="trigger();">
  
  <p id="hover">Welcome!!!</p>

</body>
</html>
```

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/form_js/demo1.html)

# **example-4:**
## Counter-App

## Key concepts covered:
- document.querySelector()
- addEventListener()
- textContent()

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/counter_app/project_files/demo.html)

# **Example-4:**

## Background Color Change App
In this app, the background color of the canvas changes when the user clicks on a button.

<h2 style="color:#C77474">Key concepts covered :</h2>

- eventListener()
- Array
- Math.random()

### HTML file demo.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript Color Changing App</title>

</head>
<body>
    <div id="canvas">
        <h1>my background color will changed when my button below is clicked.</h1>
    </div>

    <button id="button">Click me!</button>

<script src="app.js"></script>
</body>
</html>
```
### Javascript code

```sh
#select colors
let colors = ["red", "blue", "yellow", "orange", "skyblue", "green", "yellowgreen", "purple", "black", "gray"]

# change the background of canvas when button is clicked

let button = document.getElementById('button');

button.addEventListener('click', function() {
    # select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    #grab the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})
```

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/Background_App/demo.html)

# **Example-5:**

## Calculator

The main objective of this project is to perform the basic functionality ```(+,-,*,/)``` of the calculator.

<h2 style="color:#C77474">Key concepts covered :</h2>

- DOM Manipulation
- document.querySelector()
- addEventListener()
- Immediately Invoked Function Expressions
- textContent

### HTML file demo.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript_Calculator-code</title>

</head>
<body>
    <main>
        <div class="main">
            <div class="container1">
                <h1>A simple calculator</h1>
                <div class="about">
                    <div class="about_btn">
                        <a href="#" id="howWorkBtn" class="about_btn_link">How do it work?</a>
                    </div>
                    <div>
                        <ul id="operationsList" class="list">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>

<script src="app.js"></script>
</body>
</html>
```

### Javascript code
```sh
let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operation"),
    decimalBtn = document.getElementById("decimal"),
    clearBtns = document.querySelectorAll(".clear_btn"),
    resultBtn = document.getElementById("result"),
    howWorkBtn = document.getElementById("howWorkBtn"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "",
    operationsList = document.getElementById("operationsList");

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click" function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearbtn.addEventListener("click", function (e) {
        clear(e.srcElement.id);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener("click", function (e) {
        operation(e.target.textContent);
    });
};
```

you can find complete code [here](https://github.com/facesar/roses-javascripts-examples/tree/master/javascript_calculator)

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/javascript_calculator/demo.html)

# **Example-6:**

## Image Slider Project

The main functionality of this project is that , when an arrow is clicked, the next image in the array shows up.

<h2 style="color:#C77474">Key concepts covered :</h2>

- DOM Manipulation
- Arrays
- forEach()
- eventListeners
- JavaScript CSS Manipulation

### HTML file demo.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image_Slider_Project</title>

</head>
<body>

<div class="container">
         <div class="row max-height align-items-center">
             <div class="col-9 col-md-10 mx-auto img-container">
                <button class="btn btn-left"><i class="fas fa-caret-left"></i></button>
                <button class="btn btn-right"><i class="fas fa-caret-right"></i></button>
             </div>
         </div>
     </div>

<script src="script.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<!--jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>
```

### Javascript code
```sh
(function() {
    const pictures = ["count1", "count2", "count3", "count4", "count5"];

    #Select both left and right button. addEventListener
    const buttons = document.querySelectorAll(".btn")
    const imageDiv = document.querySelector(".img-container")
    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length -1
                }
                imageDiv.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
            }
            if (button.classlist.contains('btn-right')) {
                counter++
                if (counter > pictures.length -1) {
                    counter = 0
                }
                imageDiv.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
            }
        })
    })
})();
```

You can find complete code [here](https://github.com/facesar/roses-javascripts-examples/tree/master/image_slider)

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)](https://facesar.github.io/roses-javascripts-examples/image_slider/demo.html)

# **Example-7:**

## Digital Clock

The main objective of this project is to build a digital clock with date(Day, Month, Year).

<h2 style="color:#C77474">Key concepts covered :</h2>

- setTimeInterval()
- Date()
- Arrays
- innerHTML

### HTML file demo.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image_Slider_Project</title>

</head>
<body>

    <div id="dayIntro">
        <p id="dayName"></p>
    </div>

    <div class="container">
        <!--display time-->
        <div class="dispClock">
            <div id="time"></div>
        </div>
    </div>

<script src="script.js"></script>
</body>
</html>
```

### Javascript code
```sh
setInterval(currentTime, 1000);

function currentTime() {
    let time = new Date();
    let nameDay = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
}
```

you can find complete code [here]()

[![TRY IT YOURSELF](https://img.shields.io/static/v1?label=&message=TRY-IT-YOURSELF&color=<COLOR>)]()
