javascript: (function() {
  const url = "";
  const time = 500;
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
      var tabTitle = document.getElementsByClassName("js-bottom-trading-tab");
      data["name"] = tabTitle[0].textContent;
      data["date"] = new Date();
      data["from"] = "tradingview";
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
      var pData = document.getElementsByClassName(
        "tv-account-manager__summary"
      );
      data["p-summary"] = [];
      data["p-summary"][0] = ["Date"];
      data["p-summary"][1] = [new Date()];
      for (let i = 0; i < pData[0].childElementCount; i++) {
        var val = pData[0].children[i].getElementsByClassName(
          "tv-account-manager__text"
        );
        data["p-summary"][0].push(val[0].textContent);
        val = pData[0].children[i].getElementsByClassName(
          "tv-account-manager__data"
        );
        data["p-summary"][1].push(val[0].textContent);
      }
      alert(data["p-summary"][0][2]);
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
