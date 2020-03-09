// github  user/repo >>> junglespaghetti/tradingViewBML
// https://script.google.com/macros/s/AKfycbx5aUrcK83KHx6H_XvweA6wTDwFPumMvUXOfxdQ9jkwb5mNy0g/exec

javascript: (function() {
   var url = "https://script.google.com/macros/s/AKfycbx5aUrcK83KHx6H_XvweA6wTDwFPumMvUXOfxdQ9jkwb5mNy0g/exec";
   var xhr = new XMLHttpRequest();
  var data = {"test":"word"};
   xhr.open("POST", url);
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.onload = () => {
     alert(xhr.status);
     alert("success!");
   };
   xhr.onerror = () => {
     alert(xhr.status);
     alert("error!");
   };
   xhr.send(JSON.stringify(data));
})()
