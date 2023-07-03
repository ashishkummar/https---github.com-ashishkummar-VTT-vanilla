console.log("VTT for VDX.TV");
let vidfile = "";
let pxl = "";
let desiConfUrl = "";
let _activeTabIDBG = "vdxVTTtool";
let _devPaneIsOpen = false;
let isClickLiveNotSent = true;
let _testMode = "noinstream";
let instVers = [
  "3.4.3-2",
  "7.9.4-0",
  "7.10.1-0",
  "10.8.0-1",
  "10.6.2-0",
  "10.9.1-0",
  "10.9.0-2",
  "10.9.3-0",
  "10.9.4-0",
  "10.9.2-0",
  "10.10.0-0",
  "10.10.3-0",
  "10.10.5-0",
  "10.11.0-3",
  "10.11.1-0",
  "10.11.2-0",
  "10.11.3-0",
  "10.12.0-4",
  "10.12.1-0",
  "10.12.1-1",
  "13.1.2-1",
  "13.1.3-0",
  "13.1.4-0",
  "13.1.5-0",
  "13.0.0-8",
  "13.2.0-0",
  "13.2.1-0",
  "13.2.1-2",
];
let campSpeciCHk1 = "false";
let rollBackBtnCHK = "false";
let mazdaSpecCHK = false;
let mazdaOfferCHK = false;
let locProdJson = "";
let locDesiConfJs = "";

//RightClick Context menu vars starts
let _singleAdURL = "";
var _VdxConnectInstream = [];
var _VdxConnectDesktopExpandable = [];
var _VdxConnectDesktopInframe = [];
var _VdxConnectMobileExpandable = [];
var _VdxConnectMobileInframe = [];
var _mobileInstream = [];
var _desktopInstream = [];
var _CTV = [];

var _fetchCheck = true;
var pubjsVers = ["7.8.0-1", "7.9.0-1"];

var aceDesiConfData = ""; //Ace
var _isAceOpen = false;
var _isThisSingleExecution = false;

//Right click Context manus
var showForPages = ["https://creative.vdx.tv/", "*://vdx.tv/*"];
var parent = chrome.contextMenus.create({ title: "VDX Viewer" });
var child4 = chrome.contextMenus.create({
  title: "Custom VDX View",
  parentId: parent,
  onclick: chrome.contextMenus.onClicked.addListener(OnRightClickMenu),
});
//
var isVideoNotInspected = true;
var isDemoPageInfoLoaded = false;
var _creative_request_id = "";
var _currentLoadedUnitSize = "";
var _isAdUnitMoreIfoGot = false;

function resetVarsNmore() {
  _fetchCheck = true;
  __adFormat = null;
  __mediaDataID = null;
  _isAdUnitMoreIfoGot = false;
}

function resetMidVars() {
  _VdxConnectDesktopExpandable = [
    { mockid: 0 },
    { etid: "" },
    { ad_size: "" },
    { type: "VdxConnectDesktopExpandable" },
  ];
  _VdxConnectDesktopInframe = []; //[{"mockid":0}, {"etid":""},{"type":"VdxConnectDesktopInframe"}];
  _VdxConnectInstream = [
    { mockid: 0 },
    { etid: "" },
    { type: "VdxConnectInstream" },
  ];
  _VdxConnectMobileExpandable = [
    { mockid: 0 },
    { etid: "" },
    { type: "VdxConnectMobileExpandable" },
  ];
  _VdxConnectMobileInframe = [
    { mockid: 0 },
    { etid: "" },
    { type: "VdxConnectMobileInframe" },
  ];
  _mobileInstream = [{ mockid: 0 }, { etid: "" }, { type: "mobileInstream" }];
  _desktopInstream = [{ mockid: 0 }, { etid: "" }, { type: "desktopInstream" }];
  _CTV = [{ mockid: 0 }, { etid: "" }, { type: "ctv" }];
}
// end of Right Click Context Menu vars

