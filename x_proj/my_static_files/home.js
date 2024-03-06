function modifyUrl() {
  let sectionRoutes = [
    "#tweets",
    "#Explore",
    "#Notifications",
    "#Messages",
    "#Grok",
    "#Lists",
    "#Communities",
    "#Premium",
    "#Profile",
    "#More",
    "#Logout",
  ];
  let currentUrl = window.location.href;
  let urlArr = currentUrl.split("/");
  let section = urlArr[urlArr.length - 2];
  let trailing = urlArr[urlArr.length - 1];
  
  if (section === "home" && trailing=="") {
    let modifiedUrl = currentUrl + "#tweets";
    location.href=modifiedUrl;
  }

  // if ((trailing[0] == "#") && (!sectionRoutes.includes(trailing))) {
  //   let coreIp = urlArr.slice(0, urlArr.length - 2).join('');
  //   location.href = coreIp + "/home/#tweets"
  // }
}

function toggleLogOut() {
  var logOutDiv = document.querySelector('.logOutSection');
  logOutDiv.style.display = (logOutDiv.style.display === 'none' || logOutDiv.style.display === '') ? 'block' : 'none';
}

document.addEventListener('click', function (event) {
  var logOutDiv = document.querySelector('.logOutSection');
  var anchorElement = document.querySelector('.onlyFlex');

  // Check if the click is outside the anchor element and the logOutSection div
  if (event.target !== anchorElement && !anchorElement.contains(event.target) && event.target !== logOutDiv && !logOutDiv.contains(event.target)) {
      logOutDiv.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var inputElement = document.getElementById("mesg");

  inputElement.addEventListener("click", function () {
    document.getElementById("whoCanReply").style.display = "block";
  });
});

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
        mediaContainer.innerHTML = "";
        mediaContainer.appendChild(mediaElement);
        mediaContainer.style.display = "block";
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}
