var pushId = "web.ro.trattoriabuongiorno";

var checkRemotePermission = function (permissionData) {
    "use strict";
    
    if (permissionData.permission === 'default') {
        // console.log("The user is making a decision");
        window.safari.pushNotification.requestPermission(
            'https://www.trattoriabuongiorno.ro/pushinstruments/safari',
            pushId,
            {"uid" : "trattoriabuongiorno"},
            checkRemotePermission
        );
    }
    else if (permissionData.permission === 'denied') {
        // console.dir(arguments);
    }
    else if (permissionData.permission === 'granted') {
        // console.log("The user said yes, with token: "+ permissionData.deviceToken);
    }
};

var pushNotification = function () {
    "use strict";
    
    if ('safari' in window && 'pushNotification' in window.safari) {
        var permissionData = window.safari.pushNotification.permission(pushId);
        checkRemotePermission(permissionData);
    } else {
        // alert("Please use safari.");
    }
};

    pushNotification(); 
