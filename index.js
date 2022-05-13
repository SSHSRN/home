// Adding event listener for keyboard events.

function rClick(e) {
    e.preventDefault();
    // Get the toast div
    var x = document.getElementById("toast");
    x.innerHTML ="Right click is disabled...";
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

// Detect Key Shortcuts
document.onkeydown = function (e) {
    if (
        // CMD + Alt + I (Chrome, Firefox, Safari)
        e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
        // CMD + Alt + J (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
        // CMD + Alt + C (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
        // CMD + Shift + C (Chrome)
        e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
        // e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
        // // Ctrl + Shift + J (Chrome, Edge)
        // e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
        // // Ctrl + Shift + C (Chrome, Edge)
        // e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // Ctrl + Shift
        e.ctrlKey == true && e.shiftKey == true ||
        // F12 (Chome, Firefox, Edge)
        e.keyCode == 123 ||
        // CMD + Alt + U, Ctrl + U (Chrome, Firefox, Safari, Edge)
        e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
        e.ctrlKey == true && e.keyCode == 85
    ) {
        // Get the toast div
        var x = document.getElementById("toast");
        x.innerHTML ="You are not authorised to do this...";
    
        // Add the "show" class to DIV
        x.className = "show";
    
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }
};