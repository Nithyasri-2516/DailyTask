
//read-only

interface Person {
   // readonly ssn: string;
    firstName: string;
    lastName: string;
  }
  
  let person: Person;
  person = {
    //ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe',
  };

  //error TS2540: Cannot assign to 'ssn' because it is a read-only property.

