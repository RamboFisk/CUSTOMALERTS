//CUSTOMALERTS 2017
//ludwigfriborg

var CUSTOMALERT = {};
CUSTOMALERT.container = document.body;
CUSTOMALERT.text = {
  dismiss: 'Dismiss',
  accept: 'Accept',
  cancel: 'Cancel',
};

newWindow = function () {
  var w = document.createElement('DIV');

  w.className = 'ca_bg';

  w.frame = document.createElement('DIV');
  w.description = document.createElement('P');
  w.append(w.frame);
  w.frame.append(w.description);

  return w;
}

CUSTOMALERT.alert = function (text, buttonText) {
  var nW = newWindow();

  nW.description.innerHTML = text;
  nW.frame.className += 'ca_box ca_alert';

  var dismissButton = document.createElement('BUTTON');
  dismissButton.className += ' ca_button';
  dismissButton.innerHTML = buttonText ? buttonText : CUSTOMALERT.text.dismiss;

  var buttonarea = document.createElement('DIV');
  buttonarea.className = 'ca_buttonarea';

  buttonarea.append(dismissButton);
  nW.frame.append(buttonarea);

  dismissButton.onclick = function () { nW.remove(); }

  CUSTOMALERT.container.append(nW);
  dismissButton.focus();
}

CUSTOMALERT.confirm = function (text, callback) {
  var nW = newWindow();

  nW.description.innerHTML = text;
  nW.frame.className += 'ca_box ca_confirm';

  var trueButton = document.createElement('BUTTON');
  trueButton.className += ' ca_button';
  trueButton.innerHTML = CUSTOMALERT.text.accept;

  var falseButton = document.createElement('BUTTON');
  falseButton.className += ' ca_button';
  falseButton.innerHTML = CUSTOMALERT.text.cancel;

  var buttonarea = document.createElement('DIV');
  buttonarea.className = 'ca_buttonarea';

  buttonarea.append(trueButton);
  buttonarea.append(falseButton);

  nW.frame.append(buttonarea);

  trueButton.onclick = function () { 
    nW.remove(); 
    callback(true);
  }

  falseButton.onclick = function () { 
    nW.remove(); 
    callback(false);
  }

  CUSTOMALERT.container.append(nW);
  falseButton.focus();
}

CUSTOMALERT.notice = function (text, timed) {
  var nW = newWindow();

  nW.description.innerHTML = text;
  nW.frame.className += 'ca_box ca_notice';

  if (timed) {
    setTimeout(function(){ nW.remove(); }, timed); 
  } else {
    nW.onclick = function () { 
      this.remove();
    }
  }

  CUSTOMALERT.container.append(nW);
}
