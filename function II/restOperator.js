// eu deve colocar o rest operator com ultimo parametro
function  test(n1, n2, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(ns)
    console.log(ns.map)
    console.log(typeof ns)
}

test(1,2,3,4,5,6,7,8,9)