const str = "global string"

function test () {
    const str = "casa "
    console.log(str)
    console.log(this)
}

const test2 = () => {
    console.log("arrow function")
    console.log(this);
}

const obj = {
    foo:"bar",
    test,
    test2
}

obj.test()
obj.test2()