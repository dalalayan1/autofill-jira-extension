const formData = {
    "#summary": {
        'type': 'value',
        'content': 'Credit WebApp Deployment(Credit Card frontend deployment)'
    },
    "#description": {
        'type': 'value',
        'content': `
            https://orchestrator.corp.olacabs.com/#/orch/apps/applicationDetails/5390

            Please find the SPOC details below:
            SPOC
            Dev: Ayan Dalal / Gaurav Verma
            QA: PavanKumar VT, Gaurav Kumar
        `
    },
    "#customfield_11608": {
        'type': 'value',
        'content': '12833'
    },
    "#customfield_11607": {
        'type': 'value',
        'content': '12832'
    },
    "#customfield_11609": {
        'type': 'value',
        'content': '12837'
    },
    "#customfield_11605": {
        'type': 'value',
        'content': '12829'
    },
    "#customfield_11610": {
        'type': 'value',
        'content': '0.0.0'
    },
    "#customfield_11611": {
        'type': 'value',
        'content': '0.0.1'
    },
    "#customfield_11401-2": {
        'type': 'checked',
        'content': 'true'
    },
    "#customfield_10737-2": {
        'type': 'checked',
        'content': 'true'
    },
    ".items": {
        'type': 'innerHTML',
        'content': `
        <li class="item-row" id="item-row-1" role="option" aria-describedby="label-0">
            <button type="button" tabindex="-1" class="value-item">
                <span><span class="value-text">credit-webapp</span></span>
            </button>
            <em class="item-delete" aria-label=" " original-title=""></em>
        </li>
        `
    },
    "#issue-create-submit": {
        'type': 'submit'
    }
}



// window.onload=function(){

//     document.getElementById('submitForm').addEventListener('click',function(){

//         formData["#customfield_11610"]["content"] =  document.getElementById("current_version").value || formData["#customfield_11610"]["content"];
//         formData["#customfield_11611"]["content"] = document.getElementById("rollback_version").value || formData["#customfield_11610"]["content"];

//         chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//             document.getElementById("status").textContent = "Filling form...";
//             chrome.tabs.sendMessage(tabs[0].id, {data: formData}, function(res) {
//                 document.getElementById("status").textContent = res.statusText;
//             });

//         }); 
   
//     });
   
// }

chrome.browserAction.onClicked.addListener(function(currTab){
    console.log("INFO ABOUT CURRENT TAB :");
    console.log(currTab);
    chrome.tabs.sendMessage(currTab.id, {data: formData});
});