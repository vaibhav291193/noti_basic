function openNotification(snackBarType, showCloseButton) {

    /****************************
     * Do not exceed limit of 60 characters. See Mercury for details.
    *****************************/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);                   
    if (isMobile) {
        charLimit = 70;
        classToSelect = '.mobile';
    }
    else {
        charLimit = 130;
        classToSelect = '.desktop';
    }
    /****************************
     * END
    *****************************/

    if (showCloseButton == false) {
        if (snackBarType != 'error') {
            const makeSelector = '#' + snackBarType + 'btn .text p' + classToSelect;
            document.querySelector(makeSelector).innerHTML = document.querySelector(makeSelector).innerHTML.substr(0, charLimit);
        }
        document.getElementById(snackBarType + 'btn').classList.add('show');
        setTimeout(function () { document.getElementById(snackBarType + 'btn').classList.add('showTransition') }, 10);        
    }
    else {
        if (snackBarType != 'error') {
            const makeSelector = '#' + snackBarType + 'Closebtn .text p' + classToSelect;
            document.querySelector(makeSelector).innerHTML = document.querySelector(makeSelector).innerHTML.substr(0, charLimit);
        }
        document.getElementById(snackBarType + 'Closebtn').classList.add('show');
        setTimeout(function () { document.getElementById(snackBarType + 'Closebtn').classList.add('showTransition'); }, 10);
    }


    /* For links */
    document.querySelectorAll('a, [role="button"], [type="button"], [type="submit"], [type="reset"]').forEach(function (el) {
        // Add event listeners to the various buttons
        el.addEventListener('click', ButtonEventHandler);
        el.addEventListener('keyup', ButtonEventHandler);
        el.addEventListener('blur', ButtonEventHandler);
    });
}
function closeNotification(alertId) {
    document.getElementById(alertId).classList.add('hideTransition');
    setTimeout(function () { document.getElementById(alertId).classList.remove('show'); document.getElementById(alertId).classList.remove('showTransition'); document.getElementById(alertId).classList.remove('hideTransition'); }, 1000);
}



/* Links */

function ButtonEventHandler(event) {
    console.log(event)
    var type = event.type;
    if (type === 'keyup') {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.target.classList.remove('by-keyboard');
            event.preventDefault();
        }
        else if (event.keyCode === 9) {
            event.target.classList.remove('by-keyboard');
        }
    } else if (type === 'click') {
        event.target.classList.add('by-keyboard');
    }
    else if (type === 'blur') {
        event.target.classList.add('by-keyboard');
    }
}