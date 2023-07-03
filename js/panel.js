var _version = "6.0.6";
var _finalMessage = "";
var _imageInfo = "";
var _imageInfoArr = [];
var sizeLimit = 1;
var _intLiveInfo = "";
var _clickLiveInfo = "";
var _imagesInfo = [];
var _videoUrlCounter = 1;
var _videoSizeDurInfo = "";
var _vidURLurl = "";
var isVideoNotInspected = true;
var _notoficationVidID = "vidSizeNotif";
var videoFileSizeLimit = 2.5;
var _activeTabId = "";
var _activeTabURL = "";
var isDesiParsed = true;
var _clickLiveData = [];
var _intLiveData = [];
var _intLiveDynamicData = [];
var lineBreaksOpenUrl = "";
var _dapiPath = "";
var _dapiOriginalContent = "";
var _dapiEditedContent = "";
var forceRefresh = false;
var rBackTXT = "";
var isInframe = false;
var adUnitType = "";
var adUnitETId = "";
var adUnitMediaId = "";
var dapiContent = "";
var _etIdofUnit = "";
var imageCompessUrl =
  "http://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=";
var isPageTracked = false;
var _confJsonData = "";
var _CloderVerified = false;
var _demoPagePublished = "";
///var chromeVersion=(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
///console.log("Chrome Version is: "+chromeVersion)
//var chkDefaultImageURL= flase;

// default ui
$("#fsizeTXT").val(sizeLimit);

//

