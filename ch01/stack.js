const name = 'naveen'
let mm = 1
function test() {
    let nn = 22
    function kk() {
        nn++
        mm++
        console.log({nn,mm});
        return nn
    }
    return kk
}
const tt = test()
const pp = test()
tt() //23 //2
tt() //24 //3
tt() //25 //4
pp() //23 //5