
    window.addEventListener("load", function() {
        var url = "https://ocsrest.ebay.com/ocsrsapp/o2/inflow/inflowcomponent?input=%7B%22pageId%22%3A2387624%2C%22surveyTitle%22%3A%22%E3%81%94%E6%84%8F%E8%A6%8B%E3%82%92%E3%81%8A%E8%81%9E%E3%81%8B%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%22%2C%22posTop%22%3A504%2C%22isGBHEnabled%22%3Atrue%2C%22gbhSiteId%22%3A224%2C%22gbhLanguage%22%3A%22ja-JP%22%7D&callback=Inflow.cb";
        var scriptTag = document.createElement("script");
        scriptTag.src = url;
        document.body.appendChild(scriptTag);
    });
