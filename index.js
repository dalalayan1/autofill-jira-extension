const formData = {
    "#summary": "Credit WebApp Deployment(Credit Card frontend deployment)",
    "#description": `
        https://orchestrator.corp.olacabs.com/#/orch/apps/applicationDetails/5390

        Please find the SPOC details below:
        SPOC
        Dev: Ayan Dalal / Gaurav Verma
        QA: PavanKumar VT, Gaurav Kumar`,
    "#customfield_11608": "12833",
    "#customfield_11607": "12832",
    "#customfield_11609": "12837",
    "#customfield_11605": "12829",
    "#customfield_11610": "0.0.0",
    "#customfield_11611": "0.0.1",
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



window.onload=function(){

    document.getElementById('submitForm').addEventListener('click',function(){
        
        formData["#customfield_11610"] =  document.getElementById("current_version").value || formData["#customfield_11610"];
        formData["#customfield_11611"] = document.getElementById("rollback_version").value || formData["#customfield_11610"];

        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id, {data: formData});

        }); 
   
    });
   
}