function do_something(msg) {
  // Inspecting video quartiles
  if (msg.video != undefined) {
    let vidPxl = msg.video.video;
    if (vidPxl.indexOf("fr:") != -1 || vidPxl.indexOf("st:") != -1) {
      vidPxl =
        filterVidPics(msg.video.video, "st:", ";") +
        " | " +
        filterVidPics(msg.video.video, "fr:", ";") +
        " : " +
        msg.video.pxl;
    } else {
      vidPxl = msg.video.video + " : " + msg.video.pxl;
    }
    _finalMessage += vidPxl;
    _finalMessage += " &#10003;<br>";
    document.getElementById("txt1").innerHTML = _finalMessage;
    $("#txt1").animate(
      { scrollTop: $("#txt1").get(0).scrollHeight },
      700,
      "swing"
    );
  }
  // end of video quartile inspection

  // Inspecting Images size

  if (msg.images != undefined) {
    let imgbytes = parseBytes(msg.images.size);
    _imagesInfo.push(imgbytes);
    if (Math.round(imgbytes.s) >= sizeLimit && imgbytes.u != "bytes") {
      //	console.info(_imageInfo)
      if (_imageInfo.indexOf(msg.images.url) == -1) {
        //
        if (
          msg.images.name.split("?")[0].toLowerCase().indexOf("teaserlogo") !=
            -1 ||
          msg.images.name.split("?")[0].toLowerCase().indexOf("logosmall") != -1
        ) {
          if (imgbytes.s >= 11) {
            _imageInfo +=
              imgbytes.s +
              " " +
              imgbytes.u +
              " | <a href='" +
              "https://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=" +
              msg.images.url +
              "' target='_blank'><span class='badge badge-danger'>" +
              msg.images.name.split("?")[0] +
              "</span><a/> <br> ";

            _imageInfoArr.push({
              s: Number(imgbytes.s),
              n:
                " | <a href='" +
                msg.images.url +
                "' target='_blank'><span class='badge badge-danger'>" +
                msg.images.name.split("?")[0] +
                "</span><a/> <br>",
            });
          } else {
            _imageInfo +=
              imgbytes.s +
              " " +
              imgbytes.u +
              " | <a href='" +
              "https://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=" +
              msg.images.url +
              "' target='_blank'><span class='badge badge-info'>" +
              msg.images.name.split("?")[0] +
              "</span><a/> <br> ";

            _imageInfoArr.push({
              s: Number(imgbytes.s),
              n:
                " | <a href='" +
                msg.images.url +
                "' target='_blank'><span class='badge badge-info'>" +
                msg.images.name.split("?")[0] +
                "</span><a/> <br> ",
            });
          }
        } else if (
          msg.images.name.split("?")[0].indexOf("video") != -1 ||
          msg.images.name.split("?")[0].toLowerCase().indexOf("poster") != -1
        ) {
          if (imgbytes.s >= 31) {
            _imageInfo +=
              imgbytes.s +
              " " +
              imgbytes.u +
              " | <a href='" +
              "https://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=" +
              msg.images.url +
              "' target='_blank'><span class='badge badge-danger'>" +
              msg.images.name.split("?")[0] +
              "</span><a/> <br> ";
            _imageInfoArr.push({
              s: Number(imgbytes.s),
              n:
                " | <a href='" +
                msg.images.url +
                "' target='_blank'><span class='badge badge-danger'>" +
                msg.images.name.split("?")[0] +
                "</span><a/> <br> ",
            });
          } else {
            _imageInfo +=
              imgbytes.s +
              " " +
              imgbytes.u +
              " | <a href='" +
              "https://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=" +
              msg.images.url +
              "' target='_blank'><span class='badge badge-info'>" +
              msg.images.name.split("?")[0] +
              "</span><a/> <br> ";

            _imageInfoArr.push({
              s: Number(imgbytes.s),
              n:
                " | <a href='" +
                msg.images.url +
                "' target='_blank'><span class='badge badge-info'>" +
                msg.images.name.split("?")[0] +
                "</span><a/> <br> ",
            });
          }
        }
        //
        else {
          _imageInfo +=
            imgbytes.s +
            " " +
            imgbytes.u +
            " | <a href='" +
            "https://creative.exponential.com/creative/devshowcase/VVT/compress/?_i=" +
            msg.images.url +
            "' target='_blank'>" +
            msg.images.name.split("?")[0] +
            "<a/> <br> ";

          _imageInfoArr.push({
            s: Number(imgbytes.s),
            n:
              " | <a href='" +
              msg.images.url +
              "' target='_blank'>" +
              msg.images.name.split("?")[0] +
              "<a/> <br>",
          });
        }

        //_imageInfoArr.push({u:msg.images.url, s:Number(imgbytes.s),n:msg.images.name.split('?')[0]});

        //document.getElementById('txt2').innerHTML = _imageInfo;
        // ShortImageInfoArr()
        //document.getElementById('txt2').scrollTop = document.getElementById('txt2').scrollHeight;
      }
    }
  }

  function ShortImageInfoArr() {
    $("div#allImageList").empty();

    _imageInfoArr = _imageInfoArr.slice(0).sort(function (a, b) {
      return a.s - b.s;
    });

    //currentValue, index, arr
    _imageInfoArr.reverse();
    document.getElementById("txt2").innerHTML = "";
    _imageInfoArr.map(function (curr) {
      document.getElementById("txt2").innerHTML += curr.s + " " + curr.n;
      //$('div#allImageList').append(curr.u)
    });
  }

  //End of Image Size Inspection

  //Inspecting I N T  L I V E.....INTERACTION PIXELS Int Live.....INTERACTION PIXELS Int Live.....INTERACTION PIXELS

  if (msg.pixel != undefined) {
    if (msg.pixel.intLive != undefined) {
      let _i = msg.pixel.intLive;
      let _ii;

      if (!msg.pixel.SE) {
        if (_i.indexOf("fr:") != -1) {
          _ii = _i
            .slice(_i.indexOf("fr:") + 3)
            .slice(0, _i.slice(_i.indexOf("fr:") + 3).indexOf(";"));
          _intLiveInfo += _ii;
        } else {
          _ii = _i;
          _intLiveInfo += _i;
        }
      } else {
        if (_i.indexOf("id:") != -1) {
          _ii = _i
            .slice(_i.indexOf("id:") + 3)
            .slice(0, _i.slice(_i.indexOf("id:") + 3).indexOf(";"));
          _intLiveInfo += _ii;
        } else {
          _ii = _i;
          _intLiveInfo += _i;
        }
      }

      _intLiveInfo += "  <br> ";

      document.getElementById("txt3").innerHTML = _intLiveInfo;
      $("#txt3").animate(
        { scrollTop: $("#txt3").get(0).scrollHeight },
        400,
        "swing"
      );
      verifyCTAIMP(_ii, "intLive");
      //trackToGoogleSheet()
    }
  }
  // END OF INT LIVE...// END OF INT LIVE...// END OF INT LIVE...// END OF INT LIVE...

  //*************Inspecting C L I C K   L I V E****************//

  if (msg.pixel != undefined) {
    if (msg.pixel.clickLive != undefined) {
      let _t = msg.pixel.clickLive;
      let _tt;

      if (!msg.pixel.SE) {
        console.info("NON Single Execution ", msg.pixel.SE);

        if (_t.indexOf("fr:") != "-1") {
          _tt = _t
            .slice(_t.indexOf("fr:") + 3)
            .slice(0, _t.slice(_t.indexOf("fr:") + 3).indexOf(";"));
          _clickLiveInfo += _tt;
        } else {
          _tt = _t;
          _clickLiveInfo += _t;
        }
      } else {
        console.info("  S I N G L E -  E X E C U T I O N ", msg.pixel.SE, _t);

        if (_t.indexOf("id:") != "-1") {
          _tt = _t
            .slice(_t.indexOf("id:") + 3)
            .slice(0, _t.slice(_t.indexOf("id:") + 3).indexOf(";"));

          console.log("_tt  = ", _tt);

          _clickLiveInfo += _tt;
        } else {
          _tt = _t;

          console.info("_t  = ", _t);

          if (_t.indexOf("fr:") != "-1") {
            _t = _t
              .slice(_t.indexOf("fr:") + 3)
              .slice(0, _t.slice(_t.indexOf("fr:") + 3).indexOf(";"));
          }

          _tt = _t;
          _clickLiveInfo += _t;
        }
      }

      verifyCTAIMP(_tt, "clickLive");
      _clickLiveInfo += "  <br> ";

      document.getElementById("txt4").innerHTML = _clickLiveInfo;

      $("#txt4").animate(
        { scrollTop: $("#txt4").get(0).scrollHeight },
        1000,
        "swing"
      );

      //trackToGoogleSheet();
    }
  }

  /*
	if(msg.pixel!=undefined){		
		if(msg.pixel.clickLive!=undefined){


		console.info("msg.pixel.SE ", msg.pixel.SE, "     |   cl = ", msg.pixel.clickLive)


		   let _t=msg.pixel.clickLive;
		   let _tt;
		   if(_t.indexOf('fr:')!='-1'){
		   		_tt=_t.slice(_t.indexOf('fr:')+3).slice(0,_t.slice(_t.indexOf('fr:')+3).indexOf(';'));
		   		_clickLiveInfo+=_tt;
			 
			}else{
			   _tt = _t
			   _clickLiveInfo+= _t;
					
			}
			
			verifyCTAIMP(_tt, 'clickLive');
		   _clickLiveInfo+="  <br> "
			
		   document.getElementById('txt4').innerHTML = _clickLiveInfo;

		   $('#txt4').animate({scrollTop: $('#txt4').get(0).scrollHeight}, 1000, 'swing');

		  // trackToGoogleSheet();
		   
		}		 
   }
*/

  // END of inspecting  C L IC K   L I V E ........

  // video assets pathname

  if (msg.assetsPath != undefined) {
    //console.log(msg.assetsPath.url);

    if (
      msg.assetsPath.url.search("VDX-Reel-480p.mp4") == "-1" ||
      msg.assetsPath.url.search("Introducing_VDX.tv.mp4") == "-1"
    ) {
      if ($("#switch1").is(":checked")) {
        if (isVideoNotInspected) {
          _notoficationVidID = "vidSizeNotif" + new Date().getTime();
          knowVideoSize(msg.assetsPath.url);
        }
      }
    }
  }

  // js file intimation for designer api
  if (msg.jsfile != undefined) {
    //console.log(msg.jsfile.desi);
    if (isDesiParsed) {
      parseDesignerConfig(msg.jsfile.desi);
      _dapiPath = msg.jsfile.desi;

      if (_dapiOriginalContent == "") {
        loadDesignrConfig(_dapiPath, true);
      }
    }

    // when new page loaded
    if (msg.jsfile.wpn == "new") {
      if (msg.jsfile.devPo) {
        resetAceEditor();
      }
    }

    console.log("window.webPageNature = ", msg.jsfile.wpn, msg.jsfile.devPo);
  }

  // specific campign detection
  if (msg.speciCam != undefined) {
    //	notifyDevtools({speciCam:{info:true}});
    // console.log('msg.speciCam.info = ',msg.speciCam.info, msg.speciCam.campSpeciCHk1, msg.speciCam.rollBackBtnCHK )

    document.getElementById("specificQcMenu").style.display = "block";
    $("#campaignSpecificWalmart").css("display", "block");
    $("#campaignSpecificMazda").css("display", "none");

    if (msg.speciCam.info == "true") {
      $("#specificQcMenu").css("display", "block");
    }
    //msg.speciCam.info
  }
  ///--
  // check creativeLoader.js of Mazda

  if (msg.cLoaderJs != undefined) {
    //console.info('cLoaderJs ',msg.cLoaderJs.url)
    $("#specificQcMenu").css("display", "block");
    $("#campaignSpecificMazda").css("display", "block");
    $("#campaignSpecificWalmart").css("display", "none");
    //

    if (!_CloderVerified) {
      setTimeout(function () {
        checkCloaderVersion(_confJsonData, msg.cLoaderJs);
      }, 3000);
    }
  }

  // check version of cLoaderJs

  function checkCloaderVersion(_allCretiveLoderJS, cLoaderJs) {
    if (_allCretiveLoderJS.MazdaCretiveLoderJS.version == undefined) {
      return;
    }

    let _latestVersionM =
      _allCretiveLoderJS.MazdaCretiveLoderJS.version.replace(/\s+/g, "");
    let _latestVersionW =
      _allCretiveLoderJS.WalmartCretiveLoderJS.version.replace(/\s+/g, "");

    //console.info(_allCretiveLoderJS.MazdaCretiveLoderJS.version, cLoaderJs.url);

    fetch(cLoaderJs.url) // https://cors-anywhere.herokuapp.com/https://creative.exponential.com/creative/devshowcase/VTT/camspec/mazawal/creativeLoader1.js
      .then((response) => response.text())
      .then((contents) => {
        for (var i = 0; i < contents.split("\n").length; i++) {
          //console.info(_latestVersionM , "  " , contents.split("\n")[i].replace(/\s+/g,''));

          // CHECK if it is w a l m a r t

          if (
            contents.split("\n")[i].replace(/\s+/g, "").search("walmart") >= 1
          ) {
            // console.info("walmart's creative loader ", _latestVersionW);
            for (var ii = 0; ii < contents.split("\n").length; ii++) {
              if (
                _latestVersionW == contents.split("\n")[ii].replace(/\s+/g, "")
              ) {
                document.getElementById("otherInfo").innerHTML =
                  "<span class='badge badge-success'><a href='" +
                  cLoaderJs.url +
                  "' target='_blank'><font color='#fff'>Walmart CL.js</font></a> " +
                  contents.split("\n")[ii].replace(/\s+/g, "") +
                  "</span>";
              } else {
                document.getElementById("otherInfo").innerHTML =
                  "<span class='badge badge-danger'><a href='" +
                  _allCretiveLoderJS.WalmartCretiveLoderJS.path +
                  "' target='_blank'><font color='#fff'>Walmart CL.js</font></a> " +
                  contents.split("\n")[ii].replace(/\s+/g, "") +
                  "</span>";
              }

              if (
                contents
                  .split("\n")
                  [ii].replace(/\s+/g, "")
                  .search("version") != -1
              ) {
                break;
              }
            }

            break;
          }

          // m a z d a

          if (
            contents.split("\n")[i].replace(/\s+/g, "").search("Mazda") >= 1
          ) {
            console.info("Mazda's creative loader ", _latestVersionM);

            for (var ii = 0; ii < contents.split("\n").length; ii++) {
              //console.info(_latestVersionM==contents.split("\n")[ii].replace(/\s+/g,''));

              if (
                _latestVersionM == contents.split("\n")[ii].replace(/\s+/g, "")
              ) {
                document.getElementById("otherInfo").innerHTML =
                  "<span class='badge badge-success'><a href='" +
                  cLoaderJs.url +
                  "' target='_blank'><font color='#fff'>Mazda CL.js</font></a> " +
                  contents.split("\n")[ii].replace(/\s+/g, "") +
                  "</span>";
              } else {
                document.getElementById("otherInfo").innerHTML =
                  "<span class='badge badge-danger'><a href='" +
                  _allCretiveLoderJS.MazdaCretiveLoderJS.path +
                  "' target='_blank'><font color='#fff'>Mazda CL.js</font></a> " +
                  contents.split("\n")[ii].replace(/\s+/g, "") +
                  "</span>";
              }

              if (
                contents
                  .split("\n")
                  [ii].replace(/\s+/g, "")
                  .search("version") != -1
              ) {
                break;
              }
            }

            break;
          }
        }

        _CloderVerified = true;

        //-->
      })

      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }

  /////////////////////

  // CPU uses
  /*
	if(msg.pcuUse!=undefined){
		//console.log('dp ',msg.pcuUse.percent)
		document.getElementById('cpuUse').innerHTML=("<span id='cpuSpan' >CPU "+msg.pcuUse.percent+"%</span>");

		if(Number(msg.pcuUse.percent)>30){
			document.getElementById('cpuSpan').className="badge badge-danger";
		}else{ 
		   document.getElementById('cpuSpan').className="badge badge-success"; 
		}

	}
*/

  // Get Ad unit type info

  function checkTheCode() {
    console.log(
      "_dapi = ",
      _dapi,
      "unit type is   = ",
      adUnitType,
      adUnitMediaId
    );
  }

  // get ET id of unit and display at bottom of tool

  if (msg.unitInfo != undefined) {
    //console.clear()
    //console.info("--> ",msg.unitInfo.type.length)
    //console.info('::-: ',msg.unitInfo)
    //
    if (msg.unitInfo.type.length == 0) {
      return;
    }
    adUnitType = msg.unitInfo.uniyType; //msg.unitInfo.type[3].type;
    adUnitETId = msg.unitInfo.type[1].etid;

    if (adUnitETId == undefined) {
      for (let i = 0; i < msg.unitInfo.type.length; i++) {
        if (msg.unitInfo.size.split("x")[0] !== "$WIDTH$") {
          if (msg.unitInfo.type[i].ad_size.search(msg.unitInfo.size) != -1) {
            adUnitETId = msg.unitInfo.type[i]._creative_request_id;
            break;
          }
        }
      }
    }

    document.getElementById("etIdinfo").innerHTML =
      "<a href='https://expotask.exponential.com/request/info/" +
      adUnitETId +
      "' target='_blank'>" +
      " <span class='badge badge-info'>ET " +
      adUnitETId +
      "</span></a>";

    if (adUnitETId == undefined) {
      document.getElementById("etIdinfo").style.visibility = "hidden";
    } else {
      document.getElementById("etIdinfo").style.visibility = "visible";
    }

    // passing et id to compare with et's input text field
    if (_etIdofUnit == "") {
      _etIdofUnit = adUnitETId;
      $("#ETpixTXT").val(_etIdofUnit);
    }
  }

  /// is page new? ###
}

