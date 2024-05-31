<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="projecti.js"></script>
    <link rel="stylesheet" href="projecty.css">
</head>
<body>
    <button class="tablink" onclick="openPage('Home', this, 'grey')">Home</button>
<button class="tablink" onclick="openPage('News', this, 'grey')" id="defaultOpen">News</button>
<button class="tablink" onclick="openPage('Contact', this, 'grey')">Contact</button>
<button class="tablink" onclick="openPage('Settings', this, 'grey')">About</button>

<div id="Home" class="tabcontent">
  <h3 id="text">Home</h3>
  <p id="text">Where you will do stuff.</p>
</div>

<div id="News" class="tabcontent">
  <h3 id="text">News</h3>
  <p id="text">Find out what is curently happening.</p> 
</div>

<div id="Contact" class="tabcontent">
  <h3 id="text">Contact</h3>
  <p id="text">See who we are.</p>
</div>

<div id="Settings" class="tabcontent">
  <h3 id="text">Settings</h3>
  <p id="text">Change how you see this site.</p>
    <input type="color" id="clr">
    <button onclick="func()">Change colour</button>
</div>


</body>
</html>