// CHROME API on header
chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    //CLICKLIVE
    if (details.url.indexOf("clickLive") != -1 && details.statusCode == 200) {
      console.log("clickLive ", details.url);

      if (getParameterByName("custom4", details.url).indexOf("id:") != -1) {
        notifyDevtools({
          pixel: {
            clickLive: getParameterByName("custom4", details.url),
            SE: true,
          },
        });
      } else {
        console.log("~~~~~~~ ", getParameterByName("custom1", details.url));

        notifyDevtools({
          pixel: {
            clickLive: getParameterByName("custom1", details.url),
            SE: true,
          },
        });
      }
    }

    //INTLIVE
    if (details.url.indexOf("intLive") != -1 && details.statusCode == 200) {
      if (getParameterByName("custom4", details.url).indexOf("id:") != -1) {
        console.info("SE");
        notifyDevtools({
          pixel: {
            intLive: getParameterByName("custom4", details.url),
            SE: true,
          },
        });
      } else {
        console.info("NON SE");
        notifyDevtools({
          pixel: {
            intLive: getParameterByName("custom1", details.url),
            SE: false,
          },
        });
      }
    }

    //PCLIVE
    if (details.url.indexOf("pcLive") != -1 && details.statusCode == 200) {
      if (getParameterByName("event", details.url) != null) {
        notifyDevtools({
          video: {
            video: getParameterByName("custom1", details.url),
            pxl: getParameterByName("event", details.url),
          },
        });
      }
    }
    // end of pixels

    ///-----------
    //fetch image info details
    // knowImage(details);

    // fetch video info	details
    if (
      details.url.indexOf(".mp4") != -1 ||
      details.url.indexOf(".m4s") != -1
    ) {
      knowVideoSize(details);
    }
    ////
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// End of onHeadersReceived ..........................
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Start of onBeforeRequest

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Handling INSTREAM units to let not exit on cta fire...
    if (_devPaneIsOpen) {
      let _nameJSurl = "";
      let _creativeJSurl = "";
      instVers.map(function (num, index, arr) {
        if (details.url.indexOf(num) != -1) {
          if (details.url.indexOf("/js/creative.js") != -1) {
            let _from =
              "://cdnx-mock.tribalfusion.com/media/common/richmedia/html5/" +
              arr[index] +
              "/js/creative.js";
            let _to =
              "://creative.exponential.com/creative/devshowcase/VTT/instream/" +
              arr[index] +
              "/creative.js";
            if (details.url.indexOf("creative.html?namejs") != -1) {
              _testMode = "instream";
              _nameJSurl = details.url.split(_from).join(_to);
            }
            //
            _creativeJSurl = details.url.split(_from).join(_to);
          } else if (
            details.url.indexOf("/js/creative_languageupdate.js") != -1
          ) {
            let _from =
              "://cdnx-mock.tribalfusion.com/media/common/richmedia/html5/" +
              arr[index] +
              "/js/creative_languageupdate.js";
            let _to =
              "://creative.exponential.com/creative/devshowcase/VTT/instream/" +
              arr[index] +
              "/creative_languageupdate.js";
            if (details.url.indexOf("creative.html?namejs") != -1) {
              _testMode = "instream";
              _nameJSurl = details.url.split(_from).join(_to);
            }
            //
            _creativeJSurl = details.url.split(_from).join(_to);
          }
        }
      }); //

      if (_nameJSurl != "") {
        return { redirectUrl: _nameJSurl };
      }

      if (_creativeJSurl != "") {
        return { redirectUrl: _creativeJSurl };
      }
    }

    // End of handling INSTREAM ***

    // Fetch the designer-config file. map desi config file //////////////////////

    if (details.url.indexOf("designer-config.js") != -1) {
      if (details.url.indexOf("designerConfig=") != -1) {
        return;
      }

      notifyDevtools({
        jsfile: {
          desi: details.url,
          wpn: window.webPageNature,
          devPo: _devPaneIsOpen,
        },
      });

      console.info(
        "_isAceOpen ",
        _isAceOpen,
        " | aceDesiConfData ",
        aceDesiConfData.length,
        "N = ",
        window.webPageNature,
        "isDvOpen",
        _devPaneIsOpen,
        details.url
      );

      // Switching to the Ace editor's content js
      //if(_isAceOpen){
      if (aceDesiConfData != undefined) {
        if (aceDesiConfData.length >= 1) {
          return { redirectUrl: unescape(encodeURIComponent(aceDesiConfData)) };
        }
      }
    }
    //}
    //--------------------------------------------------------------------------------------->

    // Campaign specific to check  walmart
    //http://creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/product.json

    if (
      details.url.indexOf("product.json") != -1 ||
      details.url.indexOf("images/map_loader.jpg") != -1
    ) {
      notifyDevtools({
        speciCam: {
          info: true,
          campSpeciCHk1: campSpeciCHk1,
          rollBackBtnCHK: rollBackBtnCHK,
        },
      });
      //
      //let campSpeciCHk1 = 'false';
      //let rollBackBtnCHK='false';

      if (campSpeciCHk1 == "true" && rollBackBtnCHK == "false") {
        console.log("activating no_data.jpg mode");
        return {
          redirectUrl:
            "//creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/product.json",
        };
      }

      if (rollBackBtnCHK == "true" && locProdJson != "") {
        console.log("REPLACE this json = ", locProdJson);
        return { redirectUrl: locProdJson };
        // return {redirectUrl: 'https://creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/product1.json'};
      }
    }
    // End of campaign specific walmart

    // Check creative loader /creativeLoader.js

    ///
    if (details.url.indexOf("/creativeLoader.js") != -1) {
      notifyDevtools({ cLoaderJs: { url: details.url } });

      if (mazdaSpecCHK == "true" && campSpeciCHk1 != "true") {
        if (mazdaOfferCHK == "showNoOffer") {
          //console.log('showNoOffer now!');
          return {
            redirectUrl:
              "https://creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/creativeLoader1.js",
          };
        } else if (mazdaOfferCHK == "showNoFeed") {
          //console.log('showNoFEED now!');
          return {
            redirectUrl:
              "https://creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/creativeLoader2.js",
          };
        }
      }

      //console.log('mazdaSpecCHK=', mazdaSpecCHK, 'mazdaOfferCHK =', mazdaOfferCHK);
    }

    // component bundle.es5.min

    if (details.url.indexOf("bundle.es5.min") != -1) {
    }
    // end of campaign specific

    ///---fetch ad unit info --------

    //
    if (details.url.indexOf("/insights/impression") != -1) {
      console.log("/insights/impression ", details.url);
      fetchAdUnitMoreInfo(details.url);
    }
    // end of fetch ad unit info
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// END of  onBeforeRequest /////////////////////////////////////////////////////////////////////////////////

