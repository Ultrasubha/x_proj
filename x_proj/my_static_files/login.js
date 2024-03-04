function onAccountCreate() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("newUser").style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideOnAccountCreate() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("newUser").style.display = "none";
  document.body.style.overflow = "auto";
}

function onSignIn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("existingUser").style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideOnSignInWindow() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("existingUser").style.display = "none";
  document.body.style.overflow = "auto";
}

function onPassWordForgotten() {

}