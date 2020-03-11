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
      var name = document.getElementsByClassName("js-bottom-trading-tab");
      var data = {};
      data["name"] = name[0].textContent;
      data["date"] = new Date();
      var shortDate = `${data["date"].getFullYear()}-${data["date"].getMonth() +
        1}-${data["date"].getDate()}`.replace(/\n|\r/g, "");
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
      data["p-summary"] = [];
      data["p-summary"][0] = ["Date"];
      data["p-summary"][1] = [new Date()];
      var sData = document.getElementsByClassName(
        "tv-account-manager__summary"
      );
      for (let i = 0; i < sData[0].childElementCount; i++) {
        let val = sData[0].children[i].getElementsByClassName(
          "tv-account-manager__text"
        );
        data["p-summary"][0].push(val[0].textContent);
        val = sData[0].children[i].getElementsByClassName(
          "tv-account-manager__data"
        );
        data["p-summary"][1].push(val[0].textContent);
      }
      var blob = new Blob([JSON.stringify(data)], { type: "text/plain" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = shortDate + "_" + data["name"] + ".json";
      link.click();
      return;
    }
  }
})();
