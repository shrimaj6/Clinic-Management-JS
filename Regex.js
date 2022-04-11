// module.exports = {
//     checknamePattern(value){
//        let nameRegEx = RegExp('^[A-za-z\\s]{4,}$')
//            if(!nameRegEx.test(value))
//              throw 'Error!! Invalid Value';
//        },

//        checkZipCodePattern(value){
//        let zipCodeRegEx = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$')
//        if(!zipCodeRegEx.test(value))
//              throw 'Error!! Invalid Value';
//        },

//        CheckphoneNumPattern(value){
//            let phoneNumRegEx = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$')
//            if(!phoneNumRegEx.test(value))
//                  throw 'Error!! Invalid Value';
//        },

//        CheckemailIdPattern (value){
//            let emailIdmRegEx = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
//            if(!emailIdmRegEx.test(value))
//                  throw 'Error!! Invalid Value';
//        }
//    }


///////////////////////////////////////////////////////////




module.exports = { 
    // let namePattern = new RegExp('^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$');
    // let patientIdPattern = new RegExp('^[6-9]{1}[0-9]{9}$');
    // let addressPattern = new RegExp('^[a-zA-z0-9#,]{4,}$');
    //  let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
    // let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
    // let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})$');
    // let bloodGroupPattern = new RegExp('(A|B|AB|O)[+-]');
    checknamePattern(value){
       let nameRegEx = new RegExp('^[A-za-z\\s]{4,}$')
           if(!nameRegEx.test(value))
             throw 'Error!! Invalid Value';
       },

       checkPtientIdPattern(value){
        let patientIdRegEx = new RegExp('^[0-9]*$')
            if(!patientIdRegEx.test(value))
              throw 'Error!! Invalid Value';
        },
      //   CheckWeightPattern (value){
      //       let weightRegEx = new RegExp('((\d*\.?\d+)\s*(lbs|kgs)|(\d\.?\d\d+)\s*(grams))\b/i')
      //       if(!weightRegEx.test(value))
      //             throw 'Error!! Invalid Value';
      //   },

       checkZipCodePattern(value){
       let zipCodeRegEx = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$')
       if(!zipCodeRegEx.test(value))
             throw 'Error!! Invalid Value';
       },

       CheckphoneNumPattern(value){
           let phoneNumRegEx = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$')
           if(!phoneNumRegEx.test(value))
                 throw 'Error!! Invalid Value';
       },

       CheckemailIdPattern (value){
           let emailIdmRegEx = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})$');
           if(!emailIdmRegEx.test(value))
                 throw 'Error!! Invalid Value';
       },

       CheckBloodGroupPattern (value){
        let bloodGroupRegEx = new RegExp('(A|B|AB|O)[+-]')
        if(!bloodGroupRegEx.test(value))
              throw 'Error!! Invalid Value';
    }
   }

/////////////////////////////////////////////////////////////////////


