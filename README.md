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
<button class="tablink" onclick="openPage('Settings', this, 'grey')">Settings</button>

<div id="Home" class="tabcontent">
  <h3 id="text">Home</h3>
  <p id="text">Where you will do stuff.</p>
    <p id='alltext'>this text will change</p>
    <input id="comand" type="text">
    <input id="pasward" type="text">
    <button type="submit">submit</button>
</div>

<div id="News" class="tabcontent">
  <h3 id="text">News</h3>
  <p id="text">Find out what is curently happening.</p> 
    <div id="second" class="Newsthings">
        <p>I am working on this website, trying to use java script for the first time.</p>
    </div>
    <div id="first" class="Newsthings">
        <p>For a school project in grade 8 I made a website.</p>
        <p>You can visir my school project on <a href="https://thecreativeepjh.github.io/water/">water polution</a></p>
    </div>
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
