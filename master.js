//This code is for the Setcookie display 
document.addEventListener('DOMContentLoaded', function(){
  if(document.cookie != 0) {
    incrementCookie();
  }
  else {
    setCookie();
  }
});

// we are going to use the DOM manipulation here in the script
function incrementCookie() {
  var cookieFeatch = document.cookie.split("=");
  console.log(cookieFeatch);
  var visitCount = Number(cookieFeatch[1]);
  visitCount += 1;
  var lastDate = new Date();
  document.cookie = 'counter='+visitCount + '=' + 'lastVisit=' + lastDate.toDateString() + "=" + lastDate.toTimeString();
  document.getElementById('printCounter').innerHTML = "You have visited " + visitCount + " number of times";
  document.getElementById('printLastVisit').innerHTML = "You last visited on " + cookieFeatch[3] + " at " + cookieFeatch[4];

};

function setCookie() {
  var visitCount = 1;
  var lastDate = new Date();
  var expTime = lastDate + 1000*36000;
  document.cookie = "counter="+ visitCount + "=" + "lastVisit=" + lastDate.toDateString() + "=" + lastDate.toTimeString();
  document.getElementById('printCounter').innerHTML = "You have never visited before";
  document.getElementById('printLastVisit').innerHTML = "This is your first time";
};
