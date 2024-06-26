const resultid=document.getElementById("result");
const generateId=document.getElementById("generate");
const lengthId=document.getElementById("length");
const uppercaseid=document.getElementById("uppercase");
const lowercaseid= document.getElementById("lowercase");
const symbolid = document.getElementById("symbols");
const numbersbyid=document.getElementById("number")
const clipboardid = document.getElementById("clipboard");
const errorid = document.getElementById("ShowError");


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

generateId.addEventListener("click",()=>{
    console.log("CLICKED");
    resultid.style.color ="black";
    const length = lengthId.value;
    const lower = lowercaseid.checked;
    const upper = uppercaseid.checked;
    const number = numbersbyid.checked;
    const symbol = symbolid.checked;
    const password = generatePassword(length,lower,upper,number,symbol);
    resultid.innerHTML = password

});

function getRandomChar(CharSet) {
    const randomIndex = Math.floor(Math.random()*CharSet.length);
    return CharSet.charAt(randomIndex);
}

function generatePassword(length,useLowercase,useUppercase,useNumber,useSpecialChars) {
    let CharSet ='';
    if (length<4 || length>20) {
        errorid.style.color ="red"
          errorid.innerHTML ='You must choose only length between 4 and 20 for the password.!!'
          return'';
    }
    if(useLowercase) CharSet += lowercaseChars;
    if(useUppercase) CharSet += uppercaseChars;
    if(useNumber) CharSet += numericChars;
    if(useSpecialChars) CharSet += specialChars;

        if(CharSet === ''){
          errorid.style.color ="red"
          errorid.innerHTML ='You must select at least one character set for the password.!!'
          return'';
  
        }
        let password = "";
        for(let i=0; i<length;i++){
            const randomChar = getRandomChar(CharSet)
            password += randomChar;
        }
        errorid.innerHTML=""
         resultid.style.background="transparent";
         return password;
    }
    
    clipboardid.addEventListener("click",()=>{
        console.log(resultid.innerHTML);
        if(resultid.includes(" ") || resultid.innerHTML==="")return;
        resultid.style.background ='#12qwebbio'
        errorid.innerHTML ='copied'
        errorid.style.color ="green"
        navigator.clipboard.writeText(resultid.textContent)

    });

