// version 2.3
var vdxDynamicComposition = (function() {
    "use strict";

    var divElementThumb,
        defaultimplemented,
        customThumb,
        numOfThumb,
        DAPI,
        totalThumb,
        thumbnailContainer,
        thumbWidth,
        designerObj = {},
        dataArray,
        legalBtnPop,
        offerText = 0,
        defaultNoOffers,
        defaultNoZip,
        ctaPixelText = ["LEASE", "APR", "CUSTOMER CASH", "CUSTOMER BONUS CASH"],
        ctaPixelID,
        activeContainer,
        defaultPixelID,
        elemTitleHeight,
        elemTitleStyle,
        elemOfferCTATop,
        elem_title,
        noLeaseOffer = false,
        elem_offerCTA,
        legalBtn,
        isFormatted = false,
        dynamicObj;

    function triggerCTA(URL, divText, defaults, offerPosition) {
        findOffers(divText, offerPosition);
        if (ctaPixelID === "default")
            ctaPixelID = defaults;
        if (ctaPixelID === undefined) {
            ctaPixelID = "offerLEASE_see_offers_CTA";
        };
        if (defaults === "no_offers_CTA" || defaults === "no_feed_CTA") {
            ctaPixelID = defaults;
        }
        DAPI.firePixel(ctaPixelID, [{
            "eventName": "clickLive"
        }]);
        DAPI.openUrl(URL, ctaPixelID);
        //console.info(ctaPixelID)
    };

    function findOffers(divText, offerPosition) {
        var offerPosition = offerPosition,
            totalObjects;
            if(dynamicObj.listing) totalObjects =  Object.keys(dynamicObj.listing);

        if (defaultimplemented) {
            ctaPixelID = "default";
            return;
        }

        if (dynamicObj.common.offerSequence) {
            if (dynamicObj.listing.lease && dynamicObj.listing.purchase) var arr = dynamicObj.listing[totalObjects[0]].concat(dynamicObj.listing[totalObjects[1]]);
            if (!dynamicObj.listing[totalObjects[0]]) var arr = dynamicObj.listing[totalObjects[1]];
            if (!dynamicObj.listing[totalObjects[1]]) var arr = dynamicObj.listing[totalObjects[0]];

            for (var i = 0; i < arr.length; i++) {
            var offerDivText = document.createElement("p");
            offerDivText.innerHTML = arr[i].description;
            var descriptionOfferText = document.createElement("p");
            descriptionOfferText.innerHTML = arr[i].offer;
                if (descriptionOfferText.innerHTML === divText ||  offerDivText.innerHTML  === divText) {
                    var currentValue = arr[i].type.toUpperCase();
                    ctaPixelID = "offer" + currentValue + "_see_offers_CTA";
                    //console.info(i, "match found", i, currentValue)
                }

            }

        }

    };

    VdxDynamicComposition.prototype.findActiveContainer = function() {
        var setTimerForIntLive = setTimeout(function() {
            activeContainer = getDiv("VDXC_dynamicCompo_Container", "comp-Id", "querySelectorAll");
            [].forEach.call(activeContainer, function(currentValue, index, arr) {
                if (currentValue.classList.contains("wp-panel-active")) {
                    var activeOffer = currentValue["querySelector"]("div[" + "comp-Id" + "*='" + "VDXC_dynamicCompo_offers" + "'" + ']');
                    findOffers(activeOffer.childNodes[2].innerHTML, index);
                    if (ctaPixelID === "default") {
                        ctaPixelID = defaultPixelID;
                    } else {
                        ctaPixelID = ctaPixelID != undefined ? ctaPixelID.split("_see_offers_CTA")[0] : undefined;
                    };
                    if (ctaPixelID === undefined) {
                        if (!noLeaseOffer)
                            ctaPixelID = "offerLEASE";
                        if (noLeaseOffer)
                            ctaPixelID = "offerAPR";
                    };
                    DAPI.firePixel(ctaPixelID, [{
                        "eventName": "intLive",
                        "multi": true
                    }]);
                    clearTimeout("setTimerForIntLive");
                    return activeOffer;
                };
            });
        }, 1000);
    };

    function legalClick(num, state, divText) {
        if (state != "none") {
            findOffers(divText, num);
            ctaPixelID = ctaPixelID.split("_see_offers_CTA")[0] + "_legal";
            if (ctaPixelID === undefined) {
                ctaPixelID = "offerLEASE_legal";
            };
            DAPI.firePixel(ctaPixelID, [{
                "eventName": "intLive",
                "multi": true
            }]);
        };
        legalBtnPop[num].style.display = state;
    };

    function autoSizeText(elements, maxFontOffers, offerHeight, lineHeight) {
        var el,
            _i,
            _len,
            _results,
            elNewFontSize,
            textNode;
        _results = [];
        el = elements;
        textNode = el.childNodes[2] != undefined ? el.childNodes[2] : el;
        textNode.style.height = offerHeight //parseInt(offerHeight)+2+"px";
        var divHeight = parseInt(offerHeight),
            divLineHeight = 0;
        el.style.fontSize = maxFontOffers;
        _results.push((function(el) {
            var resizeText,
                _results1;
            resizeText = function() {
                elNewFontSize;
                elNewFontSize = (parseInt(el.style['font-size'].slice(0, -2)) - 1) + 'px';
                return el.style['font-size'] = elNewFontSize;
            };
            _results1 = [];
            resizeText();
            if (textNode.scrollHeight > divHeight) {
                divLineHeight = Math.floor((textNode.scrollHeight - divHeight) / parseInt(lineHeight))
                if (divLineHeight < 1) {
                    divLineHeight = (divLineHeight + 1) * parseInt(lineHeight);
                } else {
                    divLineHeight = divLineHeight * parseInt(lineHeight);
                }

            }
            while ((textNode.scrollHeight) > divHeight) {
                if (parseInt(elNewFontSize) === parseInt(designerObj.minFont)) {
                    el.style.overflow = "hidden";
                    return;
                }
                _results1.push(resizeText());
            }
            el.style.overflow = "hidden";
            return _results1;
        })(el));
        return parseInt(elNewFontSize);
    };

    function changeTextCasing(txt, offerText, position, offerType) {
        var elem = getDiv("VDXC_dynamicCompo_description", "comp-Id", "querySelectorAll")[position];
        if (txt.childNodes[0])
            var noTextOffer = txt.childNodes[0].textContent === " content " ? true : false;
        if (noTextOffer && offerType != "lease") {
            offerText.style['text-transform'] = "uppercase";
            var offerTextLineHeight = window.getComputedStyle(offerText, "").lineHeight.indexOf('px') === -1 ? parseInt(designerObj.actualtitleLineHeight) - 2 : parseInt(window.getComputedStyle(offerText, "").lineHeight);
            var lineHeightDiff = parseInt(designerObj.actualtitleLineHeight) - offerTextLineHeight;
            offerText.style.top = -(parseInt(designerObj.titleTextHeight) - parseInt(designerObj.gapBetweenTextField) + lineHeightDiff) + "px";
            offerText.style['font-size'] = designerObj.titleFont;
            offerText.style['line-height'] = designerObj.actualtitleLineHeight;
            offerText.style['font-weight'] = 100;
            offerText.style['letter-spacing'] = "0.5px";
            elem.childNodes[2].innerHTML = "";
            document.addEventListener('DOMContentLoaded', function() {
                if (document.readyState == 'complete') {
                    offerText.style["overflow"] = "visible";
                    autoSizeText(offerText, designerObj.titleFont, designerObj.offerHeight, designerObj.offerLineHeight);
                }
            }, false);
        } else {
            if (!noLeaseOffer && offerType === "lease") {
                offerText.childNodes[2].innerHTML = elem.childNodes[2].innerHTML;
                elem.childNodes[2].innerHTML = "";
                if (offerText.childNodes[2].innerHTML === "") {
                    // elem_title.innerHTML = "";
                }
                if (offerText.childNodes[2].innerHTML != "") {
                    offerText.style['font-size'] = window.getComputedStyle(offerText, "").fontSize;

                    // if(offerText.getAttribute('comp-id') === "VDXC_dynamicCompo_offers") designerObj.offerHeight = parseInt(designerObj.offerHeight) +2+"px";
                    document.addEventListener('DOMContentLoaded', function() {
                        if (document.readyState == 'complete') {
                            offerText.style["overflow"] = "visible";
                            autoSizeText(offerText, designerObj.maxFontOffers, designerObj.offerHeight, designerObj.offerLineHeight);
                        }
                        var fontInterval = setInterval(function() {
                            if (!isMobile() || assetsMuseDirPath()) clearInterval(fontInterval);
                            if (CM.model.getCurrentEvent() === "loadcomplete") {
                                offerText.style["overflow"] = "visible";
                                autoSizeText(offerText, designerObj.maxFontOffers, designerObj.offerHeight, designerObj.offerLineHeight);
                                clearInterval(fontInterval);
                            }
                        }, 100);
                    }, false);
                    var interval = setInterval(function() {
                        if (txt.scrollHeight > 0) {
                            clearInterval(interval);
                        }
                        var titleFont = autoSizeText(txt, designerObj.titleFont, designerObj.titleTextHeight, designerObj.titleLineHeight);
                        if (!isFormatted) {
                            isFormatted = true;
                            if (getTextWidth(txt.innerHTML, titleFont + "pt __Mazda Type_5") < 300) {
                                if (designerObj.changeTextPosition) {
                                    offerText.style.marginTop = parseInt((parseInt(window.getComputedStyle(offerText, "").marginTop) - designerObj.titleLineDifference)) + "px";
                                }
                                if (designerObj.changeCTAPosition) {
                                    if (elem_offerCTA[0]) elem_offerCTA[0].style.marginTop = parseInt(parseInt(window.getComputedStyle(elem_offerCTA[0], "").marginTop) - (designerObj.titleLineDifference - designerObj.increaseHeightTitle)) + "px";
                                    if (elem_offerCTA[1]) elem_offerCTA[1].style.marginTop = parseInt(parseInt(window.getComputedStyle(elem_offerCTA[1], "").marginTop) - (designerObj.titleLineDifference - designerObj.increaseHeightTitle)) + "px";
                                    if (elem_offerCTA[2]) elem_offerCTA[2].style.marginTop = parseInt(parseInt(window.getComputedStyle(elem_offerCTA[2], "").marginTop) - (designerObj.titleLineDifference - designerObj.increaseHeightTitle)) + "px";
                                }
                                if (designerObj.changeLegalPosition) {
                                    if (legalBtn[0]) legalBtn[0].style.marginTop = parseInt(window.getComputedStyle(legalBtn[0], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";
                                    if (legalBtn[1]) legalBtn[1].style.marginTop = parseInt(window.getComputedStyle(legalBtn[1], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";
                                    if (legalBtn[2]) legalBtn[2].style.marginTop = parseInt(window.getComputedStyle(legalBtn[2], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";

                                    if (legalBtnPop[0]) legalBtnPop[0].style.marginTop = parseInt(window.getComputedStyle(legalBtnPop[0], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";
                                    if (legalBtnPop[1]) legalBtnPop[1].style.marginTop = parseInt(window.getComputedStyle(legalBtnPop[1], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";
                                    if (legalBtnPop[2]) legalBtnPop[2].style.marginTop = parseInt(window.getComputedStyle(legalBtnPop[2], "").marginTop) + designerObj.increaseHeightTitle + "px" + "px";
                                }

                            }
                        }

                    }, 500);
                }
            } else {
                elem_title.innerHTML = "";
                offerText.style['text-transform'] = "uppercase";
                offerText.style.top = -(parseInt(designerObj.titleTextHeight) - parseInt(designerObj.gapBetweenTextField)) + "px";
                offerText.style['font-size'] = designerObj.titleFont;
                offerText.style['font-weight'] = 100;
                offerText.style['letter-spacing'] = "0.5px";
                elem.childNodes[2].innerHTML = "";
                document.addEventListener('DOMContentLoaded', function() {
                    if (document.readyState == 'complete') {
                        offerText.style["overflow"] = "visible";
                        autoSizeText(offerText, designerObj.titleFont, designerObj.offerHeight, designerObj.offerLineHeight);
                    }

                }, false);
            }
        }
    }

    function getTextWidth(text, font) {
        // re-use canvas object for better performance
        var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
    };

    function shuffleOffers(dynamicData) {
        var offerPosition = dynamicObj["common"].offerSequence === undefined ? ["apr", "cash", "lease"] : dynamicObj["common"].offerSequence,
            dummyArray = [];
        for (var i = 0; i < offerPosition.length; i++) {
            for (var j = 0; j < dynamicData.length; j++) {
                if (dynamicData[j].type === offerPosition[i]) {
                    dummyArray.push(dynamicData[j]);
                }
            }
        }
        dataArray = dummyArray;
    }

    VdxDynamicComposition.prototype.renderData = function() {
        var obj = designerObj.designResponse,
            countCta = 0,
            offerDiv, elem_carImg, legalPopWrapperDiv, legalBtnClose

        elem_offerCTA = getDiv("VDXC_dynamicCompo_offerCTA", "comp-Id", "querySelectorAll");
        legalBtnPop = getDiv("VDXC_dynamicCompo_popLegal", "comp-Id", "querySelectorAll");
        offerDiv = getDiv("VDXC_dynamicCompo_Container", "comp-Id", "querySelector");
        legalBtn = getDiv("VDXC_dynamicCompo_btnlegal", "comp-Id", "querySelectorAll");
        elem_carImg = getDiv("VDXC_dynamicCompo_carImg", "comp-Id", "querySelectorAll");
        legalPopWrapperDiv = getDiv("VDXC_dynamicCompo_wrapperLegal", "comp-Id", "querySelectorAll");
        legalBtnClose = getDiv("VDXC_dynamicCompo_closeBtn", "comp-Id", "querySelectorAll");
        elem_title = getDiv("VDXC_dynamicCompo_title", "comp-Id", "querySelectorAll");



        if (!CM.sandBox.sniffer.isIE()) {
            var mutationObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    for (var s = 0; s < legalBtnPop.length; s++) {
                        legalBtnPop[s].style.display = "none";
                    };
                });
            });

            mutationObserver.observe(offerDiv, {
                attributeOldValue: true
            });
        };


        if (this.renderText === undefined) {
            shuffleOffers(dataArray);

            for (var i = 0; i < legalBtnPop.length; i++) {
                legalPopWrapperDiv[i].classList.add("popUpWrapper");
                legalPopWrapperDiv[i].style.height = designerObj.legalPopHeight;
                legalBtnPop[i].style.display = "none";
                legalBtnClose[i].addEventListener('click', legalClick.bind(this, i, "none"));
                legalBtnClose[i].style.cursor = "pointer";
                legalBtn[i].style.cursor = "pointer";
            }
        }
        var dynamicData = dataArray;
        if (dynamicData) {
            for (var i in obj) {
                var elem = getDiv(obj[i].id, "comp-Id", "querySelectorAll");
                for (var j = 0; j < elem.length; j++) {

                    if (obj[i].type == "text") {

                        if (dynamicData[j] && this.renderText === undefined) {
                            elem[j].childNodes[2].innerHTML = dynamicData[j][obj[i].tokenMap];

                        }

                        if (obj[i].id == "VDXC_dynamicCompo_offers") {
                            if (dynamicData[j].type === "lease" && this.renderText === undefined) {
                                elem_title = elem_title[j]
                                elemTitleHeight = elem_title.offsetHeight;
                                elemTitleStyle = getComputedStyle(elem_title, null);
                                elem_title.style.letterSpacing = ".5px";
                                elem_title.style.fontWeight = 100;
                                elem_title.innerHTML = (dynamicData[j].trimName != undefined || dynamicData[j].trimName != "") ? dynamicData[j].trimName : dynamicObj["common"].modelName;

                            }
                            if (this.renderText) elem_carImg[j].style.background = "transparent url('" + dynamicData[j].imgURL + "') no-repeat center center";
                            elem_carImg[j].style.backgroundSize = "contain";
                            if (this.renderText === undefined) {
                                if (elem[j].childNodes[2].innerHTML == "") {
                                    offerText++;
                                }
                                elem_offerCTA[j].addEventListener('click', triggerCTA.bind(null, dynamicObj["common"].cta, elem[j].childNodes[2].innerHTML, "", j));
                                legalBtn[j].addEventListener('click', legalClick.bind(this, j, "block", elem[j].childNodes[2].innerHTML));
                                changeTextCasing(getDiv("VDXC_dynamicCompo_title", "comp-Id", "querySelectorAll")[j], elem[j], j, dynamicData[j].type);
                            }
                        }
                        if (obj[i].id == "VDXC_dynamicCompo_description" && this.renderText === undefined) {
                            if (elem[j].childNodes[2].innerHTML != "") {
                                legalPopWrapperDiv[j].style.height = designerObj.legalPopHeight;
                                legalBtnPop[j].addEventListener('click', function(event) {
                                    event.stopImmediatePropagation();
                                });
                            } else {
                                if (designerObj.ctaFloating) {
                                    elem_offerCTA[j].style.top = -(parseInt(designerObj.wrapperHeight)) + "px";
                                }

                            }
                        }
                    };
                    if (obj[i].type == "cta" && this.renderText === undefined) {
                        elem[j].addEventListener('click', triggerCTA.bind(null, obj[i].intPixelID, dynamicData[j][obj[i].tokenMapURL], countCta, ""));
                    };
                };
            };

            if (dynamicData.length === offerText && this.renderText === undefined) {
                implementDefaultScreen(defaultNoOffers, "", "no_offers_CTA");
            };
        };
    };

    function implementDefaultScreen(divID, div, defaults) {
        defaultimplemented = true;
        if (!div) {
            defaultPixelID = defaults.split("_CTA")[0];
        };
        divID.style.display = "block";
        divID.style.opacity = 1;
        if (dynamicObj["common"]) divID.addEventListener('click', triggerCTA.bind(null, dynamicObj["common"].cta, div, defaults, "defaultOffer"));
    };

    function addStyle() {
        // console.log('****** add style ******');
        if (customThumb) {
            for (var i = 0; i < customThumb.length; i++) {
                if (isMobile() && !assetsMuseDirPath())
                    customThumb[i].style.width = "100%";
                if (customThumb[i - 1] == undefined) {
                    customThumb[i].style['margin-left'] = 0 + designerObj.thumbWidth + designerObj.thumbGap + "px";
                    if (isMobile() && !assetsMuseDirPath())
                        customThumb[i].style['display'] = "inline";
                    if (isMobile() && !assetsMuseDirPath())
                        customThumb[i].style['float'] = "left";
                } else {
                    customThumb[i].style['margin-left'] = parseInt(customThumb[i - 1].style['margin-left']) + designerObj.thumbWidth + designerObj.thumbGap + "px";
                };

            };
        };
    }

    function assetsMuseDirPath() {
        var museURL = CM.model.adConfig.museUrl;
        if (museURL.match(/mainunit_/ig)) {
            return true;
        } else {
            return false;
        }
    }

    function isMobile() {
        if (CM.sandBox.sniffer.deviceInfo.deviceType === "mobile" || isMobileDemoPage()) {
            return true;
        } else {
            return false;
        };
    };

    function isMobileDemoPage() {
        if (CM.sandBox.sniffer.deviceInfo.deviceType === "desktop" && CM.sandBox.sniffer.deviceInfo.name === "samsung tablet" && CM.model.adConfig.e9.saleskit === 1) {
            return true;
        } else {
            return false;
        };
    };

    function createDivs(parentDiv) {
        var divElementContainer = getDiv("VDXC_dynamicCompo_Container", "comp-Id", "querySelector"),
            intialContainer = getDiv("VDXC_dynamicCompo_Gallery", "comp-Id", "querySelector"),
            placementOfWidjet;
        for (var i = 0; i < parentDiv.childElementCount; i++) {
            if (parentDiv.children[i].classList.item(0) == "PamphletWidget") {
                placementOfWidjet = i
            }
        }

        if (parentDiv.children[placementOfWidjet].childNodes[4].classList) {
            /// add thumb
            if (parentDiv.children[placementOfWidjet].childNodes[4].childNodes[0].classList.contains("ThumbGroup")) {
                thumbnailContainer = parentDiv.children[placementOfWidjet].childNodes[4].childNodes[0];
                for (var k = 0; k < numOfThumb; k++) {
                    var divMain = document.createElement('div');
                    divMain.classList.add("popup_anchor");
                    divMain.id = "uCustomThumbPopup" + k;

                    var divMainChild = document.createElement('div');
                    divMainChild.classList.add("Thumb", "popup_element");
                    divMainChild.id = divElementThumb.id;
                    divMainChild.setAttribute("comp-Id", "VDXC_dynamicCompo_thumb");
                    divMain.appendChild(divMainChild);
                    divMain.addEventListener('click', vdxDynCompo.findActiveContainer);
                    parentDiv.children[placementOfWidjet].childNodes[4].childNodes[0].appendChild(divMain);
                };
            };
            /// add container
            if (parentDiv.children[placementOfWidjet].childNodes[2].classList.contains("popup_anchor")) {
                for (var m = 0; m < parentDiv.children[placementOfWidjet].childNodes[2].children.length; m++) {
                    if (parentDiv.children[placementOfWidjet].childNodes[2].children[0].classList) {
                        if (parentDiv.children[placementOfWidjet].childNodes[2].children[0].classList.contains("ContainerGroup")) {
                            for (var k = 0; k < numOfThumb; k++) {
                                var divMain = document.createElement('div');
                                divMain.classList.add("Container", "invi", "grpelem");
                                divMain.id = divElementContainer.id;
                                divMain.innerHTML = divElementContainer.innerHTML;
                                divMain.setAttribute("comp-Id", "VDXC_dynamicCompo_Container");
                                parentDiv.children[placementOfWidjet].childNodes[2].children[0].appendChild(divMain);
                            };
                        };
                    };
                };

                if (divMain) {
                    if (divMain.offsetWidth <= 0) {
                        divMain.style.width = "100%";
                    };
                };
                vdxDynCompo.renderData(divMain);
            };
        };
        if (numOfThumb === 0)
            hideDisplay(thumbnailContainer);
        customThumb = getDiv("uCustomThumbPopup", "id", "querySelectorAll");
        addStyle();
    };

    function createThumb() {
        //  console.log('****** creating thumbnails ******');
        var divForThumb = document.createElement("div");
        divElementThumb.parentNode.parentNode.parentNode.insertBefore(divForThumb, divElementThumb.parentNode.parentNode);
        divForThumb.appendChild(divElementThumb.parentNode.parentNode);
        if (!isMobile() || assetsMuseDirPath())
            divForThumb.style.position = "absolute";
        var mainContainer = getDiv(designerObj.galleryID, "comp-Id", "querySelector");
        createDivs(mainContainer);
    };

    function readExternalFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            };
        };
        rawFile.send(null);
    };

    function generateDataArray(dynamicObj) {
       // if (designerObj.dynamicDataSequence === "0") {
            implementDefaultScreen(defaultNoZip, "", "no_feed_CTA");
			//implementDefaultScreen(defaultNoOffers, "", "no_offers_CTA");
            return;
        //};
		
		
		
        dataArray = new Array();
        if (dynamicObj["listing"]) {
            if (dynamicObj["listing"]["lease"] === undefined || (dynamicObj["listing"]["lease"][0].description === "")) {
                noLeaseOffer = true;
            }
            for (var i = 0; i < designerObj.galleryType.length; i++) {
                if (dynamicObj["listing"][designerObj.galleryType[i]]) {
                    if (dynamicObj["listing"] != undefined) {
                        for (var j = 0; j < dynamicObj["listing"][designerObj.galleryType[i]].length; j++) {
                            if (designerObj.galleryType[i] != "lease") {
                                //dynamicObj["listing"][designerObj.galleryType[i]][j].trimName = "";
                                if (dynamicObj["listing"][designerObj.galleryType[i]][j].offer === "") {
                                    dynamicObj["listing"][designerObj.galleryType[i]].splice(j, 1);
                                }
                            } else {
                                if (dynamicObj["listing"][designerObj.galleryType[i]][j].description === "" && dynamicObj["listing"][designerObj.galleryType[i]][j].offer === "") {
                                    dynamicObj["listing"][designerObj.galleryType[i]].splice(j, 1);
                                    break;
                                }
                                if (dynamicObj["listing"][designerObj.galleryType[i]][j].description === "" && dynamicObj["listing"][designerObj.galleryType[i]][j].offer != "") {
                                    dynamicObj["listing"][designerObj.galleryType[i]][j].offer = dynamicObj["listing"][designerObj.galleryType[0]][0].trimName != undefined || dynamicObj["listing"][designerObj.galleryType[0]][0].trimName != "" ? dynamicObj["listing"][designerObj.galleryType[0]][0].trimName : dynamicObj["common"].modelName;

                                }
                            }
                        }
                    }
                }
            };

            for (var obj in dynamicObj["listing"]) {
                if (dynamicObj["listing"][obj]) {
                    dataArray = dataArray.concat(dynamicObj["listing"][obj]);
                };
            }

            /*            for (var ii = 0; ii < designerObj.galleryType.length; ii++) {
                            if (dynamicObj["listing"][designerObj.galleryType[ii]]) {
                                dataArray = dataArray.concat(dynamicObj["listing"][designerObj.galleryType[ii]]);
                            };
                        };*/

            numOfThumb = dataArray.length - 1;
            totalThumb = numOfThumb + 1;
            if (numOfThumb === 0) {
                var nextArrow = getDiv("EXPOEVENT_GalleryNext", "data-expo-event", "querySelector"),
                    prevArrow = getDiv("EXPOEVENT_GalleryBack", "data-expo-event", "querySelector");
                hideDisplay(nextArrow);
                hideDisplay(prevArrow);
            }
            createThumb();
        } else {
            implementDefaultScreen(defaultNoOffers, "", "no_offers_CTA");
        }

    };

    function renderJson(filePath) {
        // console.log('****** render Json file ******');
        readExternalFile(filePath, function(text) {
            var data = JSON.parse(text);
            dynamicObj = data;
            generateDataArray(dynamicObj);

        });
    };

    function init() {
        // checking if dynamic obj is available else use local json
        if (typeof(designerObj.dynamicData) == 'undefined' || designerObj.dynamicData == "") {
            renderJson(designerObj.jsonPath);
        } else {
            dynamicObj = designerObj.dynamicData
            generateDataArray(dynamicObj);
        };
    };

    function getDiv(elem, attributeName, method) {
        var parentTree = document;
        var divElements,
            attributes = [attributeName, 'data-title', 'title', 'data-expo-event'];
        [].forEach.call(attributes, function(currentValue, index, arr) {
            if (!divElements || divElements.length === 0) {
                divElements = parentTree[method]("div.breakpoint.active div[" + currentValue + "*='" + elem + "'" + ']');
            };
            if (!divElements || divElements.length === 0) {
                divElements = parentTree[method]("div[" + currentValue + "*='" + elem + "'" + ']');
            };
            if (divElements)
                if (divElements.length)
                    return true;
        });
        return divElements;
    };

    function showDisplay(element) {
        element.style.display = "block";
    }

    function hideDisplay(element) {
        element.style.display = "none";
    }

    function setTitles(attributeName, titleInitial) {
        var titleDiv = document.querySelectorAll("div[title*='" + titleInitial + "'" + ']');
        if (titleDiv.length > 0) {
            for (var i = 0; i < titleDiv.length; i++) {
                titleDiv[i].setAttribute(attributeName, titleDiv[i].getAttribute('title'));
                titleDiv[i].setAttribute("title", "");
            };
            return true;
        };
        return false;
    };

    function VdxDynamicComposition() {};

    VdxDynamicComposition.prototype.renderDynamicGallery = function(galID, dataObj, designData) {
        if (setTitles("comp-Id", "VDXC_dynamicCompo")) {
            designerObj = designData;
            designerObj.galleryID = galID;
            designerObj.designResponse = dataObj;

            DAPI = EXPO_CREATIVE.require("designerAPI");
            divElementThumb = getDiv("VDXC_dynamicCompo_thumb", "comp-Id", "querySelector");
            defaultNoOffers = getDiv("VDXC_dynamicCompo_defaultNoOffers", "comp-Id", "querySelector");
            defaultNoZip = getDiv("VDXC_dynamicCompo_defaultNoZip", "comp-Id", "querySelector");
            defaultNoOffers.style.display = "none";
            defaultNoZip.style.display = "none";
            divElementThumb.addEventListener('click', vdxDynCompo.findActiveContainer);
            // designerObj.offerHeight = parseInt(designerObj.offerHeight) +2+"px";
            init();
            //console.info("version: 2.3");
        };
    };

    return VdxDynamicComposition;
})();

var vdxDynCompo = new vdxDynamicComposition();