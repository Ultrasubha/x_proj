function modifyUrl() {
  let sectionRoutes = ["#tweets", "#Explore","#Notifications","#Messages",
  "#Grok","#Lists","#Communities","#Premium","#Profile","#More","#Logout"];
  let currentUrl = window.location.href;
  console.log(currentUrl);
  let urlArr = currentUrl.split("/");
  let section = urlArr[urlArr.length - 2];
  let trailing = urlArr[urlArr.length - 1];

  if (section === "home" && trailing=="") {
    let modifiedUrl = currentUrl + "#tweets";
    location.href=modifiedUrl;
  }
}

// if(trailing[0]=="#"){
//   if(!sectionRoutes.includes(trailing)){
//     location.href = "http://localhost:8000/home/#tweets"
//   } 
// }