function func() {
    var clr = document.getElementById("clr"); 
    document.body.style.backgroundColor = clr.value;
}

  
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

document.getElementById('comand').addEventListener('sendb', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the answer from the input field
    const comand = document.getElementById('comand');
    const pasward = document.getElementById('pasward');

    // Check if the answer is correct
    const cpas = "1234";
    const white = "text white"
    if (pasward === cpas) {
        if (comand === white) {
            document.getElementById('alltext').style.color = "black";
        } else {
            document.getElementById('alltext').style.color = "white";
        }
    } else {
        document.body.className = 'incorrect'; // Change background color to red
    }
});
