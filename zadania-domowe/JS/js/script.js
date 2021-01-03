// console.log("Moje imię to Krzysztof");
//
let name = [''];
let strName = "akademia108";
let rev = name.reverse();
let strArray = rev.join('');


console.log(strArray);

const reverseString = (str) => {
    let strArray = str.split('');
    let rev = strArray.reverse();
    let returnString = rev.join("");
    return returnString;

}


console.log(reverseString(strName));

/* console.log(reverseString(strName));
console.log(reverseString(strName2));  */