// Detect page refresh and reset things.....

chrome.tabs.query({ active: true }, (tabs) => {
  _activeTabId = tabs[0].id;
  console.log("refreshed:: The active tab id is: ", tabs[0].id);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    tab.url.indexOf("creative.vdx.tv/#") != -1 ||
    tab.url.indexOf("vdx.exponential.com/#") != -1 ||
    tab.url.indexOf("creative.vdx.tv/internal") != -1 ||
    tab.url.indexOf("creative.vdx.tv/mock") != -1
  ) {
    _activeTabURL = tab.url;
  }
  //console.log('onUpdated'   );
  if (!(parseInt(_activeTabId) == parseInt(tabId))) {
    return;
  }
  //	console.log('changeInfo.status = ',changeInfo.status)
  if (changeInfo.status == "loading") {
    resetThings();
  }
});

// function to reset things on refresh.
function resetThings() {
  _imagesInfo = [];
  _finalMessage = "";
  document.getElementById("txt1").innerHTML = _finalMessage;
  _intLiveInfo = "";
  document.getElementById("txt3").innerHTML = _intLiveInfo;

  _imageInfo = "";
  document.getElementById("txt2").innerHTML = _imageInfo;

  _clickLiveInfo = "";
  document.getElementById("txt4").innerHTML = _clickLiveInfo;
  //
  _videoUrlCounter = 1;
  //$('#switch1').prop('checked', true)

  isVideoNotInspected = true;
  _vidURLurl = "";
  _videoSizeDurInfo = "";
  document.getElementById("txt5").innerHTML = _videoSizeDurInfo;
  isDesiParsed = true;

  isPageTracked = false;
  adUnitETId = "";

  $("span#span1").text("");
  $("span#span2").text("");
  _clickLiveData = [];
  _intLiveData = [];
  _intLiveDynamicData = [];
  lineBreaksOpenUrl = "";
  document.getElementById("ctaGrid").innerHTML = "";
  document.getElementById("alertMsgDconfig").innerHTML = "";
  // $('.hover_bkgr_fricc').hide();
  $("#model1close").click();
  $("#model2close").click();
  //$("#model3close").click();

  //
  if (forceRefresh == false) {
    document.getElementById("specificQcMenu").style.display = "none";
  }
  forceRefresh = false;
  $("#rollbackCHKbtn").find("span").addClass("d-none");
  document.getElementById("bottomInfoTxt1").innerHTML = "";
  document.getElementById("etIdinfo").innerHTML = "";
  _etIdofUnit = "";
  $("#ETpixTXT").val("");
  $("#compWithET").css("display", "none");
  $("#ctaGrid").css("display", "block");

  //

  flushFilesSize();

  _CloderVerified = false;
  document.getElementById("otherInfo").innerHTML = "";

  //
}

// User interaction activity...

$("input").on("change keydown paste input", function () {
  sizeLimit = $("#fsizeTXT").val();
  showShorted();
});

$("img#clearPixels").on("click", function () {
  _intLiveInfo = "";
  document.getElementById("txt3").innerHTML = _intLiveInfo;
});

$("img#clearCTAPixels").on("click", function () {
  _clickLiveInfo = "";
  document.getElementById("txt4").innerHTML = _clickLiveInfo;
});

$("img#clearImgSize").on("click", function () {
  _imageInfo = "";
  document.getElementById("txt2").innerHTML = _imageInfo;
});

$("img#recheckIcon").on("click", function () {
  if (_vidURLurl != "") {
    _videoUrlCounter = 1;
    _vidURLurl = _vidURLurl.slice(0, _vidURLurl.search("video")) + "init.mp4";
    knowVideoSize(_vidURLurl);
    document.getElementById("txt5").innerHTML = "";
  }
});

// Ace editor immplementation starts from here ---------------------------------------------------------ACE
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setShowPrintMargin(false);
editor.$blockScrolling = Infinity;

//Very initial button to open Ace editor
$("button#downloadDCon").on("click", function () {
  if (_dapiEditedContent == "") {
    editor.setValue(_dapiOriginalContent);

    console.log("loaded _dapiOriginalContent code");
  } else {
    editor.setValue(_dapiEditedContent);
    console.log("loaded editted code");
  }
  editor.gotoLine(0, 0, false);
});
//>

// Reset code/content to original
$("button#resetContentEditor").on("click", function () {
  _dapiEditedContent = "";
  chrome.runtime.sendMessage({ aceEditorText: "" }, function (response) {
    console.log("ace editor send reset response ", response);
  });
  loadDesignrConfig(_dapiPath, true);

  //
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Send message to content script
    //if (tab) {
    chrome.tabs.sendMessage(tabs[0].id, '{message:"aa"}');
    //}
  });
});

//>

function loadDesignrConfig(desiConfPath, loadOriginal = false) {
  const xhr = new XMLHttpRequest();
  //https://creative.vdx.tv/mock/100032589/160x600 - mazda
  //https://creative.vdx.tv/mock/500059151/300x250 - map
  //
  xhr.open("GET", desiConfPath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      editor.setValue(xhr.responseText);
      if (loadOriginal) {
        _dapiOriginalContent = xhr.responseText;
        editor.setValue(_dapiOriginalContent);
      }
    }
  };
  xhr.send();
}
//>

function resetAceEditor() {
  _dapiEditedContent = "";
  _dapiOriginalContent = "";
  editor.setValue("");
  chrome.runtime.sendMessage({ aceEditorText: "" }, function (response) {
    console.log("ace editor send resetAce() response ", response);
  });
  $("button#model3close").click();
}

// Beautify JS button // depricated
$("button#beautifyEditor").on("click", function () {
  editor.setValue(js_beautify(editor.getValue()));
  editor.gotoLine(0, 0, false);
});
//>

// Text wrap button
var isWrap = false;
$("button#wrapEditor").on("click", function () {
  if (!isWrap) {
    editor.setOption("wrap", true);
    isWrap = true;
    $("button#wrapEditor").text("Wrap on ");
  } else {
    editor.setOption("wrap", false);
    isWrap = false;
    $("button#wrapEditor").text("Wrap off");
  }
  //

  //editor.setOptions({
  //readOnly: true,
  //highlightActiveLine: false,
  //highlightGutterLine: false
  //})
});
//>

// Refresh Ad unit button
$("button#refreshEditor").on("click", function () {
  chrome.runtime.sendMessage({ _isAceOpenInfo: true }, function (response) {
    //console.log('ace editor send text response ', response);
  });

  _dapiEditedContent = editor.getValue();
  chrome.runtime.sendMessage(
    {
      aceEditorText:
        "data:" +
        "text/javascript" +
        ";charset=UTF-8;base64," +
        btoa(unescape(encodeURIComponent(editor.getValue()))),
    },
    function (response) {
      //console.log('ace editor send text response ', response);
    }
  );
  //	setTimeout(function(){chrome.tabs.reload();},1000);
});
//>

// Save code to local
$("button#saveCodeEditor").on("click", function () {
  var blob = new Blob([editor.getValue()], {
    type: "text/javascript;charset=utf-8",
  });
  saveAs(blob, "designer-config.js");
});
//>

