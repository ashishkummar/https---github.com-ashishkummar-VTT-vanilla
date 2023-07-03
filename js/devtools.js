console.log('Devtool panel loaded');

// Creating pannel..

let _activeTabID= "vdxDevtools"
let _activeWinID="_win";
let _activeTabURL="";

chrome.windows.getCurrent(function(w) {
    _activeWinID+=w.id;
    console.log("Active win id~ ", w.id);
    
})
//
chrome.tabs.query({active:true, windowType:"normal", currentWindow: true},function(tabs){	
   // console.log(" TAB ", tabs[0].id);	
    _activeTabID +=  tabs[0].id;	
    _activeTabID +=_activeWinID;    	
     console.log('Active tab id in dev tool js is : ', _activeTabID );	
}) 

//

chrome.devtools.panels.create("[ VDX Tester Tool ]", 'images/img16.png', '/panel.html', function(extensionPanel) {
    
	var _window; // Going to hold the reference to panel.html's `window`
    var data = [];

    _activeTabID= "vdxVTTtool" ; // hardcoded

     var port = chrome.runtime.connect({name: _activeTabID});  // dynamic
     
     //var port = chrome.runtime.connect({name: "vdxVTTtool"});  // hardcoded
        port.onMessage.addListener(function(msg) {
        // Write information to the panel, if exists.
        // If we don't have a panel reference (yet), queue the data.
        

        try {
            if (_window) {
                _window.do_something(msg);
            } else {
                data.push(msg);
            }
          }
          catch(err) {
            console.log('errInfo ', err, "msg  = ", msg)
          }


    });
	
	// ON SHOWING OF PANNEL..._____________________________________________________________________________

    extensionPanel.onShown.addListener(function tmp(panelWindow) {
       // console.info("panel open ");
       // || (tabs[0].url).indexOf("creative.vdx.tv/internal")!=-1 || (tabs[0].url).indexOf("creative.vdx.tv/mock")!=-1 
       chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            if((tabs[0].url).indexOf("creative.vdx.tv")!=-1 || (tabs[0].url).indexOf("vdx.exponential.com")!=-1 ){
                chrome.tabs.reload();
              //chrome.tabs.reload(tabs[0].id);

        }
    });
      
          extensionPanel.onShown.removeListener(tmp); // Run only once. 

        _window = panelWindow;

        // Release queued data
        var msg;        
        while (msg = data.shift()) 
            _window.do_something(msg);            
            // Just to show that it's easy to talk to pass a message back:        
            _window.respond = function(msg) {
               port.postMessage(msg);
            };
            //
        });

    //    
    extensionPanel.onHidden.addListener(function tmp(panelWindow) {
        console.log('Pannel Hidden');
        // chrome.browserAction.setBadgeText({text: 'x' });
       // chrome.runtime.sendMessage({panelStatus: "close" }, 
        //function(response) {
	 	   //console.log('ace editor send text response ', response);
	   // });
        
    });

});



