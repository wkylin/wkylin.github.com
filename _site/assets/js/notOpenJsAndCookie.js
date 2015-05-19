(function () {
    var cookieEnabled = "jsCookieTest=valid";

    function isDisableCookie() {
        document.cookie = cookieEnabled;
        return document.cookie.indexOf(cookieEnabled) == -1 ? true : false;
    }

    var flag = isDisableCookie();

    var noCookie = document.getElementById("J_notOpenCookie")
    flag ? (noCookie.style.display= "block") : (noCookie.style.display = "none");

    document.getElementById("J_notOpenJs").style.display = "none";
})();