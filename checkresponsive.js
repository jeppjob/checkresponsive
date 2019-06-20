let input = document.getElementById("srcUrl");
input.addEventListener("keyup", function(e){
  if(e.keyCode === 13){
    checkUrl();
  }
})
function checkUrl() {
  let newUrl = document.getElementById("srcUrl").value;
  let iframe = document.getElementById("iframe");

  // validate URL
  function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  // If URL format is incorrect
  if (is_url(newUrl) == false) {
    alert("Please enter a correct URL format! Example is https://google.com");
    newUrl = "http://example.com"
  } 

  // If URL doesn't have protocols, add automatically
  if (newUrl.includes("https://") || newUrl.includes("http://")) {
    iframe.src = newUrl;
  } else {
    newUrl = "https://" + newUrl;
    iframe.src = newUrl;
  }
  iframe.style.width = "100%";
  iframe.style.transform = "scale(1)";
}

function mobileWidth() {
  let mobile = true;
  if (mobile == true) {
    iframe.style.width = "320px";
    iframe.style.height = "550px";
    iframe.style.transform = "scale(1)";
    mobile = !mobile;
  }
}
function tabletWidth() {
  let tablet = true;
  if (tablet == true) {
    iframe.style.width = "768px";
    iframe.style.height = "1024px";
    iframe.style.transform = "scale(.8)";
    tablet = !tablet;
  }
}
