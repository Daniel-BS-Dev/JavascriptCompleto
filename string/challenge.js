let phone1 = "91234-2345"    // 9****-**45
let phone  = "1234-2345"// 1***-**45

function  hidePhone(number) {
    let catchingposition = number.indexOf("-");
    let numberStart = number.slice(0, catchingposition);
    let numberEnd = number.slice(catchingposition + 1);
    let lastNumber = numberEnd.slice(-2);

    return `${numberStart[0].padEnd(numberStart.length, "*")}-${lastNumber.padStart(numberEnd.length,"*")}`
}

console.log(hidePhone(phone1));