// Ace Editor Close click
$("button#model3close").on("click", function () {
  //_dapiOriginalContent="";
  //_dapiEditedContent=""
  //chrome.runtime.sendMessage({aceEditorText: "" }, function(response) {
  //	console.log('ace editor send text response ', response);
  //});
  //editor.setValue("")
  chrome.runtime.sendMessage({ _isAceOpenInfo: false }, function (response) {
    console.log("ace editor send text response ", response);
  });
});

// Open code in new browser tab
$("#openCodeinTab").on("click", function () {
  window.open(_dapiPath, "_blank");
});

// End OF User interaction activity...
//////////

// Common Functions

const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function parseBytes(x) {
  let l = 0,
    n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  let s = n.toFixed(n < 10 && l > 0 ? 2 : 0);
  return { s: s, u: units[l], su: s + " " + units[l] };
}

function convertTime(sec) {
  var hours = Math.floor(sec / 3600);
  hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
  var min = Math.floor(sec / 60);
  min >= 1 ? (sec = sec - min * 60) : (min = "00");
  sec < 1 ? (sec = "00") : void 0;

  min.toString().length == 1 ? (min = "0" + min) : void 0;
  sec.toString().length == 1 ? (sec = "0" + sec) : void 0;
  //'H: '+hours+

  return min + ":" + sec.toFixed(4) + "";
}

function filterVidPics(_srt, _key, _lastChar) {
  let str = _srt;
  let n = str.slice(str.indexOf(_key) + _key.length);
  n = n.slice(0, n.indexOf(_lastChar));
  return n;
}
// end of common code.

//  Some beta code test //

function knowVideoSize(url) {
  if (
    url.indexOf("_init.mp4") != -1 ||
    url.indexOf("Introducing_VDX.tv.mp4") != -1
  ) {
    return;
  }

  if (url.split("/")[url.split("/").length - 1] == "init.mp4") {
    url = url.split("init.mp4").join("video1.mp4");
  }

  // video inspection code starts here.

  if (_videoUrlCounter > 1) {
    url =
      url.slice(0, url.search("video")) + "video" + _videoUrlCounter + ".mp4";
  }

  _vidURLurl = url;

  //  console.log('~~ video url ', url)

  fetch(url)
    .then(handleErrors)
    .then((response) => response.blob())
    .then((contents) => {
      parseInformation(contents);
    })
    .catch((error) => {
      console.log("---> ", error);
    });

  isVideoNotInspected = false;
}

function handleErrors(response) {
  if (response.status == 404) {
    $("#switch1").prop("checked", false);
  }
  console.log(response.status);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

//// NOTIFICATION //

var _notoficationVid = {
  type: "basic",
  iconUrl: "images/img128.png",
  title: "Video Size Alert!",
  message: "Heavy video found. Please check specs!",
};

// Parse the video size and video length here.

function parseInformation(data) {
  let sz = parseBytes(data.size);
  //console.log(  sz.s,sz.u );
  // get duration
  var tempVideoEl = document.createElement("video");
  tempVideoEl.addEventListener("loadedmetadata", function () {
    // got duration here --
    if (tempVideoEl.duration === Infinity) {
      console.log("Infinity duration");
    } else {
      if (parseFloat(sz.s).toFixed(2) > videoFileSizeLimit && sz.u == "MB") {
        _videoSizeDurInfo +=
          "video " +
          _videoUrlCounter +
          "  = <a href='" +
          _vidURLurl +
          "' target='_blank'><font color='red'><b>" +
          sz.s +
          " " +
          sz.u +
          "</b></font></a> , Duration: " +
          convertTime(tempVideoEl.duration) +
          "<br>";
        chrome.notifications.create(_notoficationVidID, _notoficationVid);
      } else {
        _videoSizeDurInfo +=
          "video " +
          _videoUrlCounter +
          "  = <a href='" +
          _vidURLurl +
          "' target='_blank'>" +
          sz.s +
          " " +
          sz.u +
          "</a> , Duration: " +
          convertTime(tempVideoEl.duration) +
          "<br>";
      }

      document.getElementById("txt5").innerHTML = _videoSizeDurInfo;

      $("#txt5").animate(
        { scrollTop: $("#txt5").get(0).scrollHeight },
        500,
        "swing"
      );

      //console.log(convertTime(tempVideoEl.duration));
      //
      setTimeout(knowVideoSize, 2000, _vidURLurl); //re-triggering

      _videoUrlCounter++;
    }
  });

  tempVideoEl.src = window.URL.createObjectURL(data);

  //	get duration end
}

///////////////// PARSING DESIGNER CONFIG

function parseDesignerConfig(url) {
  fetch(url) // https://cors-anywhere.herokuapp.com/
    .then((response) => response.text())
    .then((contents) => {
      //
      dapiContent = contents;

      //console.info(  contents )

      let extractData = contents.split("\n").map(function (num, i, arr) {
        if (arr[i].search("clickLive") != -1) {
          let _t1 = arr[i].replace(/^\s+|\s+$/gm, "");
          //console.log('clickLive ', arr[i],arr[i].indexOf('/')!=-1)
          _t1 = _t1.replace(/\s/g, "");
          if (_t1.search("firePixel") == -1) {
            _t1 = arr[i - 1].replace(/\s/g, "");
            _t1 = _t1.slice(
              _t1.indexOf("firePixel") + 11,
              _t1.indexOf("[{") - 2
            );
          }
          //console.log(_t1 );

          if (_t1.indexOf("eventName") != -1) {
            _t1 = _t1.slice(
              _t1.indexOf("firePixel") + 11,
              _t1.indexOf("eventName") - 5
            );
          }

          if (_t1.search("fireDynamicPixel") != -1) {
            _t1 = _t1.slice(_t1.indexOf("fireDynamicPixel") + 18, _t1.length);
            //console.log(_t1);
            //_clickLiveDynamicData.push(_t1)
            //return;
          }

          _clickLiveData.push(_t1);
        }

        // openUrl should not be breaked in more than one line.

        if (arr[i].search("openUrl") != -1) {
          if (arr[i].indexOf(")") == -1) {
            console.log(
              "OpenUrl should NOT have a line break. See Line No. ",
              i + 1,
              "in designer-config.js "
            );
            //
            lineBreaksOpenUrl += (i + 1).toString() + ", ";
            document.getElementById("alertMsgDconfig").innerHTML +=
              "<li><a href='https://tinyurl.com/fukjchsy' target='_blank'>" +
              "Avoid Line Break with OpenUrl at line No. " +
              lineBreaksOpenUrl +
              " in designer-config.js " +
              "</a>";
          }
        }

        //------------intLive-->

        if (arr[i].search("intLive") != -1) {
          let _t2 = arr[i].replace(/^\s+|\s+$/gm, "");
          _t2 = _t2.replace(/\s/g, "");

          if (_t2.search("firePixel") == -1) {
            _t2 = arr[i - 1].replace(/\s/g, "");
            _t2 = _t2.slice(
              _t2.indexOf("firePixel") + 11,
              _t2.indexOf("[{") - 2
            );
          }

          if (_t2.indexOf("eventName") != -1) {
            if (_t2.search("fireDynamicPixel") == -1) {
              _t2 = _t2.slice(
                _t2.indexOf("firePixel") + 11,
                _t2.indexOf("eventName") - 5
              );
            }
          }

          if (_t2.search("fireDynamicPixel") != -1) {
            _t2 = _t2.slice(
              _t2.indexOf("fireDynamicPixel") + 17,
              _t2.indexOf("eventName") - 12
            );
            _intLiveDynamicData.push(_t2);
            return;
          }

          _intLiveData.push(_t2);
        }
      });

      //-->

      _intLiveData.map(function (num, i, arr) {
        document.getElementById("ctaGrid").innerHTML +=
          "<span class='text-intNorm'> " + arr[i] + " </span> <br>";
      });

      _clickLiveData.map(function (num, i, arr) {
        document.getElementById("ctaGrid").innerHTML +=
          "<span class='text-ctaNorm'> " + arr[i] + " </span> <br>";
      });

      //
      if (_intLiveDynamicData.length > 0) {
        //document.getElementById('ctaGrid').innerHTML
        document.getElementById("alertMsgDconfig").innerHTML +=
          "<li>Below dynamic pixels firing can be seen on parent  Impression Pixels window.<br>";
        _intLiveDynamicData.map(function (num, i, arr) {
          //document.getElementById('ctaGrid').innerHTML
          document.getElementById("alertMsgDconfig").innerHTML +=
            "<span class='text-intDyna'> " + arr[i] + " </span> , ";
        });
      }

      //document.getElementById('ctaGrid').innerHTML += "<span class='text-intDyna'> " + _intLiveDynamicData + " </span> <br>";

      //

      $("span#span1").text(_intLiveData.length);
      $("span#span2").text(_clickLiveData.length);

      $("#compWithET").css("display", "none");

      //
      // console.log(_dapiPath.split('assets/designer-config.js').join('scripts/creativeLoader.js'))
      //

      // checkTheCode();
    })

    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );

  isDesiParsed = false;
}

