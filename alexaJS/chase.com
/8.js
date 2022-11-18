
        <!--Disabling PAGE LOAD event of reporting.js. As report event is called explicitly from dynamic page creation. Hence avoiding duplication.-->
        document.addEventListener('DOMContentLoaded', function(event){CHASE.analytics.disablePageLevelReporting();});
    