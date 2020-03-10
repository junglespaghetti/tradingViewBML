javascript: (function() {
  const url = "";
  var data = {};
  var panel = document.getElementsByClassName("tv-account-manager__top-panel");
  var tab = panel[0].children[0].children[0].children[0];
  var table, key;
  var test = "";
  var aData = document.getElementsByClassName("tv-account-manager__content");
  for (let i = 0; i < aData[0].childElementCount; i++) {
    tab.children[1].click();
    setTimeout(function() {
      table = aData[0].children[i].getElementsByTagName("table");
      var countTab = tab.children[i].getElementsByClassName("counter__text");
      if (countTab[0]) {
        key = countTab[0].textContent;
      } else {
        key = tab.children[i].textContent;
      }
      tab.children[i].click();
      var arr1 = [];

      alert(table.length);

      for (let j = 0; j < table.length; j++) {
        for (const tr of table[j].rows) {
          let arr2 = [];
          for (const td of tr.cells) {
            arr2.push(td.textContent);
          }
          arr1.push(arr2);
        }
      }
      alert(arr1.length);
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
    }, 10000);
  }
})();

javascript: (function() {
  const url = "";
  var panel = document.getElementsByClassName("tv-account-manager__top-panel");
  var tab = panel[0].children[0].children[0].children[0];
  var count = tab.childElementCount - 1;
  clickTab(count, 1000,url);
  function clickTab(i, t,url) {
    var panel = document.getElementsByClassName(
      "tv-account-manager__top-panel"
    );
    var tab = panel[0].children[0].children[0].children[0];
    if (i >= 0) {
      tab.children[i].click();
      setTimeout(function() {
        clickTab(i - 1, t);
        return;
      }, t);
    } else {
      alert("aaa");
      return;
    }
  }
})();