// Start of on tab update and activated //chrome api
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    console.log("Tab Refreshed");
    resetVarsNmore();
    getAllAdsInfo(tab);
    checkWebAddress(tab);
  }
});

chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  //console.log('Tab activated', tabId);
  //aceDesiConfData="";
});

chrome.tabs.onCreated.addListener(function (tab) {
  //aceDesiConfData="";
});
// End of tab update and activated

var _tabURL = "";
function checkWebAddress(tab) {
  if (tab.url.search("vdx.tv") != -1) {
    if (_tabURL == tab.url) {
      console.log("same tablink refreshed! ", _tabURL);
      window.webPageNature = "same";
    } else {
      window.webPageNature = "new";
      console.log("**this is new ", _tabURL);
      aceDesiConfData = "";
      _isAceOpen = false;
    }

    _tabURL = tab.url;
  }
}
//
chrome.tabs.onRemoved.addListener(function (tabId, changeInfo, tab) {
  campSpeciCHk1 = "false";
  rollBackBtnCHK = "false";
  mazdaSpecCHK = false;
  mazdaOfferCHK = false;
  aceDesiConfData = "";
});

////////////////////////////////////-----------

// CONTEXT MENU
// Context menu click Script Starts here...
var _notoficationVidID;

chrome.runtime.onInstalled.addListener(function () {
  var domainName = "";
  chrome.tabs.query(
    {
      //This method output active URL
      active: true,
      currentWindow: true,
      status: "complete",
      windowType: "normal",
    },
    function (tabs) {
      for (tab in tabs) {
        domainName = tabs[tab].url;
      }
    }
  );
});

