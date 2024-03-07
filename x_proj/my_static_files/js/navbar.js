// Logout window show/hide functionality

function toggleLogOut() {
  var logOutDiv = document.querySelector(".logOutSection");
  logOutDiv.style.display =
    logOutDiv.style.display === "none" || logOutDiv.style.display === ""
      ? "block"
      : "none";
}

document.addEventListener("click", function (event) {
  var logOutDiv = document.querySelector(".logOutSection");
  var toggleLogOutAnchor = document.getElementById("toggleLogOutAnchor");

  // Check if the click is outside the anchor element and the logOutSection div
  if (
    event.target !== toggleLogOutAnchor &&
    !toggleLogOutAnchor.contains(event.target) &&
    event.target !== logOutDiv &&
    !logOutDiv.contains(event.target)
  ) {
    logOutDiv.style.display = "none";
  }
});
