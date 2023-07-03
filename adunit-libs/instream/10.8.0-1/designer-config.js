window.designerConfig = {
    componentVersion: 'latest',
    init: function(Expo) {
        Expo.setTempValue("activeMapTab", false);
    },


    /**
     * Default component config
     * Designer can change the props values depending on their requirements
     */
    events: [{
            name: "ctaLogo",
            type: 'click',
            callback: function(Expo, event) {
				Expo.designerAPI.firePixel("ctaLogo",[{"eventName":"clickLive"}]);
                Expo.designerAPI.openUrl("https://www.ihop.com/en/menu/appetizers", "ctaLogo");
                Expo.designerAPI.pause();
            }
        },
			 {
            name: "ctaCustomDesign",
            type: 'click',
            callback: function(Expo, event) {
				Expo.designerAPI.firePixel("ctaCustomDesign",[{"eventName":"clickLive"}]);
                Expo.designerAPI.openUrl("https://www.ihop.com/en/menu/appetizers", "ctaCustomDesign");
                Expo.designerAPI.pause();
            }
        },
			 
        {
            name: "tabVideo",
            type: "click",
            callback: function(Expo, event) {
                    Expo.designerAPI.firePixel("tabVideo",[{"eventName":"intLive", "multi":true}]);
                    Expo.designerAPI.resume();
            }
        },
        {
            name: "tabMenu",
            type: "click",
            callback: function(Expo, event) {
				Expo.designerAPI.pause();
				Expo.designerAPI.firePixel("tabMenu",[{"eventName":"intLive", "multi":true}]);
            }
        },
        {
            name: "tabLocations",
            type: "click",
            callback: function(Expo, event) {
				Expo.designerAPI.pause();
				Expo.designerAPI.firePixel("tabLocations",[{"eventName":"intLive", "multi":true}]);
				if(!Expo.getTempValue("activeMapTab")){
					Expo.setTempValue("activeMapTab", true);
					if(Expo.designerAPI.getDynamicData().rawData || Expo.designerAPI.getDynamicData().rawData === null) {
						var mapDefault = document.querySelector('div[data-expo-event="EXPOEVENT_mapDefault"]');
						mapDefault.style.zIndex = -1;					
					}
					map.generateMap({mapID: "mapA", dynamicData: Expo.designerAPI.getDynamicData().rawData, localData: "json/data.json", defaultImageURL: "images/map_default.jpg", noDataImage: "images/map_default.jpg"});
				}; 
            }
        },
		{
            name: "mapDefault",
            type: 'click',
            callback: function(Expo, event) {
				Expo.designerAPI.firePixel("mapDefault",[{"eventName":"clickLive"}]);
                Expo.designerAPI.openUrl("https://www.ihop.com/en/restaurants?searchQuery=El%20segundo", "mapDefault");
                Expo.designerAPI.pause();
            }
        }
    ],
	
	  /** mainUnitCloseCallback **/
	
    callbacks: {
        mainUnitCloseCallback: function(callback, defaultVideoId) {
            // this is Expo
            this.designerAPI.switchPlayerInTab(defaultVideoId, "videoContainer");
			this.trigger("tabVideo", false);
			this.designerAPI.components.reset();
            callback(); // dont remove this
            arrowPlaylist.resetCarousel(); // dont remove this 
        },

        videoEndedEvent: function(videoId, eventObj) {
            if (videoId == 'video1') {
            } else if (videoId == 'video2') {
            } else if (videoId == 'video3') {
            }
        }
    },


	  /** components code will start from here **/

    components: [{
        name: "arrowPlaylist", // Do not change this value
        props: {
            totalVideo: 1,
            autoPlay: true,
            arrowOpacity: 0.3,
            hideArrowTime: 3000
        },
        events: {
            videoCarouselEndEvent: function(Expo) {
                Expo.designerAPI.pause();
				Expo.trigger('tabMenu', false);

            },
                videoCarouselNext: function(Expo) {
					Expo.designerAPI.firePixel("btnPlaylistNext",[{"eventName":"intLive", "multi":true}]);
					
                },
                videoCarouselPrev: function(Expo) {
					Expo.designerAPI.firePixel("btnPlaylistPrevious",[{"eventName":"intLive", "multi":true}]);
                }
      		}
        },
       {
            name: "map", // Do not change this value
            props: {
                maps: {
                    mapA: {
						mapID: "mapDefault",
						pinType: ["stores"],
						pinValue: ["pin0"],
						twoFingersEnabled: true,
						common: {
							"zoomLevel": 12,
							"zoomControl": false,
							"attributionControl": false
						},
						pin0: [{
							"pop": {
								"popupWidth": 250,
								"popupHeight": 180,
                                "marginFromTop": .004,
								"iconAnchor": [11, 32],
								"minPopupWidth": 100,
								"popupAnchor": [0, -32],
								"tooltip": "visible", //visible,hidden
								"showCloseBtn": true,
								"openPopByDefault": true,
                                "msgString": '<div id="contentPopup" align="center" style="width:' + '100%' + '; height:' + '100%' + ';">' + 'tokenContentMap.label' + " </br> " + 'tokenContentMap.address' + ", " + 'tokenContentMap.city' + ", " + "</br>" + " " + 'tokenContentMap.state' + " " + 'tokenContentMap.zip' + " " + "</br>" + " " + 'tokenContentMap.phone' + " " + '</br><img id=popUpCount style="margin-top: 5px; cursor: pointer;"' + "s" + 'rc="images/popupCtaBtn.png" alt="" height="21" width="100" name="pin0" onclick="window.parent.map.popUpCTA(this)"></div>',
                                "popupCTA": {
                                    "defaultURL": "https://www.ihop.com/en/restaurants?searchQuery=El%20segundo",
                                    "pixelID": "popUpCTAClick",
                                    popUpCTAClick: function (Expo, event) {
                                        Expo.designerAPI.firePixel("popUpCTAClick",[{"eventName":"clickLive"}]);
                                        Expo.designerAPI.pause();
                                    }
                                }
                            },
							"iconSize": "22x32",
							"icon": "images/mapPin1.png",
							"center": true,
							"pinEvents": {
								rollover: function(Expo, mapObject, event) {
									//event.layer.openPopup();
									},
								rollout: function(Expo, mapObject, event) {},
								click: function(Expo, mapObject, event) {}
							}
                        }]
                    }
                }

            }
        }
	  /** next components code will start from here start with "," **/
    ]
}