////////////////// Verifying on user interaction :: Some more user interaction

// Pixel Verification

function verifyCTAIMP(txt, pxlType) {
  for (let i = 0; i < $("#ctaGrid").find("span").length; i++) {
    if ($($("#ctaGrid").find("span")[i]).text().trim() == txt.trim()) {
      if (
        $($("#ctaGrid").find("span")[i]).hasClass("text-intNorm") ||
        $($("#ctaGrid").find("span")[i]).hasClass("text-ctaNorm")
      ) {
        let _class = "";
        if (pxlType == "intLive") {
          _class = "text-intchecked";
        } else {
          _class = "text-ctachecked";
        }
        //$($('#ctaGrid').find("span")[i]).removeClass("text-ctaNorm").addClass('text-ctachecked');
        //intchecked
        $($("#ctaGrid").find("span")[i])
          .removeClass("text-ctaNorm text-intNorm")
          .addClass(_class);

        //.animate( properties [, duration ] [, easing ] [, complete ] )
        $("#ctaGrid").animate(
          {
            scrollTop: $($("#ctaGrid").find("span")[i])
              .get(0)
              .getBoundingClientRect().y,
          },
          100,
          "swing"
        );

        //console.log( 'From CTA GRID - ',  $($('#ctaGrid').find("span")[i]).get(0)  );

        // when user interacts
        $($("#ctaGrid").find("span")[i]).click(function () {
          if ($(this).hasClass("text-ctachecked")) {
            $(this).removeClass("text-ctachecked").addClass("text-ctaNorm");
          } else if ($(this).hasClass("text-intchecked")) {
            $(this).removeClass("text-intchecked").addClass("text-intNorm");
          }

          //$(this).removeClass("text-ctachecked text-intchecked").addClass('text-ctaNorm');
        });

        $($("#ctaGrid").find("span")[i]).dblclick(function () {
          for (let ii = 0; ii < $("#ctaGrid").find("span").length; ii++) {
            if ($($("#ctaGrid").find("span")[ii]).hasClass("text-ctachecked")) {
              $($("#ctaGrid").find("span")[ii])
                .removeClass("text-ctachecked")
                .addClass("text-ctaNorm");
            } else if (
              $($("#ctaGrid").find("span")[ii]).hasClass("text-intchecked")
            ) {
              $($("#ctaGrid").find("span")[ii])
                .removeClass("text-intchecked")
                .addClass("text-intNorm");
            }

            //$($('#ctaGrid').find("span")[ii]).removeClass("text-ctachecked text-intchecked").addClass('text-ctaNorm');
            document.getSelection().removeAllRanges();
          }
        });
        //

        break;
      }
    }
  }
  // reset compared et pixel section.
  $("div#hrline").remove();
  $("div#etPixs").remove();
  //$('#ETpixTXT').val("");
  $("#compWithET").css("display", "none");
  $("#ctaGrid").css("display", "block");
}

// End of code..

// Fetch pixel information from ET
// sample Ids - 81649 , 77102

var spinner = "";
var compETpixSTO;

// TAKE Pixels from EXPOTASK :: compare with ExpoTask ::
// Now it is API based

$("button#compareETpix").on("click", function (e) {
  if (
    $("#ETpixTXT").val().length == 0 ||
    Number($("#ETpixTXT").val()) <= 60000
  ) {
    return;
  }
  console.log($("#ETpixTXT").val().length);
  $("button#compareETpix").prop("disabled", true); //disable button
  spinner = $(e.currentTarget).find("span");
  spinner.removeClass("d-none");
  //
  loadPixlFromET($("#ETpixTXT").val());
});

// loading pixels form ExpoTask
var _etPxls = "";

function loadPixlFromET(_etID) {
  $("div#hrline").remove();
  $("div#etPixs").remove();
  //
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    $("div#hrline").remove();
    $("div#etPixs").remove();

    console.info("API says ", this.response);

    if (this.response == "") {
      return;
    }
    var objPixel = JSON.parse(this.response);

    _etPxls = "";

    $("button#compareETpix").prop("disabled", false); //button enable
    $("#ctaGrid").css("display", "none");
    //~
    for (var i = 0; i < objPixel.length; i++) {
      //console.info( objPixel[i].event_name, " | ", objPixel[i].description);

      var temp = document.createElement("div");
      //temp.innerHTML = txt;
      //console.log(temp, temp.textContent, '..');
      _etPxls +=
        "<span class='text-liteColor'>" +
        objPixel[i].description +
        "</span><br>";
    }

    console.log("::_etPxls = ", _etPxls);

    if (_etPxls == "") {
      _etPxls = "No records available";
    }

    // Filling ExpoTask fetched pixels in list, under a div called etPixs.

    document.getElementById("compWithET").onclick = function () {
      //	close compare window
      $("#compWithET").css("display", "none");
      $("#ctaGrid").css("display", "block");
      document.getElementById("compWithET").innerHTML = "";
    };

    document.getElementById("compWithET").innerHTML +=
      "<div id='hrline'><b>:: Pixel Comparison from ExpoTask ::<br><span style='font-size:19px; color:blue'> &#9632;  </span>ClickLive<span style='font-size:19px; color:green'> &#9632; </span>IntLive<span style='font-size:19px; color:red'> &#9632; </span> Unmatched<br><br></div>";

    document.getElementById("compWithET").innerHTML +=
      "<div id='etPixs'>" + _etPxls + "</div>";

    //console.log('--> ', $('#ctaGrid').get(0).getBoundingClientRect().y);
    //.animate( properties [, duration] [, easing] [, complete] );
    // movine pixel box popup to bottom
    $("#compWithET").css("display", "block");
    $("#compWithET").animate(
      { scrollTop: $("#compWithET").get(0).getBoundingClientRect().y - 100 },
      {
        duration: 300,
        specialEasing: {
          width: "linear",
          height: "easeOutBounce",
        },
        complete: function () {
          compareETpixels($("#etPixs")); // on complete of animation.
        },
      }
    );

    //}
  }; // end of of on ready state change

  xhttp.onerror = function () {
    console.log("** An error occurred during the transaction");
  };

  xhttp.ontimeout = function () {
    console.log("ontimeout:.. ", xhttp.status);
  };
  xhttp.onprogress = function () {
    console.log("LOADING:.. ", xhttp.status);
  };

  $("#model1close").on("click", function () {
    $("button#compareETpix").prop("disabled", false);
    spinner.addClass("d-none");
  });
  //
  xhttp.open(
    "GET",
    "https://expotask.exponential.com/node/creative-request/tracking-pixels/apilist/" +
      _etID,
    true
  );
  xhttp.send();
}

//

function compareETpixels(_etPixs) {
  // console.log('Comparing ET Pixels...', _etPixs);
  //console.log(_etPixs.get(0).childNodes[0].textContent.trim() );
  //le.log('_etPixs length is ',_etPixs.get(0).childNodes.length, _etPixs);

  //// clickLive compare check
  for (let a = 0; a < _clickLiveData.length; a++) {
    for (let b = 0; b < _etPixs.get(0).childNodes.length; b++) {
      if (
        _clickLiveData[a].localeCompare(
          _etPixs.get(0).childNodes[b].textContent.trim()
        ) === 0
      ) {
        _etPixs.get(0).childNodes[b].classList.add("text-ctaETcompared");
      } else {
        ///console.log('non matched cta is -> ', _etPixs.get(0).childNodes[b].textContent.trim() );
      }
    }
  }

  //// intlive compare check --------------
  // cross examining
  for (let i = 0; i < _intLiveData.length; i++) {
    for (let j = 0; j < _etPixs.get(0).childNodes.length; j++) {
      if (
        _intLiveData[i].localeCompare(
          _etPixs.get(0).childNodes[j].textContent.trim()
        ) === 0
      ) {
        _etPixs.get(0).childNodes[j].classList.add("text-intETcompared");
      }
    }
  }

  // removing preloder
  setTimeout((_) => spinner.addClass("d-none"), 0);

  // Add check marks ✓ to main pixels list.

  //
}
///////////////// END OF Compare From ExpoTask functionality/////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// S P E C I F I C   Q C code starts here

$("#specificQcMenu").click(function () {
  $(".navbar-collapse").collapse("hide");
  //
});

$("#btnNodata").click(function () {
  //window.open('http://cdnx-mock.tribalfusion.com/mockmedia/500027002/images/no_data.jpg','_blank');
  let _mspDefaltPah = _dapiPath
    .split("assets/designer-config.js")
    .join("images/no_data.jpg");
  window.open(_mspDefaltPah, "_blank");
});

$("#btnMapDef").click(function () {
  let _mspDefaltPah = _dapiPath
    .split("assets/designer-config.js")
    .join("images/map_default.jpg");
  window.open(_mspDefaltPah, "_blank");
});

//chkbox campSpeci
//console.log($("#campSpeciSwitch1"))

