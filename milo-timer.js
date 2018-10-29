/*
 * Milo Timer
 * A fully-customizable Javascript timeout warning that detects user inactivity, fires a Bootstrap 4 modal and runs a countdown to redirection.
 *
 * MIT License
 *  Created by Jessica Schillinger : www.jessica.schillinger.us
 *  Fork it: https://github.com/jlschillinger/milo-timer.js
 */

// Minutes for Timeout & Countdown
var timeoutWarningMin = 18; // Minutes until user is warned of pending timeout
var countdownMin = 2; // Minutes for countdown within modal 

//Convert minutes into seconds
var timeoutWarningSec = timeoutWarningMin * 60;
var countdownSec = countdownMin * 60;

var timeoutModal = document.getElementById("sessionTimeoutModal"); // ID of modal within HTML
var redirectLocation = '/Default'; // Redirection location

// Watch user activity
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}
setup();

function startTimer() {
    //Run Inactive Soon
    timeoutID = window.setTimeout(goInactive, timeoutWarningSec*1000);
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}

function goInactive() {
    //Show the modal
    timeoutModal.classList.add("show");
    timeoutModal.setAttribute("style", "display:block");
    //Start the second countdown, then redirect
    timeoutID = window.setTimeout(sessionRedirect, countdownSec * 1000);
    //Show the countdown in the modal
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes;
        function tick() {
            var counter = document.getElementById("countdownTimerText"); // Timer Text 
            var current_minutes = mins - 1;
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    }
    countdown(countdownMin);
}
// Restart the session when user chooses to continue their session
function closeModal() { 
    //Close the modal
    timeoutModal.classList.remove("show");
    timeoutModal.setAttribute("style", "display:none");
    //Reset the timer
    window.clearTimeout(timeoutID);
    //Go back to Active
    goActive();
}

function goActive() {
    startTimer();
}

function sessionRedirect() {
   window.location.replace(redirectLocation);
}
