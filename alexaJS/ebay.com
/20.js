
            const noScriptElements = document.querySelectorAll("noscript[aria-hidden=false]");
            noScriptElements.forEach(function(a) {a.getAttribute("aria-hidden") === "false" ? a.setAttribute("aria-hidden", "true") : null});
        