$("#campSpeciSwitch1").click(function () {
  chrome.tabs.reload();
  if ($(this).prop("checked")) {
    chrome.runtime.sendMessage(
      { campSpecChkVal: "true", rollBackBtnCHK: "false" },
      function (response) {
        //console.log(response);
      }
    );
  } else {
    chrome.runtime.sendMessage(
      { campSpecChkVal: "false", rollBackBtnCHK: "false" },
      function (response) {
        //console.log(response);
      }
    );
  }
});
//
//
// mazda switches...........................................
$("#no_offers_CTASwitch").click(function () {
  chrome.tabs.reload();
  if ($(this).prop("checked")) {
    $("#no_feed_CTASwitch").prop("checked", false);
    chrome.runtime.sendMessage(
      { mazdaSpec: "true", type: "showNoOffer" },
      function (response) {
        //console.log(response);
      }
    );
  } else {
    chrome.runtime.sendMessage(
      { mazdaSpec: "false", type: "hideNoOffer" },
      function (response) {
        //console.log(response);
      }
    );
  }
});
//
$("#no_feed_CTASwitch").click(function () {
  chrome.tabs.reload();
  if ($(this).prop("checked")) {
    $("#no_offers_CTASwitch").prop("checked", false);
    chrome.runtime.sendMessage(
      { mazdaSpec: "true", type: "showNoFeed" },
      function (response) {
        //console.log(response);
      }
    );
  } else {
    chrome.runtime.sendMessage(
      { mazdaSpec: "false", type: "hideNoFeed" },
      function (response) {
        //console.log(response);
      }
    );
  }
});

//

//Download product.json to map
$("#prodJsonDownIco").click(function () {
  let _prodJsonPath = _dapiPath
    .split("assets/designer-config.js")
    .join("json/product.json");
  window.open(_prodJsonPath, "_blank");
});
//--->

//Download product.json to map like fiddler
$("#rollbackCHKbtn").click(function (e) {
  //uncheking  no_data
  $("#campSpeciSwitch1").prop("checked", false);
  $("#campSpeciSwitch2").prop("checked", false);
  //chrome.runtime.sendMessage({
  //	campSpecChkVal: 'false',
  //	rBackTXT: $("#pJosnTxt").val();
  //}, function(response) {});
  //-
  //$("#campSpeciSwitch1").click();
  chrome.tabs.reload();
  chrome.runtime.sendMessage(
    {
      rollBackBtnCHK: "true",
      campSpecChkVal: "false",
      rBackTXT: $("#pJosnTxt").val(),
    },
    function (response) {}
  );
  let spinner = $(e.currentTarget).find("span");
  spinner.removeClass("d-none");
}); //--->

// S P E C I F I C   Q C code ENDs here ...

// Verifying Path of MapDefault .. ( mainunit_970_250/images/map_default.jpg Vs images/map_default.jpg )

$("#dapiQButton").click(function (e) {
  //dapiContent
  let qcInfo = "<p><b>" + adUnitType + "</b><br></p>";

  dapiContent.split("\n").map(function (num, i, arr) {
    // Verifying noDataImage: "mainunit_ path
    if (arr[i].search("map.generateMap") != -1) {
      qcInfo += arr[i]
        .slice(arr[i].search("defaultImageURL"), arr[i].search("}"))
        .split(",")
        .join("<br>");
      if (adUnitType == "VdxConnectDesktopInframe") {
        if (arr[i].search("mainunit_") == -1) {
          qcInfo +=
            '<span class="badge badge-danger blink_me">Invalid Path!</span>';
        }
      }
      qcInfo += "<hr>";
    }
    //.>

    if (arr[i].search("console.") != -1) {
      qcInfo +=
        '<span class="badge badge-info ">' +
        (i + 1) +
        "</span>  : " +
        arr[i] +
        "<br>";
    }
  });

  //..
  $("#dapiQCresult").html(qcInfo);
});
//.>

/////////////////////// Connect with designer api js file - connectDCjs
//

$("button#connectDCjs").on("click", function (e) {
  if ($("#DCjsTXT").val() == "") {
    return;
  }

  chrome.tabs.reload();
  chrome.runtime.sendMessage(
    { connectDAPIjs: "true", desiConfJSpath: $("#DCjsTXT").val() },
    function (response) {}
  );
  //let spinner = $(e.currentTarget).find('span');
  //spinner.removeClass('d-none');
});

///////////////////////

function verifyMapDefaultPath() {
  console.log("Verifying MapDefault Path... ");
}

// end of  Verifying Path of MapDefault

// VERSION CHECK CODE STARTS HERE

//http://creative.exponential.com/creative/devshowcase/VTT/config.json

var _confJson =
  "https://creative.exponential.com/creative/devshowcase/VTT/config.json?r=" +
  new Date().getTime();

$.getJSON(_confJson, function (data) {
  //console.log(_confJson, data.releasedVersion);
  _confJsonData = data;
  if (_version != data.releasedVersion) {
    $("#toolIcon").attr("src", "images/img16_2.gif");
    $("#toolIcon").attr("title", " Click to get latest version!");
    $("#toolIconLink").attr("href", data.downloadLink);
    $("#toolIconLink").attr("target", "_blank");
    $("#toolIconLink").attr("title", " Click to get latest version!");
    $("#newVerScrolltxt").css("display", "block");

    $("#newVerScrolltxt").html(
      '<marquee class = "marquee"   behavior="scroll" width="182px" direction="left">Click here to update! Older version would not support new functionalities.</marquee>'
    );

    let _notoficationUpdateID = "newUpdate" + new Date().getTime();
    let _notoficationUpdate = {
      type: "basic",
      iconUrl: "images/warning.png",
      title: "Update Alert!",
      message:
        "Click on VTT logo to update! Older version would not support new functionalities.",
    };
    chrome.notifications.create(_notoficationUpdateID, _notoficationUpdate);
  } else {
    $("#newVerScrolltxt").css("display", "none");
  }
  //

  // Showing Alarm

  console.log("data.alarm", data.alarm.notification1.length);
  if (data.alarm.notification1.length > 0) {
    $("#alarmIcon").css("display", "block");
    $("#alarmIcon").click(function () {
      alert(data.alarm.notification1);
    });
  }
});

// version check code ends here

////

var _allJSsize = 0;
var _allJPGsize = 0;
var _allPNGsize = 0;
var _allSVGsize = 0;
var _allCSSsize = 0;
var _allGIFsize = 0;
var _allMP4size = 0;
var _allFontsize = 0;
var _totalFilesSize = 0;
var _loadedInfo = "";
//
var _allImagesArr = [];
var _allIfontsArr = [];
var _allImagesTXT = "";
var _allFontsTXT = "";
var _allFilesSize = 0;

