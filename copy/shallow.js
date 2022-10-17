const n = {
    n:1,
    p:2,
    d: {
        a: 2
    }
}

// const m = Object.assign({},n)
function test(obj) {
    let single = obj
    single.a = 2
    return single
    
}
const tt = test(n)

// const m = {...n}
// const m = JSON.parse(JSON.stringify(n)) // dont use this
// m.d.a=5
// m.a=6

console.table(n);
console.table(tt);
