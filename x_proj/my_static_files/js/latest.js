// Search button clearText functionality

function toggleClearButton() {
    var inputElement = document.getElementById("search");
    var clearButton = document.getElementById("clearButton");
  
    if (inputElement.value.trim() !== "") {
      clearButton.style.display = "block";
      clearButton.style.color = "black";
      clearButton.style.textAlign = "center";
    } else {
      clearButton.style.display = "none";
    }
  }
  
  function clearSearch() {
    var inputElement = document.getElementById("search");
    var clearButton = document.getElementById("clearButton");
  
    inputElement.value = "";
    clearButton.style.display = "none";
  }