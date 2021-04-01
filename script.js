
// Arrays
const programmers = [];
programmers[0] = "Bill";
programmers[1] = "Mark";
programmers[2] = "Elon";
programmers[1] = "Alan";
programmers.shift();// remove Items

console.log(programmers);

const myCompanies = ["grab", "vingroup"];
const theirCompanies = ["microsoft", "facebook"];

const techCompanies = myCompanies.concat(theirCompanies);// .concat: function to add Arrays

console.log(techCompanies);

//Object
const mark = {};

mark.name = "Mark Zuckerberg";
mark.company = "Google";
mark["company"] = "Facebook"; // 2nd way to set property on object
mark.age = 18;
mark.city = "San Francisco";

console.log(mark);
// different way to define objects 
// define it in the opening and closing bracket.
const elon = {
    age: 33,
    city: 'Austin',
    name: 'Elon Musk',
    companies: ['Space-X', 'Tesla', 'CoderSchool'],
  }
  
  function isAnAdult(person) {
    if (person.age > 17) {
      console.log("Is adult!");
    }
  }
  
  isAnAdult(mark);
  console.log(elon);
////////// Fuction for Object/////////

//Exercise
  const charles  =
{
    name: 'Charles',
    company: 'CoderSchool',
}

function isCoderSchoolStaff(person) {
    if (person.company === "CoderSchool")
      console.log(person.name + " " + "Is working at CoderSchool!");
    else 
    console.log(person.name +  " " + "Is not working at CoderSchool");  }
  isCoderSchoolStaff(elon);
  isCoderSchoolStaff(charles); 

function describePerson (person)
{
    console.log(person.name);
    console.log(person.company);
    console.log(person.age);
}
describePerson(mark);

function logLastName(person)

{
 var details=[]
 var details=person.name.split(' ');
 console.log("Last Name: " + details[1]);
}
logLastName(mark);

  