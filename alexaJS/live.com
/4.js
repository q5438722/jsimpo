
        var originalSendOrScheduleEvent = awa.vortexEvents.SendOrScheduleEvent;
        awa.vortexEvents.SendOrScheduleEvent = (event, isCriticalEvent) => {
            if (event && event.name == "Ms.Webi.PageAction") {
                if (event.data && event.data.baseData && event.data.baseData.destUri) {
                    event.data.baseData.destUri = awa.sanitizeUrl(event.data.baseData.destUri);
                }
            }
            originalSendOrScheduleEvent(event, isCriticalEvent);
        };

        var config = {
                autoCapture: {
                    lineage: true
                },
                coreData: {
                    appId: "OutlookCom"
                },
                urlCollectQuery: false,
                urlCollectHash: false,
                endpoint: "https://web.vortex-extended.data.microsoft.com/collect/v1"
            };
        awa.init(config);
    