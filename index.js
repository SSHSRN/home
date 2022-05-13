// Prevent Right Click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, true); 

// DevTools Opened Script
function DevToolsOpened() {
    alert("Developer Tools Opened");
}

// Detect DevTools (Chrome/Edge)
var devtools = function() {};
devtools.toString = function() {
    DevToolsOpened();
    return '-';
}

setInterval(()=>{
    console.profile(devtools);
    console.profileEnd(devtools);
    if (console.clear) {
        console.clear();
    }
}, 1000);

// Detect DevTools (FireFox)
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    // Detect Resize (Chrome/Firefox/Edge Works) but (Triggers on Zoom In Chrome and Zoom Out FireFox)
    window.onresize = function() {
        if ((window.outerHeight - window.innerHeight) > 100 || (window.outerWidth - window.innerWidth) > 100) {
            DevToolsOpened();
        }
    }
}

// Detect Fire Bug
if (window.console && window.console.firebug || console.assert(1) === '_firebugIgnore') {
    DevToolsOpened();
};

// Detect Key Shortcuts
window.addEventListener('keydown', function(e) {
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
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
        // Ctrl + Shift + J (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
        // Ctrl + Shift + C (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // F12 (Chome, Firefox, Edge)
        e.keyCode == 123 ||
        // CMD + Alt + U, Ctrl + U (Chrome, Firefox, Safari, Edge)
        e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
        e.ctrlKey == true && e.keyCode == 85
    ) {
        DevToolsOpened();
    }
});