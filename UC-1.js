console.log("Welcome to Clinical Management program using JavaScript")
//import the AddressRegEx.js file
var helper= require('./Regex');
    console.log(helper);
//Importing the neccessary module
let readlineSync = require('readline-sync');
const fs = require('fs')
function readfile() 
{
  let raw = fs.readFileSync('./Clinic.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./Clinic.json', data);
  
}
//Created Clinic class
class Clinic {
    //Declaring the properties
    PatientName;
    PatientId;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;
    gender;
    weight;
    bloodGroup;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.PatientName = parameters[0];
        this.PatientId = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
        this.gender = parameters[8];
        this.weight = parameters[9];
        this.bloodGroup = parameters[10];
    }

    toString() {
        return `Patient Name: ${this.PatientName}\nPatient Id: ${this.PatientId}
        \nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}
        \nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}
        \nEmail-Id: ${this.emailId}\nGender: ${this.gender}\nWeight: ${this.weight}
        \nBlood Group: ${this.bloodGroup}\n`;
    }
}
//UC3 - Initializing an Clinical Management system contact array
var clinicalManagementArr = new Array();



//UC1 - Function to return object of added contacts
function ContactAdd(PatientName, PatientId, address, city, state, zipCode, phoneNumber, emailId, gender, weight, bloodGroup) {
    let contact
    try {
        //Object for class
        contact = new Clinic(PatientName, PatientId, address, city, state, zipCode, phoneNumber, emailId, gender, weight, bloodGroup);
        let myjson = readfile();
        console.log(" before push", myjson);
        myjson.push(contact);
        console.log("Contact",contact);
        console.log("after push",myjson);
        write(myjson);
        console.log(myjson);
    } catch (e) {
        console.error(e)
    }
    //Add element in array (UC3)
    clinicalManagementArr.push(contact);
    //console.log("Contact added Succesfully!");
    return contact;
}

