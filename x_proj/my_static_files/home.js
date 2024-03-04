function modifyUrl() {
  var currentUrl = window.location.href;
  var urlArr = currentUrl.split("/");
  var section = urlArr[urlArr.length - 2];

  if (section === "home") {
    let modifiedUrl = currentUrl + "#tweets";
    console.log(modifiedUrl);
    location.href=modifiedUrl;
  }
}
