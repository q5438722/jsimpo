
    function selectTab(evt, tabIndex) {
        var tabContents = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContents.length; i++) {
            if (i !== tabIndex) {
                tabContents[i].className = tabContents[i].className.replace(" active-tab", "");
            }
        }

        var tabIconsRegularWide = document.getElementsByClassName("icon-regular icon--wide-breakpoint");
        for (var i = 0; i < tabIconsRegularWide.length; i++) {
            if (i !== tabIndex) {
                tabIconsRegularWide[i].style.display = "inline-block";
            }
        }
        tabIconsRegularWide[tabIndex].style.display = "none";

        var tabIconsFilledWide = document.getElementsByClassName("icon-filled icon--wide-breakpoint");
        for (var i = 0; i < tabIconsFilledWide.length; i++) {
            if (i !== tabIndex) {
                tabIconsFilledWide[i].style.display = "none";
            }
        }
        tabIconsFilledWide[tabIndex].style.display = "inline-block";

        var tabIconsRegularNarrow = document.getElementsByClassName("icon-regular icon--narrow-breakpoint");
        for (var i = 0; i < tabIconsRegularNarrow.length; i++) {
            if (i !== tabIndex) {
                tabIconsRegularNarrow[i].style.display = "inline-block";
            }
        }
        tabIconsRegularNarrow[tabIndex].style.display = "none";

        var tabIconsFilledNarrow = document.getElementsByClassName("icon-filled icon--narrow-breakpoint");
        for (var i = 0; i < tabIconsFilledNarrow.length; i++) {
            if (i !== tabIndex) {
                tabIconsFilledNarrow[i].style.display = "none";
            }
        }
        tabIconsFilledNarrow[tabIndex].style.display = "inline-block";

        var tabIconsRegularFooter = document.getElementsByClassName("icon-regular--footer");
        for (var i = 0; i < tabIconsRegularFooter.length; i++) {
            if (i !== tabIndex) {
                tabIconsRegularFooter[i].style.display = "inline-block";
            }
        }
        tabIconsRegularFooter[tabIndex].style.display = "none";

        var tabIconsFilledFooter = document.getElementsByClassName("icon-filled--footer");
        for (var i = 0; i < tabIconsFilledFooter.length; i++) {
            if (i !== tabIndex) {
                tabIconsFilledFooter[i].style.display = "none";
            }
        }
        tabIconsFilledFooter[tabIndex].style.display = "inline-block";

        var tabButtons = document.getElementsByClassName("tab-button");
        for (var i = 0; i < tabButtons.length; i++) {
            tabButtons[i].className = tabButtons[i].className.replace(" tab-button--active", "");
        }

        var tabButtonsFooter = document.getElementsByClassName("tab-button--footer");
        for (var i = 0; i < tabButtonsFooter.length; i++) {
            tabButtonsFooter[i].className = tabButtonsFooter[i].className.replace(" tab-button--active", "");
        }

        var shyHeaders = document.getElementsByClassName("shy-header");
        for (var i = 0; i < shyHeaders.length; i++) {
            if (i !== tabIndex) {
                if (shyHeaders[i].className.indexOf("inactive-header") === -1) {
                    shyHeaders[i].className += " inactive-header";
                }
            }
        }

        if (tabContents[tabIndex].className.indexOf("active-tab") === -1) {
            tabContents[tabIndex].className += " active-tab";
        } 
        if (tabContents[tabIndex].className.indexOf("tab-button--active") === -1) {
            tabButtons[tabIndex].className += " tab-button--active";
        }
        if (tabContents[tabIndex].className.indexOf("tab-button--active") === -1) {
            tabButtonsFooter[tabIndex].className += " tab-button--active";
        }
        shyHeaders[tabIndex].className = shyHeaders[tabIndex].className.replace(" inactive-header", "");
    }

    class TabsAutomatic {
        constructor(groupNode) {
            this.tablistNode = groupNode;

            this.tabs = [];

            this.firstTab = null;
            this.lastTab = null;

            this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
            this.tabpanels = [];

            for (var i = 0; i < this.tabs.length; i += 1) {
                var tab = this.tabs[i];
                var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

                tab.tabIndex = -1;
                tab.setAttribute('aria-selected', 'false');
                this.tabpanels.push(tabpanel);

                tab.addEventListener('keydown', this.onKeydown.bind(this));
                tab.addEventListener('click', this.onClick.bind(this));

                if (!this.firstTab) {
                    this.firstTab = tab;
                }
                this.lastTab = tab;
            }

            this.setSelectedTab(this.firstTab, false);
        }

        setSelectedTab(currentTab, setFocus) {
            if (typeof setFocus !== 'boolean') {
                setFocus = true;
            }
            for (var i = 0; i < this.tabs.length; i += 1) {
                var tab = this.tabs[i];
                if (currentTab === tab) {
                    tab.setAttribute('aria-selected', 'true');
                    tab.removeAttribute('tabindex');
                    this.tabpanels[i].classList.remove('is-hidden');
                    if (setFocus) {
                    tab.focus();
                    }
                } else {
                    tab.setAttribute('aria-selected', 'false');
                    tab.tabIndex = -1;
                    this.tabpanels[i].classList.add('is-hidden');
                }
            }
        }

        setSelectedToPreviousTab(currentTab) {
            var index;

            if (currentTab === this.firstTab) {
                this.setSelectedTab(this.lastTab);
            } else {
                index = this.tabs.indexOf(currentTab);
                this.setSelectedTab(this.tabs[index - 1]);
            }
        }

        setSelectedToNextTab(currentTab) {
            var index;

            if (currentTab === this.lastTab) {
                this.setSelectedTab(this.firstTab);
            } else {
                index = this.tabs.indexOf(currentTab);
                this.setSelectedTab(this.tabs[index + 1]);
            }
        }

        /* EVENT HANDLERS */
        onKeydown(event) {
            var tgt = event.currentTarget,
            flag = false;

            switch (event.key) {
            case 'ArrowLeft':
                this.setSelectedToPreviousTab(tgt);
                flag = true;
                break;

            case 'ArrowRight':
                this.setSelectedToNextTab(tgt);
                flag = true;
                break;

            case 'Home':
                this.setSelectedTab(this.firstTab);
                flag = true;
                break;

            case 'End':
                this.setSelectedTab(this.lastTab);
                flag = true;
                break;

            default:
                break;
            }

            if (flag) {
            event.stopPropagation();
            event.preventDefault();
            }
        }

        onClick(event) {
            this.setSelectedTab(event.currentTarget);
        }
    }

    // Initialize tablist
    window.addEventListener('load', function () {
        var tablists = document.querySelectorAll('[role=tablist].automatic');
        for (var i = 0; i < tablists.length; i++) {
            new TabsAutomatic(tablists[i]);
        }
    });