//Function to get the details of the contact from the user
function getDetailsOfContact() {
    try {
        //Regex patterns for validating contact details(UC2)
        //Validating first name(UC2)
        let PatientName = readlineSync.question('Enter Your PatientName : ');
        //Calling the function from AddressRegex file(UC2)
        helper.checknamePattern(PatientName);
        //Validating Patient Id(UC2)
        let PatientId = readlineSync.question('Enter Your Patient Id : ');
        helper.checkPtientIdPattern(PatientId);
          //Validating address(UC2)
        let address = readlineSync.question('Enter Your Address : ');
        helper.checknamePattern(address);
        //Validating city(UC2)
        let city = readlineSync.question('Enter Your City Name: ');
        helper.checknamePattern(city);
        //Validating states(UC2)
        let state = readlineSync.question('Enter Your State Name : ');
        helper.checknamePattern(state);
        //Validating zip code(UC2)
        let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
        helper.checkZipCodePattern(zipCode);
        //Validating weight code(UC2)
        let weight = parseInt(readlineSync.question('Enter Your Weight : '));
        //helper.checkZipCodePattern(Weight);
        //Validating phone number(UC2)
        let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
        helper.CheckphoneNumPattern(phoneNumber);
        //Validating email id(UC2)
        let emailId = readlineSync.question('Enter Your Email Id : ');
        helper.CheckemailIdPattern(emailId);
        let gender = readlineSync.question('Enter Your  Gender : ');
        //Validating blood group(UC2)
        let bloodGroup = readlineSync.question('Enter Your Blood Group : ');
        helper.CheckBloodGroupPattern(bloodGroup);
        let contactDetails = ContactAdd(PatientName, PatientId, address, city, state, zipCode, phoneNumber, emailId, gender, weight, bloodGroup);
        console.log("\n****Details Of Contacts******");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}
//UC3 - Function to display contacts
function DisplayTheContact() {
    try {
        console.log("\nContact Details Of Clinical Management System \n");
        if(clinicalManagementArr.length !=0)
        clinicalManagementArr.forEach(contact => console.log(contact.toString()));
        else
            console.log("Clinical Management System is empty")
    } catch (e) {
        console.error(e);
    }
}
//UC4 - Function to find and edit contacts based on the given name
function FindContactAndEditContact() {
    try {
        let name = readlineSync.question('Enter Your Name To View And Modify Contact : ');
        clinicalManagementArr.forEach((contact) => {
            if (contact.PatientName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: Patient Name \n2: Patient Id \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address \n9: Gender \n10: Weight \n11: Blood Group  \n12: Go Back")
                    let choice = parseInt(readlineSync.question("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newPatientName = readlineSync.question("Enter The New Patient Name : ");
                            contact.PatientName = newPatientName;
                            break;
                        case 2:
                            let newPatientId = readlineSync.question("Enter The New Patient Id : ");
                            contact.PatientId = newPatientId;
                            break;
                        case 3:
                            let newAddress = readlineSync.question("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = readlineSync.question("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = readlineSync.question("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newZipCode = readlineSync.question("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 7:
                            let newPhoneNum = readlineSync.question("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = readlineSync.question("Enter The New Email Id : ");
                            contact.emailId = newEmailId;
                            break;
                        case 9:
                                let newGender = readlineSync.question("Enter The New Gender : ");
                                contact.gender = newGender;
                                break;
                        case 10:
                                let newWeight = readlineSync.question("Enter The New Weight : ");
                                contact.weight = newWeight;
                                break;
                        case 11:
                                    let newbloodGroup = readlineSync.question("Enter The New Blood Group : ");
                                    contact.bloodGroup = newbloodGroup;
                                    break;
                        case 12:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}
//UC5 - Function to delete contact based on name
function deleteTheContact() {
    try {
        let name = readlineSync.question('Enter The Name Of The Contact To delete Contact : ');
        const index = clinicalManagementArr.findIndex((contact) => contact.PatientName == name);
        //using splice remove the element
        //if (index != -1)
           // clinicalManagementArr.splice(index, 1);
           let myjson = readfile();
            for (let i=0; i < myjson.length; i++){
                if(myjson[i].PatientName == name){
                    myjson.splice(i,1);
                    console.log("Contact Deleted");
                    break;
                }
            }
            write(myjson);
            console.log(myjson);
    } catch (e) {
        console.error(e);
    }
}
//UC6 - Function to count contact in addressbook
function ContactTheCount() {
    try {
        let countContact = clinicalManagementArr.reduce((contact) => contact + 1, 0)
        console.log(`Total Number Of Contacts are : ${countContact}`);
    } catch (e) {
        console.error(e);
    }
}
//UC8 - Function to seach person in a particular city or state
function seachPersonByCityOrState(city, state) {
    let cityOrState = readlineSync.question("Enter A City Or State Name To Find Person : ");
    let contact = clinicalManagementArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
    console.log(contact.join("\n"));
}
//Function to perform addressbook operations(UC3)
function OperationOfClinicalManagement() {
    try {
        //Default contacts
        ContactAdd("Vedika Manapure", "1234", "Kothali", "Nagpur", "Maharastra", "591287", "91 8971615536", "guruprasad@gmail.com", "male", "12", "B+");
        ContactAdd("Ashwini Manapure", "3456", "Jyotiba", "Latur", "Maharastra", "789456", "91 9087654321", "guru@gmail.com", "male", "45", "A+");
        while (true) {
            console.log("\n0: Exit \n1: Add New Contact  \n2: Display contacts \n3: Edit contact by name \n4: Delete contact \n5: Contacts count \n6: Search Person by city or state");
            switch (parseInt(readlineSync.question('Enter the choice : '))) {
                case 0:
                    console.log("Exited");
                    process.exit(1)
                    break;
                case 1:
                    getDetailsOfContact();
                    break;
                case 2:
                    DisplayTheContact();
                    break;
                case 3:
                    FindContactAndEditContact();
                    break;
                case 4:
                    deleteTheContact();
                    break;
                case 5:
                    ContactTheCount();
                        break;
                case 6:
                    seachPersonByCityOrState();
                        break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

//Calling the function
OperationOfClinicalManagement();  



////////////////////////////////////////////////////////



