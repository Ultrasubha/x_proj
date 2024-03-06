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