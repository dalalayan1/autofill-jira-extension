chrome.runtime.onMessage.addListener(function(request, sender,   sendResponse) { 

    const { data } = request;
    

    for(var key in data) {
        if (data[key]["type"] === 'submit') {
            document.querySelector(key).click();
            // sendResponse({statusText: "Creating ticket..."})
        }
        else {
            document.querySelector(key)[data[key]["type"]] = data[key]["content"];
        }
    }

});