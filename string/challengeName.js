function username(name) {
    name = name.trim();
    let firstSpace = name.indexOf(" ");
    if(firstSpace < 0){
        return name;
    }

    let firstName = name.slice(0, firstSpace);
    let nickName = name.slice(firstSpace + 1)

    return `${nickName}, ${firstName}`
}

console.log(username(" daniel"));
console.log(username(" daniel benedito"));
console.log(username(" daniel benedito da silva"));