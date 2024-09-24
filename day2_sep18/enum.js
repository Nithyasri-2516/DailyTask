var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
console.log(Month);
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Feb));
console.log(isItSummer(6));
var Month1;
(function (Month1) {
    Month1[Month1["Jan"] = 1] = "Jan";
    Month1[Month1["Feb"] = 2] = "Feb";
    Month1[Month1["Mar"] = 3] = "Mar";
    Month1[Month1["Apr"] = 4] = "Apr";
    Month1[Month1["May"] = 5] = "May";
    Month1[Month1["Jun"] = 6] = "Jun";
    Month1[Month1["Jul"] = 7] = "Jul";
    Month1[Month1["Aug"] = 8] = "Aug";
    Month1[Month1["Sep"] = 9] = "Sep";
    Month1[Month1["Oct"] = 10] = "Oct";
    Month1[Month1["Nov"] = 11] = "Nov";
    Month1[Month1["Dec"] = 12] = "Dec";
})(Month1 || (Month1 = {}));
;
console.log(Month1);
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var request = {
    id: 1,
    status: ApprovalStatus.rejected,
    description: 'Please approve this request'
};
if (request.status == ApprovalStatus.rejected) {
    // send an email
    console.log('Send email to the Applicant...');
}
else {
    console.log('error');
}
