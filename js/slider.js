var popup = chrome.extension.getURL("src/browser_action/browser_action.html");

if (!$("#zillowExtensionIframe").length) {

    var iframe = $("<iframe style='position:fixed; border-radius:4px; box-shadow:0 3px 10px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);  width:430px; overflow-x:hidden; overflow:hidden;border:1px solid #ddd; border-top-color:#3576E8; height:98%; z-index:99999999999999999999999999999999999999999999999; top:5px; overflow-x:hidden; right:12px' id='zillowExtensionIframe' src='" + popup + "'> </iframe>");
    $("body").append(iframe);



    iframe.on("load", function() {

    })
} else {
    $("#zillowExtensionIframe").remove();
}