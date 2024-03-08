function onAccountCreate() {
  document.body.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("newUser").style.display = "block";
}

function hideOnAccountCreate() {
  document.body.style.overflow = "auto";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("newUser").style.display = "none";
}

function onSignIn() {
  document.body.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("existingUser").style.display = "block";
}

function hideOnSignInWindow() {
  document.body.style.overflow = "auto";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("existingUser").style.display = "none";
}

function onPassWordForgotten() {

}