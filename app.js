function password (){
    let upercase = ["A","B","C","D","E,","F"];
    let lowercase = ["a","b","c","m","n","z"];
    let symbols = ["!","@","$","#","%","^","&"];
    let number1 = Math.floor(Math.random()*8);
    let number2 = Math.floor(Math.random()*8);
    let number3 = Math.floor(Math.random()*8);
    let number4 = Math.floor(Math.random()*8);
    let number5 = Math.floor(Math.random()*8);
    let password = `${upercase[number5]}${number1}${symbols[number2]}${lowercase[number4]}${number3}} `
    const showPassword = document.querySelector("h2");
    showPassword.innerHTML = password;
}