# Milo Timer
Milo Timer is fully-customizable JavaScript timeout pop-up that detects user inactivity, fires a Bootstrap 4 modal and includes a countdown to redirection.
## What does it do? 
Milo Timer keeps an eye out for user inactivity and uses a Bootstrap modal to kindly ask them if they'd like to continue working or logout. Great way to keep users from walking away from incomplete forms or systems requiring active saving or sensitive information.  

The modal prompts users to confirm they'd like to contiue and features a customizable countdown timer to indicate time remaining. When time runs out, users can be redirected to any page, using '.replace(),' disabling use of the Back button.  A benefit of using a modal to prompt the user, opposed to an `aler()` or `confirm()` is the redirection.  Once the countdown timer reaches zero, the user will be redirected without having to confirm or clear the alert. 
## Demo
See the timer in action.  [View the Demo](https://jlschillinger.github.io/Milo-Timer/example.html)

## What do you need? 
The timer itself requires plain old JavaScript and can be easily used without Bootstrap or JQuery.  As is, basic [Bootstrap installation](https://getbootstrap.com/) is necessary for the modal. 

# How to Install
All you need is `milo-timer.js` and a modal within the HTML of your template or page for the timeout.  Refer to the example pages.

## JS Variables
There are just a few JS variables you'll need to adjust to your needs.  These are all at the top of the JS file.  You will need to specify... 

- Minutes until the warning modal is launched (`timeoutWarningMin`) 
- Mintues until the modal is closed and the user is redirected (`countdownMin`)
- ID of modal (`timeoutModal`)
- ID of `<span>` placeholder for countdown within the modal (`countdownText`)
- URL or page name of redirection location (`redirectLocation`)

# References & Helpful Links
Milo Timer could not have been created without these awesome code resources:
https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm
https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
https://gist.github.com/adhithyan15/4350689

# Bugs, Suggestions, Problems
I'm no expert, so if you have a suggestion or find an issue, please let me know! 