chrome.devtools.network.onRequestFinished.addListener(function (req) {
  //	console.log("content Size =  "+req.response.content.size, ' Body size = ', req.response.bodySize , " | ",  req.request.url);
  // if(req.response.bodySize>0){
  _allFilesSize += req.response.content.size;
  //	}

  // Displayed sample TCP connection time here req.request.url /
  //if(req.response.content.mimeType.indexOf("image")!=-1){
  // return; //
  //Muse.Utils.resizeHeight
  if (
    req.request.url.indexOf("/creative") != -1 ||
    req.request.url.indexOf("970_250.html") != -1 ||
    req.request.url.indexOf("300_600.html") != -1 ||
    req.request.url.indexOf("300_250.html") != -1 ||
    req.request.url.indexOf("160_600.html") != -1 ||
    req.request.url.indexOf("728_90.html") != -1
  ) {
    if (req.request.url.indexOf(".html") != -1) {
      //  console.info(req.request.url);
      //parseCreativeHTML(req.request.url);
      parseDesignerMediaConfig(req.request.url);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////

  if (req.request.url.indexOf("demopages?published=true") != -1) {
    parseDemopagesPublished(req.request.url);
  }

  // F O N T

  if (
    req.request.url.indexOf(".ttf") != -1 ||
    req.request.url.indexOf(".woff") != -1 ||
    req.request.url.indexOf("use.typekit.net") != -1
  ) {
    //console.info(req.request.url.split("?")[0].split("/")[req.request.url.split("?")[0].split("/").length-1])

    if (req.response.content.mimeType == "text/javascript") {
      return;
    }

    let txtFONT =
      parseBytes(req.response.content.size).su +
      " | " +
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("&")[0]
        .split("?")[0]
        .slice(0, 20) +
      "<br>";

    if (req.request.url.indexOf("use.typekit.net") != -1) {
      txtFONT =
        "TypeKit Font | " + parseBytes(req.response.content.size).su + "<br>";
    }

    if (
      $("div#fontList").text().indexOf(txtFONT.split("<br>").join("")) != -1
    ) {
      return;
    }

    _allFontsize += Number(req.response.content.size);

    let _urlFontStr =
      "<a href='" +
      req.request.url +
      "'  target='_blank' title='" +
      req.request.url.split("?")[0].split("/")[
        req.request.url.split("?")[0].split("/").length - 1
      ] +
      "'>" +
      txtFONT +
      "</a>";

    //$('div#fontList').append(  );

    $("span#fontTotal").html(
      "Fonts: <br>.ttf / .woff / TypeKit <br>" + parseBytes(_allFontsize).su
    );

    //_allIfontsArr.push()

    if (_allFontsTXT.indexOf(_urlFontStr) != -1) {
      return;
    }

    _allFontsTXT += _urlFontStr;
    _allIfontsArr.push({
      u: _urlFontStr,
      s: Number(req.response.content.size),
    });
  }

  if (req.request.url.indexOf("/mockmedia/") == -1) {
    return;
  }

  // JPG
  if (req.request.url.indexOf(".jpg") != -1) {
    let txtJPG;

    if (
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 20)
        .toLowerCase()
        .indexOf("video") != -1 ||
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 25)
        .toLowerCase()
        .indexOf("poster") != -1
    ) {
      if (parseBytes(req.response.content.size).s >= 31) {
        txtJPG =
          parseBytes(req.response.content.size).su +
          " | <span class='badge badge-danger'>" +
          req.request.url
            .split("/")
            [req.request.url.split("/").length - 1].split("?")[0]
            .slice(0, 25) +
          "</span><br>";
      } else {
        txtJPG =
          parseBytes(req.response.content.size).su +
          " | <span class='badge badge-info'>" +
          req.request.url
            .split("/")
            [req.request.url.split("/").length - 1].split("?")[0]
            .slice(0, 25) +
          "</span><br>";
      }
    } else {
      txtJPG =
        parseBytes(req.response.content.size).su +
        " | " +
        req.request.url
          .split("/")
          [req.request.url.split("/").length - 1].split("?")[0]
          .slice(0, 25) +
        "<br>";
    }

    let _urlStr =
      "<a href='" +
      imageCompessUrl +
      req.request.url.split("?")[0] +
      "'  target='_blank' title='" +
      req.request.url.split("?")[0] +
      "'>" +
      txtJPG +
      "</a>";

    if (_allImagesTXT.indexOf(_urlStr) != -1) {
      return;
    }

    _allJPGsize += Number(req.response.content.size);
    $("span#jpgTotal").html(".jpg<br>" + parseBytes(_allJPGsize).su);
    _allImagesTXT += _urlStr;
    _allImagesArr.push({ u: _urlStr, s: Number(req.response.content.size) });
  }

  //  PNG
  if (req.request.url.indexOf(".png") != -1) {
    let txtPNG;
    if (
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 20)
        .toLowerCase()
        .indexOf("teaserlogo") != -1 ||
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 20)
        .toLowerCase()
        .indexOf("logosmall") != -1 ||
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 20)
        .toLowerCase()
        .indexOf("peel") != -1
    ) {
      //console.info('T or L found')
      if (parseBytes(req.response.content.size).s >= 11) {
        txtPNG =
          parseBytes(req.response.content.size).su +
          " | <span class='badge badge-danger'>" +
          req.request.url
            .split("/")
            [req.request.url.split("/").length - 1].split("?")[0]
            .slice(0, 20) +
          "</span><br>";
      } else {
        txtPNG =
          parseBytes(req.response.content.size).su +
          " | <span class='badge badge-info'>" +
          req.request.url
            .split("/")
            [req.request.url.split("/").length - 1].split("?")[0]
            .slice(0, 20) +
          "</span><br>";
      }
    } else {
      txtPNG =
        parseBytes(req.response.content.size).su +
        " | " +
        req.request.url
          .split("/")
          [req.request.url.split("/").length - 1].split("?")[0]
          .slice(0, 20) +
        "<br>";
    }

    let _urlStr =
      "<a href='" +
      imageCompessUrl +
      req.request.url.split("?")[0] +
      "'  target='_blank' title='" +
      req.request.url.split("?")[0] +
      "'>" +
      txtPNG +
      "</a>";

    if (_allImagesTXT.indexOf(_urlStr) != -1) {
      return;
    }

    _allPNGsize += Number(req.response.content.size);
    $("span#pngTotal").html(".png<br>" + parseBytes(_allPNGsize).su);

    _allImagesTXT += _urlStr;
    _allImagesArr.push({ u: _urlStr, s: Number(req.response.content.size) });
  }

  // SVG
  if (req.request.url.indexOf(".svg") != -1) {
    if (req.request.url.indexOf("/mockmedia/") == -1) {
      return;
    }

    let txtSVG =
      parseBytes(req.response.content.size).su +
      " | " +
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("?")[0]
        .slice(0, 20) +
      "<br>";

    let _urlStr =
      "<a href='" +
      req.request.url +
      "'  target='_blank' title='" +
      req.request.url +
      "'>" +
      txtSVG +
      "</a>";

    if (_allImagesTXT.indexOf(_urlStr) != -1) {
      return;
    }

    _allSVGsize += Number(req.response.content.size);
    $("span#svgTotal").html(".svg<br>" + parseBytes(_allSVGsize).su);

    _allImagesTXT += _urlStr;
    _allImagesArr.push({ u: _urlStr, s: Number(req.response.content.size) });
  }

  // GIF

  if (req.request.url.indexOf(".gif") != -1) {
    let txtGIF =
      parseBytes(req.response.content.size).su +
      " | " +
      req.request.url
        .split("/")
        [req.request.url.split("/").length - 1].split("&")[0]
        .split("?")[0]
        .slice(0, 20) +
      "<br>";

    let _urlStr =
      "<a href='" +
      imageCompessUrl +
      req.request.url.split("?")[0] +
      "'  target='_blank' title='" +
      req.request.url +
      "'>" +
      txtGIF +
      "</a>";

    if (_allImagesTXT.indexOf(_urlStr) != -1) {
      return;
    }

    _allGIFsize += Number(req.response.content.size);
    $("span#gifTotal").html(".gif<br>" + parseBytes(_allGIFsize).su);

    _allImagesTXT += _urlStr;
    _allImagesArr.push({ u: _urlStr, s: Number(req.response.content.size) });
  }
  // end of all images

  // CSS

  if (req.request.url.indexOf(".css") != -1) {
    _allCSSsize += Number(req.response.content.size);
    //$('div#cssList').append(  parseBytes(req.response.content.size).su+" | "+req.request.url.split("/")[req.request.url.split("/").length-1].split("&")[0].split("?")[0].slice(0, 14)+"<br>" )
    //$('span#cssTotal').html(".css<br>"+parseBytes(_allCSSsize).su);
  }

  if (req.request.url.indexOf(".js") != -1) {
    /*
			if(req.request.url.indexOf(".json")!=-1){return}	
			
			let txtJS = req.request.url.split("/")[req.request.url.split("/").length-1].split("&")[0].split("?")[0].slice(0, 20)+" | "+parseBytes(req.response.content.size).su+"<br>" 
			
			if( $('div#jsList').text().indexOf(txtJS.split("<br>").join(""))!=-1){return}

			_allJSsize+=Number(req.response.content.size);
			 
			$('div#jsList').append( txtJS )
			$('span#jsTotal').html(parseBytes(_allJSsize).su);

			console.log('body size ',req.response.bodySize, ' | size ', req.response.content.size, txtJS)
			*/
  }

  if (
    req.request.url.indexOf(".mp4") != -1 ||
    req.request.url.indexOf(".m4s") != -1
  ) {
    _allMP4size += Number(req.response.content.size);
    // $('div#mp4List').append(  req.request.url.split("/")[req.request.url.split("/").length-1].split("&")[0].split("?")[0].slice(0, 20)+" | "+parseBytes(req.response.content.size).su+"<br>" )
    //$('span#mp4Total').html(".mp4 / .m4s<br>"+parseBytes(_allMP4size).su);
    // console.log(req.response)
  }

  //
  //console.log(req.request.url)

  _totalFilesSize = parseBytes(
    _allJSsize +
      _allJPGsize +
      _allPNGsize +
      _allCSSsize +
      _allGIFsize +
      _allMP4size +
      _allFontsize
  );
  //document.getElementById('loadedFilesInfo').innerHTML = "<span class='badge badge-warning'>"+_totalFilesSize.su+"</span>";

  document.getElementById("loadedFilesInfo").innerHTML =
    "<span class='badge badge-warning'>" +
    parseBytes(_allFilesSize).su +
    "</span>";

  /*
  _loadedInfo =  " .jpg="+parseBytes(_allJPGsize).su+" .png="+parseBytes(_allPNGsize).su +" .gif="+parseBytes(_allGIFsize).su +" .css="+parseBytes(_allCSSsize).su +" .js="+parseBytes(_allJSsize).su +" .mp4 "+parseBytes(_allMP4size).su+" | Total = "+_totalFilesSize.su; 
*/
  // document.getElementById('totalFileSize').innerHTML = _totalFilesSize.su;

  //console.log( _loadedInfo );
  //request.response.bodySize

  showShorted();
});

