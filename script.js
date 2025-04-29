let captchChecked = false;

function beforesubmit(event) {
  if (captchChecked) {
    let output = document.querySelector(".outputdate");
    let input = document.querySelector(".inputdate");
    console.log("inputdata :", input.value);

    let formattedDate = new Date(input.value).toLocaleDateString("en-IN");
    output.value = formattedDate;
  }else{
    alert("Please Check the reCAPTCHA box");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchsuccess() {
  captchChecked = true;
}
