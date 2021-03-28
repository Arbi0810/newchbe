var reg;
var sub;
var isSubscribed = false;
var subscribeButton = document.querySelector('button');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js?v=17').then(function() {
    return navigator.serviceWorker.ready;
  }).then(function(serviceWorkerRegistration) {
    reg = serviceWorkerRegistration;

    
    
    reg.pushManager.subscribe({userVisibleOnly: true}).
  	then(function(pushSubscription){
      sub = pushSubscription;

      var partsOfEndpoint = sub.endpoint.split('/');
      var oReq = new XMLHttpRequest();
      link_to_subscribe = "https://api.pushinstruments.com/global/register/?key=U4kPZVbo2HXPqmqOZX0lOwFzxA22NZhC&client=trattoriabuongiorno.ro&action=subscribe&endpoint="+nxtBase64EncodeUrl(btoa(sub.endpoint))+"&token="+partsOfEndpoint.pop();
      oReq.open("GET", link_to_subscribe);
      oReq.send();
      oReq.onreadystatechange = function () {
          if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
            // window.close();
          }
      };
    });
    
    

    
    
  }).catch(function(error) {
  });
}

function nxtBase64EncodeUrl(str){
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}