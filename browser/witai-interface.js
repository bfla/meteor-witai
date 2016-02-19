// This code is mostly copied from here, with minor alterations: 
// https://wit.ai/docs/web/0.7.0/quickstart
Template.witaiInterface.rendered = funcion() {
  var mic = new Wit.Microphone(document.getElementById("witai-interface"));

  var info = function (msg) {
    document.getElementById("info").innerHTML = msg;
  };

  var error = function (msg) {
    document.getElementById("error").innerHTML = msg;
  };

  mic.onready = function () {
    info("Microphone is ready to record");
  };

  mic.onaudiostart = function () {
    info("Recording started");
    error("");
  };

  mic.onaudioend = function () {
    info("Recording stopped, processing started");
  };

  mic.onresult = function (intent, entities) {
    var r = kv("intent", intent);

    for (var k in entities) {
      var e = entities[k];

      if (!(e instanceof Array)) {
        r += kv(k, e.value);
      } else {
        for (var i = 0; i < e.length; i++) {
          r += kv(k, e[i].value);
        }
      }
    }

    document.getElementById("result").innerHTML = r;
  };

  mic.onerror = function (err) {
    error("Error: " + err);
  };

  mic.onconnecting = function () {
    info("Microphone is connecting");
  };

  mic.ondisconnected = function () {
    info("Microphone is not connected");
  };

  mic.connect(Meteor.settings.services.witai.publicToken);
  // mic.start();
  // mic.stop();

  function kv (k, v) {
    if (toString.call(v) !== "[object String]") {
      v = JSON.stringify(v);
    }
    return k + "=" + v + "\n";
  }
}
