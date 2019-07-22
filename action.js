chrome.runtime.onMessage.addListener(function(request, sender,   sendResponse) { 

    const { data } = request;
    

    for(var key in data) {
        if(typeof data[key] === "object") {
            if (data[key]["type"] === 'submit') {
                document.querySelector(key).click();
            }
            else {
                document.querySelector(key)[data[key]["type"]] = data[key]["content"];
            }
        }
        else {
            document.querySelector(key).value = data[key];
        }
    }

});