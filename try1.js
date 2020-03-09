javascript: (function() {
  var table=document.getElementsByClassName("balances");
  alert(table[0].rows[0].cells[0].children[0].innerText);
  var url = "";
  var data = { aaa: "sss" };
  var xhr = new XMLHttpRequest();
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
})()
