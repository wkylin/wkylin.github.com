(function () {
    var cookieEnabled = "jsCookieTest=valid";

    function isDisableCookie() {
        document.cookie = cookieEnabled;
        return document.cookie.indexOf(cookieEnabled) == -1 ? true : false;
    }

    var flag = isDisableCookie();

    if (flag) {
        document.getElementById("J_notOpenCookie").style.display = "block";
    } else {
        document.getElementById("J_notOpenCookie").style.display = "none";
    }

    document.getElementById("J_notOpenJs").style.display = "none";
})();