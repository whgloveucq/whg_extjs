
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DOM 基础 </title>
<script type="text/javascript" src="dombasic.js"></script>
</head>
<body>
<div id="myDiv">
<p>p 标签1</p>

</div>
<p>p 标签2</p>
<button onclick="findDiv()">访问DIV标签</button>
</body>
</html>
function findDiv()
{
var div=documen.getElementById('myDiv');
alert(div);

}