//
function showFilesSize(req, _list, _totalSize, _allFILEsize) {
  let txtFile =
    req.request.url
      .split("/")
      [req.request.url.split("/").length - 1].split("?")[0]
      .slice(0, 20) +
    " | " +
    parseBytes(req.response.content.size).su +
    "<br>";

  if (_list.text().indexOf(txtFile.split("<br>").join("")) != -1) {
    return;
  }

  _list.append(
    "<a href='" + req.request.url + "'  target='_blank'>" + txtFile + "</a>"
  );
  _allFILEsize = _allFILEsize + Number(req.response.content.size);
  _totalSize.html(parseBytes(_allFILEsize).su);
}

function showShorted() {
  $("div#allImageList").empty();
  $("div#txt2").empty();

  _allImagesArr = _allImagesArr.slice(0).sort(function (a, b) {
    return a.s - b.s;
  });

  //currentValue, index, arr
  _allImagesArr.reverse();
  _allImagesArr.map(function (curr) {
    $("div#allImageList").append(curr.u);
    if (curr.s >= sizeLimit * 1024) {
      $("div#txt2").append(curr.u);
    }
  });
  ///// shorting fonts____
  $("div#fontList").empty();

  _allIfontsArr = _allIfontsArr.slice(0).sort(function (a, b) {
    return a.s - b.s;
  });

  //currentValue, index, arr
  _allIfontsArr.reverse();
  _allIfontsArr.map(function (curr) {
    $("div#fontList").append(curr.u);
    if (curr.s >= sizeLimit * 1024) {
      //$('div#txt2').append( curr.u);
    }
  });
}

function flushFilesSize() {
  _allJSsize = 0;
  _allJPGsize = 0;
  _allPNGsize = 0;
  _allSVGsize = 0;
  _allCSSsize = 0;
  _allGIFsize = 0;
  _allMP4size = 0;
  _totalFilesSize = 0;
  _allFontsize = 0;
  _loadedInfo = "";
  _allImagesArr = [];
  _allImagesTXT = "";
  _allIfontsArr = [];
  _allFontsTXT = "";

  _allFilesSize = 0;

  $("div#jpgList").empty();
  $("div#jsList").empty();
  $("div#pngList").empty();
  $("div#svgList").empty();
  $("div#gifList").empty();
  $("div#cssList").empty();
  //$('div#jsList').empty();
  $("div#mp4List").empty();
  $("div#fontList").empty();

  $("span#jpgTotal").empty();
  $("span#jsTotal").empty();
  $("span#pngTotal").empty();
  $("span#svgTotal").empty();
  $("span#gifTotal").empty();
  $("span#cssTotal").empty();
  //$('span#jsTotal').empty();
  $("span#mp4Total").empty();
  $("span#fontTotal").empty();

  $("div#totalFileSize").empty();
  $("div#allImageList").empty();
  $("div#txt2").empty();
}

/// PARSE CREATIVE.HTML file //

function parseCreativeHTML(url) {
  //console.info('parsing creative html', url)

  fetch(url) // https://cors-anywhere.herokuapp.com/
    .then((response) => response.text())
    .then((contents) => {
      //
      //dapiContent = contents;
      console.log(contents);
      if (contents.search("VDXDYN_videoContainer") != -1) {
      } else {
      }
      let extractData = contents.split("\n").map(function (num, i, arr) {
        // console.info("adUnitType = ", adUnitType )

        if (adUnitType != "VdxConnectMobileExpandable") {
          if (arr[i].search("Muse.Utils.resizeHeight") != -1) {
            //document.getElementById('bottomInfoTxt1').innerHTML+= "<span class='badge badge-danger'> Responsive Element Found </span>";
          }
        }
        //

        if (arr[i].indexOf("muse-template-version") != -1) {
          if (
            adUnitType == "VdxConnectDesktopInframe" ||
            adUnitType == "VdxConnectMobileInframe"
          ) {
            if (
              arr[i]
                .split("muse-template-version-")[1]
                .split("-->")
                .join("")
                .replace(/\s+/g, "") != "3.0.0"
            ) {
              //document.getElementById('bottomInfoTxt1').innerHTML+="<span class='badge badge-danger'> <a href='https://i.snipboard.io/cm0PbZ.jpg' target='blank' style='color:white;'>Template Version "+arr[i].split("muse-template-version-")[1].split("-->").join("")+" </a></span>&nbsp;";
            } else {
              //document.getElementById('bottomInfoTxt1').innerHTML+="<span class='badge badge-info'> Template Version "+arr[i].split("muse-template-version-")[1].split("-->").join("")+" </span>&nbsp;";
            }
          }

          if (
            adUnitType == "VdxConnectDesktopExpandable" ||
            adUnitType == "VdxConnectMobileExpandable" ||
            adUnitType == "mobileInstream" ||
            adUnitType == "desktopInstream"
          ) {
            if (
              arr[i]
                .split("muse-template-version-")[1]
                .split("-->")
                .join("")
                .replace(/\s+/g, "") != "2.0.0"
            ) {
              //document.getElementById('bottomInfoTxt1').innerHTML+="<span class='badge badge-danger'>  <a href='https://i.snipboard.io/cm0PbZ.jpg' target='blank' style='color:white;'>Template Version "+arr[i].split("muse-template-version-")[1].split("-->").join("")+" </a> </span>&nbsp;";
            } else {
              //document.getElementById('bottomInfoTxt1').innerHTML+="<span class='badge badge-info'> Template Version "+arr[i].split("muse-template-version-")[1].split("-->").join("")+" </span>&nbsp;";
            }
          }
        }
        ////
      });
      //-->
    })

    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
}

function parseDesignerMediaConfig(url) {
  let _dmcUrl =
    url.split("?")[0].split(".html")[0].split("/creative")[0] +
    "/assets/designerMediaConfig.json";
  let _mdid = url.split("?")[0].split(".html")[0].split("/creative")[0];
  _mdid = _mdid.split("/mockmedia/")[1];

  console.info("--->", document.getElementById("bottomInfoTxt1").innerText);

  if (
    document.getElementById("bottomInfoTxt1").innerText.indexOf("Media ID") !=
    -1
  ) {
    document.getElementById("bottomInfoTxt1").innerHTML = "";
  }

  document.getElementById("bottomInfoTxt1").innerHTML +=
    "<span title='Media ID' class='badge badge-warning'>Media ID : " +
    _mdid +
    "</span>&nbsp;";

  fetch(_dmcUrl)
    .then((response) => response.text())
    .then((contents) => {
      //
      let _medConf = JSON.parse(contents);

      document.getElementById("bottomInfoTxt1").innerHTML +=
        "<span title='Template Version' class='badge badge-info'>Version : " +
        _medConf.VDX.museTemplateVersion +
        "</span>&nbsp;";

      console.log(_medConf.VDX.museTemplateVersion);

      if (_demoPagePublished.data.flow === "non-muse") {
        document.getElementById("bottomInfoTxt1").innerHTML +=
          "<span class='badge badge-success'> Made In VDX Studio </span>&nbsp;";
      } else if (_demoPagePublished.data.flow === "muse") {
        document.getElementById("bottomInfoTxt1").innerHTML +=
          "<span class='badge badge-primary'> Buit in Muse </span>&nbsp;";
      }
    });
}

//

function parseDemopagesPublished(_dpUrl) {
  fetch(_dpUrl)
    .then((response) => response.text())
    .then((contents) => {
      //
      let dpUrl = JSON.parse(contents);
      _demoPagePublished = dpUrl;
      console.info(dpUrl);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function trackToGoogleSheet() {
  return;

  if (!isPageTracked) {
    console.info("tabURL ", _activeTabURL, adUnitETId);
    isPageTracked = true;
  }

  //return;
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyLK6rrDREpwZiBS6HaOeSyprANTNn8zgT_jn3-FY1SfVYeVoN_/exec";

  let item = {
    SHOWCASEURL: _activeTabURL,
    ETURL: "https://expotask.exponential.com/request/info/" + adUnitETId,
    ASSIGNEE: "n.a",
  };

  let form_data = new FormData();
  for (var key in item) {
    form_data.append(key, item[key]);
  }
  fetch(scriptURL, { method: "POST", body: form_data })
    .then((response) => console.info("Data Cautured", item))
    .catch((error) => console.error("Error!", error.message));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Google analytucs code starts here
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-166260372-1"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://ssl.google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

// END of Google analytucs

// GA, Google analytucs code starts here.............................

// Standard Google Universal Analytics code
var sc_project = 12384464;
var sc_invisible = 1;
var sc_security = "1f1f5166";

(function () {
  var stt = document.createElement("script");
  stt.type = "text/javascript";
  stt.async = true;
  stt.src = "https://www.statcounter.com/counter/counter.js";
  var stte = document.getElementsByTagName("script")[0];
  stte.parentNode.insertBefore(stt, stte);
})();

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// END of Google analytucs
