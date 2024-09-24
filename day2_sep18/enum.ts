enum Month {
    Jan, Feb, Mar,Apr,May,Jun,Jul,Aug,Sep, Oct, Nov,Dec
};
console.log(Month);

function isItSummer(month: Month) {
    let isSummer: boolean;
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
  console.log(isItSummer(2)); 


  enum Month1 {
    Jan = 1,  //Numeric Enums - Initialized
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
console.log(Month1);


enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected,
};
enum id_2{
    one,two,three,
};
const request =  {
    id:id_2.one,
    status: ApprovalStatus.rejected,
    description: 'Please approve this request'
};

if(request.status == ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
else{
    console.log('error');
    
}
if(request.id == id_2.one){
    console.log('success');
    
}