// A generic onclick callback function.
function OnRightClickMenu(info, tab) {
  if (
    (tab.url.indexOf("//vdx.exponential.com") == -1) == false ||
    (tab.url.indexOf("//creative.vdx.tv") == -1) == false
  ) {
  } else {
    alert("This feature is available for VDX Showcase page only.");
    let _notofic1 = {
      type: "basic",
      iconUrl: "images/img128.png",
      title: "Showcase Page Alert",
      message: "This feature is available for VDX Showcase page only.",
    };
    chrome.notifications.create(new Date().getTime().toString(), _notofic1);
    return;
  }
  //
  let deskInframeQueryString = "";

  //(_VdxConnectDesktopInframe[q].mockid ? _VdxConnectDesktopInframe[q].mockid : _VdxConnectDesktopInframe[q].mediaDataID)

  for (var q = 0; q < _VdxConnectDesktopInframe.length; q++) {
    deskInframeQueryString +=
      (_VdxConnectDesktopInframe[q].mockid
        ? _VdxConnectDesktopInframe[q].mockid
        : _VdxConnectDesktopInframe[q].mediaDataID) +
      "_" +
      (_VdxConnectDesktopInframe[q].type
        ? _VdxConnectDesktopInframe[q].ad_size +
          "_" +
          _VdxConnectDesktopInframe[q].type
        : _VdxConnectDesktopInframe[q].ad_size);

    if (q < _VdxConnectDesktopInframe.length - 1) {
      deskInframeQueryString += ",";
    }
  }

  let _baseCustURL =
    "https://creative.exponential.com/creative/devshowcase/VVT/customView1.html?DExp=";
  if (_isThisSingleExecution) {
    _baseCustURL =
      "https://creative.exponential.com/creative/devshowcase/VVT/customView1.1.html?DExp=";
  }

  let _custViewURL =
    _baseCustURL +
    _VdxConnectDesktopExpandable[0].mockid +
    "_" +
    _VdxConnectDesktopExpandable[2].ad_size +
    "&DInf=" +
    deskInframeQueryString +
    "&VCmi=" +
    _VdxConnectMobileInframe[0].mockid +
    "_" +
    _VdxConnectMobileInframe[2].ad_size +
    "&VCme=" +
    _VdxConnectMobileExpandable[0].mockid +
    "_" +
    _VdxConnectMobileExpandable[2].ad_size +
    "&CTV=" +
    _CTV[0].mockid +
    (_CTV[2].ad_size ? "_" + _CTV[2].ad_size : "");

  if (_mobileInstream[0].mockid != 0) {
    _custViewURL +=
      "&MoIns=" + _mobileInstream[0].mockid + "_" + _mobileInstream[2].ad_size;
  }

  window.open(_custViewURL, "_blank");

  //alert('Please refresh the page and let the ad unit loaded!');

  //notification code
  let _notoficationVid = {
    type: "basic",
    iconUrl: "images/img128.png",
    title: "Render Alert",
    message: "Please restart chrome!",
  };
  //chrome.notifications.create(("alertNotif"+new Date().getTime()), _notoficationVid);
  chrome.tabs.reload();

  //}
}
// End of  Context menu click

///////
// Get all information for VXD Viewer Tool from expotask api

///////
// Get all information for VXD Viewer Tool from expotask api

