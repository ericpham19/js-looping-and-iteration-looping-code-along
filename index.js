// Code your solutions in this file
function writeCards(name, surprise){
    let birthdayReply = [];
    for (let i = 0 ; i < name.length; i++){
    let reply = (`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
    birthdayReply.push(reply);
}
    return birthdayReply;
}


function countDown(num){
    let countUp= 10 ;
    while ( countUp >= 0) {
        console.log (countUp--)


    }
    
}