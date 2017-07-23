## CUSTOMALERTS
This is a simple script producing a functionality similar to the web-browsers functions of `confirm()` and `alert()`. Using these standard functions might cause problems with them having different behaviours and looks depending on which browser is beeing used. 

![image](https://thumbs.gfycat.com/CaninePepperyGeese-size_restricted.gif)

### How to implement
Just simply append the files `customalerts.css` and `customalerts.js` to your project and refference the in your head. If you do not want to use my styling, you can just skip the `.css`-file and use your own, it will not look good without any styling.

The plugin consist of three methods:

* `CUSTOMALERTS.alert(text, buttontext(optional))` Creates a popup with a button to dismiss it, the text within the button is also customizable but if not mentioned default value will be inuced.
* `CUSTOMALERTS.confirm(text, callback)` Creates a popup with two buttons 'Accept' and 'Cancel', when the buttons are pressed the callbackfunction will be run with an inputparameter either set to true or false depending on which button being pressed.
* `CUSTOMALERTS.notice(text, time)` Creates a popup displaying the text for the amount of time set by the time-parameter. If no time given the method will bi dissmissable by clicking on it.

It is also possible to customise the button-texts default values by assigning these variables:

* `CUSTOMALERT.text.dismiss = 'Ok'; //default: 'Dismiss'`
* `CUSTOMALERT.text.accept = 'Yes'; //default: 'Accept'`
* `CUSTOMALERT.text.cancel = 'Nope'; //default: 'Cancel'`

You can also decide which container the popups should be appended to by assigning this variable:

* `CUSTOMALERT.container = document.getElementById('noticearea'); //default: document.body`