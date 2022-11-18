
        require([ "main" ], function() {});
        /* Check for XFS */
        if (top != self) {
            require(["amd/xfs"], function(XFS) {
                XFS.init();
            });
        }
    