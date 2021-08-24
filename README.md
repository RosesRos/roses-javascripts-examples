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