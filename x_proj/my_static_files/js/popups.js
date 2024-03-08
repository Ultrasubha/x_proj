function togglePopup() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
}

function toggleComment() {
  const overlay = document.getElementById("PostComment");
  overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
}

function toggleOptions(postId) {
  var options = document.getElementById("options_" + postId);
  options.style.display = options.style.display === "flex" ? "none" : "flex";
}

function showEditForm() {
  var editForm = document.getElementById("editForm");
  editForm.style.display =
    editForm.style.display === "none" || editForm.style.display === ""
      ? "block"
      : "none";
}
