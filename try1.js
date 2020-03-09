javascript: (function() {
  var xhr = new XMLHttpRequest();
  var url = "";
  var data = { aaa: "sss" };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    //  console.log(xhr.status);
    alert("success!");
  };
  xhr.onerror = () => {
    //  console.log(xhr.status);
    alert("error!");
  };
  xhr.send(JSON.stringify(data));
})();
