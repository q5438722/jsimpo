(function(scripts) {
	scripts['evolv_alwaysExecute_1'] = function anonymous(
) {
var url = 'https://rat.rakuten.co.jp'
function logRender(e) {
  console.info('[evolv] render', e)
  window.evolv.runtime.then(function(runtime) {
    console.info('[evolv] runtime available')

    var userId = runtime._audienceContext.cookie['evolv:uid'];
    var candidateId = e.planId.split(':')[0]
    var experimentId = e.planId.split(':')[1]
    var data = {
        "acc": 1462,
        "aid": 1,
        "etype": "async",
        "cp": {
            "userid": userId,
            "experimentid": experimentId,
            "candidateid": candidateId
        }
    };
    try {
        fetch(url, {
            method: 'POST',
            body: 'cpkg_none=' + JSON.stringify(data),
            //mode: 'cors',
            headers: {
            //    'Content-Type': 'application/json'
            }
        });
    } catch (error) {
    console.error('Error:', error);
    }  
  });
}

window.evolv.on('rendered', logRender);

};
})(window.evolv.scripts);