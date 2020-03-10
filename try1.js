javascript: (function() {
  const url = "";
  const time = 2000;
  var panel = document.getElementsByClassName("tv-account-manager__top-panel");
  var tab = panel[0].children[0].children[0].children[0];
  var count = tab.childElementCount - 1;
  clickTabs(count, time, url);
  function clickTabs(i, t, url) {
    var panel = document.getElementsByClassName(
      "tv-account-manager__top-panel"
    );
    var tab = panel[0].children[0].children[0].children[0];
    if (i >= 0) {
      tab.children[i].click();
      setTimeout(function() {
        clickTabs(i - 1, t);
        return;
      }, t);
    } else {
      var data = {};
      var aData = document.getElementsByClassName(
        "tv-account-manager__content"
      );
      for (let i = 0; i < aData[0].childElementCount; i++) {
        let table = aData[0].children[i].getElementsByTagName("table");
        var countTab = tab.children[i].getElementsByClassName("counter__text");
        var key = countTab[0]
          ? countTab[0].textContent
          : tab.children[i].textContent;
        var arr = [];
        for (let j = 0; j < table.length; j++) {
          for (const tr of table[j].rows) {
            let arr2 = [];
            for (const td of tr.cells) {
              arr2.push(td.textContent);
            }
            arr.push(arr2);
          }
        }
        data[key] = arr;
      }
      alert(data["ポジション"][0][0]);
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
      return;
    }
  }
})();