function getAllAdsInfo(tab) {
  chrome.tabs.query({ lastFocusedWindow: true, active: true }, (tabs) => {
    if (tab.url.indexOf("/VVT/customView") != -1) {
      for (var i = 0; i < tabs.length; i++) {
        var mutedInfo = tabs[i].mutedInfo;
        if (mutedInfo) chrome.tabs.update(tabs[i].id, { muted: true });
      }
    }

    // updated to async POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    ///

    if (
      tab.url.indexOf("creative.vdx.tv/") != -1 ||
      tab.url.indexOf("vdx.exponential.com") != -1
    ) {
      resetMidVars();

      console.log("loading.. demopages ", tab.url);

      if (tab.url.search("#") == -1) {
        return;
      }

      if (tab.url.indexOf("creative.vdx.tv/?json=http") != -1) {
        console.info(
          "custom showcase page found",
          tab.url.split("json=")[1].split("#")[0]
        );

        $.getJSON(tab.url.split("json=")[1].split("#")[0], function (data) {
          let result = {};
          result.data = data;
          extractAdUnitInfoData(result, true);
        });
        return;
      }

      let _id = tab.url.split("#")[1].split("/")[0];
      //let O = {"method_name": "getdata_bundle_showcase","hash":_id}
      //let qStars = "method_name=getdata_bundle_showcase&hash="+_id;

      console.info(_id);
      // fetching
      postData("https://expotask-showcase.exponential.com/service/demopages", {
        method_name: "getdata_bundle_showcase",
        hash: _id,
      })
        .then((data) => {
          console.log("data.status ", data.status, "data ", data); // JSON data parsed by `data.json()` call

          if (!data.status) {
            extractAdUnitInfoDataForSE(_id);
            _isThisSingleExecution = true;
          } else {
            extractAdUnitInfoData(data, false);
            _isThisSingleExecution = false;
          }
        })
        .catch((error) => {
          console.info(null, error.message);
        });
    }
  });
}

function extractAdUnitInfoDataForSE(_id) {
  console.info(
    "Seems it is single execution unit. Fetching data from https://creative.vdx.tv/vdxstudio/projects/" +
      _id
  );

  fetch(
    "https://creative.vdx.tv/vdxstudio/projects/" +
      _id +
      "/demopages?published=true"
  )
    .then((response) => response.json())
    .then((data) => {
      extractAdUnitInfoData(data, false);
    });
}

function extractAdUnitInfoData(result, isCustShowcase) {
  /*let adUnitNames = [ "VdxConnectDesktopExpandable",
						"VdxConnectDesktopInframe",	
					    "VdxConnectMobileExpandable",
					    "VdxConnectMobileInframe",
						"_VdxConnectInstream",
						"VdxConnectMobileInstream",
						"VdxConnectInstream",
						"VDXConnectTV"
					]*/

  console.info("extractAdUnitInfoData for non SE", result.data.urls);

  if (result.data == undefined) {
    return;
  }
  for (let i = 0; i < result.data.urls.length; i++) {
    switch (result.data.urls[i].product) {
      // Vdx Desktop Expandable
      case "VdxConnectDesktopExpandable":
        _VdxConnectDesktopExpandable = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectDesktopExpandable" },
        ];
        break;

      case "VdxDesktopExpandable":
        _VdxConnectDesktopExpandable = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectDesktopExpandable" },
        ];
        break;

      // end of VdxDesktopExpandable

      // VDX Desktop Inframe
      case "VdxConnectDesktopInframe":
        _VdxConnectDesktopInframe.push(result.data.urls[i]);
        break;

      case "VdxDesktopInframe":
        _VdxConnectDesktopInframe.push(result.data.urls[i]);
        break;
      /////

      // Vdx Mobile Expandable
      case "VdxConnectMobileExpandable":
        _VdxConnectMobileExpandable = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectMobileExpandable" },
        ];
        break;

      case "VdxMobileExpandable":
        _VdxConnectMobileExpandable = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectMobileExpandable" },
        ];
        break;
      // Vdx Mobile Expandable ends::

      // Vdx Mobile Inframe
      case "VdxConnectMobileInframe":
        _VdxConnectMobileInframe = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectMobileInframe" },
        ];
        break;

      case "VdxMobileInframe":
        _VdxConnectMobileInframe = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectMobileInframe" },
        ];
        break;
      // Vdx Mobile Inframe end.

      case "_VdxConnectInstream":
        _VdxConnectInstream = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectInstream" },
        ];
        break;

      case "VdxConnectMobileInstream":
        _mobileInstream = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectMobileInstream" },
        ];
        break;

      case "VdxConnectInstream":
        _desktopInstream = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VdxConnectInstream" },
        ];
        break;

      case "VDXConnectTV":
        _CTV = [
          {
            mockid: result.data.urls[i].mockid
              ? result.data.urls[i].mockid
              : result.data.urls[i].mediaDataID,
          },
          { etid: result.data.urls[i]._creative_request_id },
          {
            ad_size:
              result.data.urls[i].ad_size +
              (isCustShowcase ? "_" + result.data.urls[i].type : ""),
          },
          { type: "VDXConnectTV" },
        ];
        break;
    }
  }
}

