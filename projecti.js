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

function input_out() {
    let comandin = document.getElementById('comand');
    let comand = comandin.value;
    let paswardin = document.getElementById('pasward');
    let pasward = paswardin.value;
    window.alert(pasward);
    // Check if the answer is correct
    const cpas = "1234";
    const white = "text white";
    if (pasward === cpas) {
        window.alert('hi');
        if (comand === white) {
            document.getElementById('alltext').style.color = "black";
        } else {
            document.getElementById('alltext').style.color = "white";
        }
    } else {
        document.body.className = 'incorrect'; // Change background color to red
    }
    }
}
