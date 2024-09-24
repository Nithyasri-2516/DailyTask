var day = "monday";
switch (day) {
    case day = "sunday":
        console.log("its sunday");
        break;
    case day = "monday":
        console.log("its monday");
        break;
    default:
        console.log("wrong");
        break;
}
var browser;
(function (browser) {
    browser["Chrome"] = "chrome";
    browser["Firefox"] = "firefox";
    browser["edge"] = "edge";
})(browser || (browser = {}));
;
var browserName = browser.Chrome;
switch (browserName) {
    case browser.Firefox:
        console.log("launchfirefox");
        break;
    case browser.Chrome:
        console.log("launch chrome");
        break;
    default:
        console.log("wrong");
        break;
}
var month = 4, year = 2040;
var day1 = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day1 = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day1 = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
            day1 = 29;
        else
            day1 = 28;
        break;
    default:
        throw Error('Invalid month');
}
console.log("The month ".concat(month, " in ").concat(year, " has ").concat(day1, " days"));