/////// End of get all information for VXD Viewer Tool

// fetch Ad Unit More Info

function fetchAdUnitMoreInfo(_url) {
  if (_url.indexOf("exp:") != -1 && _isAdUnitMoreIfoGot == false) {
    let unitName =
      _url.split("exp:")[1].split(";")[0] + _url.split("pl:")[1].split(";")[0];

    _currentLoadedUnitSize = getParameterByName("creative", _url);
    //console.log('>: ', unitName, _currentLoadedUnitSize );

    let si;

    if (_VdxConnectDesktopExpandable == null) {
      return;
    }

    switch (unitName) {
      case "interactiveexpandabledesk":
        //console.log('~~ ',_VdxConnectDesktopExpandable[1].etid);
        notifyDevtools({
          unitInfo: {
            type: _VdxConnectDesktopExpandable,
            uniyType: "VdxConnectDesktopExpandable",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactiveexpandablemob":
        ///console.log('~~ ',_VdxConnectMobileExpandable[1].etid);
        notifyDevtools({
          unitInfo: {
            type: _VdxConnectMobileExpandable,
            uniyType: "VdxConnectMobileExpandable",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactiveinframedesk":
        notifyDevtools({
          unitInfo: {
            type: _VdxConnectDesktopInframe,
            uniyType: "VdxConnectDesktopInframe",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactiveinframemob":
        //console.log('~~ ',_VdxConnectMobileInframe[1].etid);
        notifyDevtools({
          unitInfo: {
            type: _VdxConnectMobileInframe,
            uniyType: "VdxConnectMobileInframe",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactivedesk":
        //console.log('~~ ',_desktopInstream[1].etid);
        notifyDevtools({
          unitInfo: {
            type: _desktopInstream,
            uniyType: "desktopInstream",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactivemob":
        //console.log('~~ ',_mobileInstream[1].etid);
        notifyDevtools({
          unitInfo: {
            type: _mobileInstream,
            uniyType: "mobileInstream",
            size: _currentLoadedUnitSize,
          },
        });
        break;

      case "interactiveinframe":
        notifyDevtools({
          unitInfo: {
            type: _CTV,
            uniyType: "VDXConnectTV",
            size: _currentLoadedUnitSize,
          },
        });
        break;
    }
  }
}

// end of fetch Ad Unit More Info

function knowVideoSize(details) {
  //console.log('# fetching video size of ', details.url)

  if (details.url.indexOf("video1_init.mp4") != -1) {
    return;
  }

  if (details.url.indexOf("_00.m4s") != -1) {
    notifyDevtools({
      assetsPath: { url: details.url.split("_00.m4s").join(".mp4") },
    });
  } else {
    notifyDevtools({ assetsPath: { url: details.url } });
  }
}

//

/////////////////////////////////////////////////////////////////////////////////////

var ports = [];

chrome.runtime.onConnect.addListener(function (port) {
  ports.push(port);
  // console.log('onConnect ',port, _activeTabIDBG)
  _devPaneIsOpen = true;
  chrome.browserAction.setBadgeText({ text: "✓" });
  chrome.browserAction.setBadgeBackgroundColor({ color: [0, 128, 0, 255] });

  // Remove port when destroyed (eg when devtools instance is closed)
  port.onDisconnect.addListener(function () {
    var i = ports.indexOf(port);
    //console.log("on disconnec ports = ",ports.length  );
    if (ports.length < 2) {
      //chrome.browserAction.setBadgeBackgroundColor({ color: [187, 0, 19, 255] });
      _devPaneIsOpen = false;
      chrome.browserAction.setBadgeText({ text: "" });
      //chrome.browserAction.setIcon({path: 'images/disconnect.png'});
    }

    if (i !== -1) ports.splice(i, 1);
  });

  port.onMessage.addListener(function (msg) {
    // Received message from devtools. Do something:
    console.log("Received message from devtools page", msg);
  });
});
//

// Function to send a message to background js
function notifyBackgroundJs(msgdata, medId) {
  console.log("notifyBackgroundJs called...", msgdata, medId);
}
///

// Function to receive a message from panel :###_____________________________________::

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //console.log('Got from panel: ', request);
  campSpeciCHk1 = request.campSpecChkVal;
  rollBackBtnCHK = request.rollBackBtnCHK;

  mazdaSpecCHK = request.mazdaSpec;
  mazdaOfferCHK = request.type;

  ///console.log('mazdaSpecCHK = ',mazdaSpecCHK, ' mazdaOfferCHK = ',mazdaOfferCHK);
  //
  if (request.rBackTXT != undefined) {
    locProdJson = request.rBackTXT;
  }
  //
  if (request.desiConfJSpath != undefined) {
    locDesiConfJs = request.desiConfJSpath;
  }
  //

  // aceEditorText from panel.
  if (request.aceEditorText != undefined) {
    if (_devPaneIsOpen) {
      aceDesiConfData = request.aceEditorText;
      // console.log( 'AceEditorText is set to ', aceDesiConfData , "dev panel status ",_devPaneIsOpen);

      setTimeout(
        function () {
          if (_isAceOpen) {
            chrome.tabs.query({ active: true }, function (tabs) {
              chrome.tabs.reload(tabs[0].id);
            });
            //chrome.tabs.reload()
          }
        },

        100
      );
    }
  }
  //
  if (request._isAceOpenInfo != undefined) {
    _isAceOpen = request._isAceOpenInfo;
  }

  //panel status from devtoots.js
  if (request.panelStatus == "close") {
    console.log("panel close not close");
  }
});

// Function to send a message to panel views:$$$_____________________________________::

var _atID, _awID;

function notifyDevtools(msg) {
  //, active: true,
  chrome.tabs.query(
    { active: true, windowType: "normal", currentWindow: true },
    function (tabs) {
      if (tabs.length >= 1) {
        _atID = "vdxDevtools" + tabs[0].id.toString();
      }
    }
  );

  chrome.windows.getCurrent(function (w) {
    _awID = "_win" + w.id.toString();
  });

  //_activeTabIDBG = _atID+_awID;

  // find the relevant panel and send message.
  ports.forEach(function (port) {
    chrome.windows.getCurrent(function (w) {
      chrome.tabs.query({ active: true }, (tabs) => {
        //_activeTabIDBG =  "_win"+w.id;

        //console.log("-> ", _activeTabIDBG, ' |  ',port.name)

        if (_activeTabIDBG == port.name) {
          port.postMessage(msg);
          isClickLiveNotSent = true;
        }
      });
    });
  });
}
// end of message to panel

//////////////////////////common reusable function  //////////

//
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
////////////

// chrome.windows.onRemoved.addListener(function(windowid) {
///console.log("window closed", windowid)
// chrome.browserAction.setBadgeText({text: '' });
// })

/**
Developed by AshishK
*/
