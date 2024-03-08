// Post Privacy functionality

document.addEventListener("DOMContentLoaded", function () {
  var inputElement = document.querySelector("#postCreate");
  var postLabelsElement = document.querySelector("#postLabelPanel");

  inputElement.addEventListener("click", function () {
    document.getElementById("whoCanReply").style.display = "block";
    postLabelsElement.style.borderTop = "1px solid rgb(64, 64, 64)";
  });
});

// Text area increase height functionality

document.addEventListener("input", function (e) {
  if (e.target.tagName.toLowerCase() === "textarea") {
    autoResizeTextarea(e.target);
  }
});

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

// Media display while posting and closing or editing functionality

function displayMedia() {
  var input = document.getElementById("media");
  var mediaContainer = document.getElementById("mediaContainer");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var mediaType = input.files[0].type.split("/")[0];
      var mediaElement;

      if (mediaType === "image") {
        mediaElement = document.createElement("img");
        mediaElement.src = e.target.result;
        mediaElement.alt = "Uploaded Image";
      } else if (mediaType === "video") {
        mediaElement = document.createElement("video");
        mediaElement.src = e.target.result;
        mediaElement.controls = true;
        mediaElement.innerText = "Your browser does not support the video tag.";
      }

      if (mediaElement) {
        mediaElement.style.width = "100%";
        mediaElement.style.height = "auto";
        mediaElement.style.borderRadius = "10px"; // Adjust the radius as needed
        mediaElement.style.maxHeight = "50vh"; // Display only 50% of the height
        mediaElement.style.objectFit = "cover"; // Ensure aspect ratio is maintained
        mediaElement.style.overflowY = "auto"; // Enable vertical scroll if needed

        mediaContainer.innerHTML = "";
        mediaContainer.appendChild(mediaElement);
        mediaContainer.style.display = "block";

        // Create edit button
        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        applyButtonStyles(editButton);
        editButton.style.left = "10px";
        editButton.addEventListener("click", function () {
          // Add your edit functionality here
          console.log("Edit button clicked");
        });
        mediaContainer.appendChild(editButton);

        // Create close button
        var closeButton = document.createElement("button");
        closeButton.innerHTML = "&#x2715;";
        applyButtonStyles(closeButton);
        closeButton.style.right = "10px";
        closeButton.addEventListener("click", function () {
          mediaContainer.style.display = "none";
        });
        mediaContainer.appendChild(closeButton);
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function applyButtonStyles(button) {
  button.style.position = "absolute";
  button.style.top = "10px";
  button.style.padding = "0.75rem";
  button.style.width = "fit-content";
  button.style.border = "none";
  button.style.borderRadius = "10rem";
  button.style.cursor = "pointer";
  button.style.transition = "background-color 0.3s ease";
  button.style.backgroundColor = "rgba(10, 10, 10, 0.7)";
  button.style.color = "#fff";

  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "rgba(60, 60, 60, 0.4)";
  });

  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "rgba(32, 32, 32, 0.7)";
  });
}

function postComment(){
  document.body.style.overflow = "hidden";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("postCommentWindow").style.display = "block";
}

function cancelpostComment(){
  document.body.style.overflow = "auto";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("postCommentWindow").style.display = "none";
}