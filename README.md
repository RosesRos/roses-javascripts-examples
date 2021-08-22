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

### **Example:**
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

