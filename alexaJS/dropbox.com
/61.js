
        /* global: ensemble is from ensemble_appshell.js */
        /* global: configureRequire comes from the
            fake_require_snippet (ui/page/script_tags.py) */
        /* global: addRequireLoadCallback comes from init_requirejs.ts */
        /* global: execTiers comes from require_init.ts */
        /* global: requirejs defined by alameda_bundle */
        ensemble.processChunk("dev-tools-pagelet", "done-1", function(){
        ensemble.setupPagelet("dev-tools-pagelet", {"name": "dev_tools__DevTools", "driver": "js_only", "html": "", "stylesheets": []}, false,
            function () { addRequireLoadCallback(function() {
                execTiers(requirejs.config({"context": "3846076f4167b81fa9f68dc464d3bba15aaef21b"}), function () {}, []);
            })},
            "atlas-web-platform-live-prod-sjc-577cf98ccf-5tqkq", "3846076f4167b81fa9f68dc464d3bba15aaef21b"
        )});
        