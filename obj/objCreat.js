const userObj = {
    fName:'Naveen',
    lName:'Dwivedi',
    flName:'Naveen Dwivedi'
}

function UserCreator(fName,lName) {
    this.fName = fName
    this.lName = lName
    this.flName=function(){
        return this.fName + " " + this.lName
    }
}

const test = new UserCreator('Naveen')
test.fName = 'Navin'

console.table(userObj.flName)
console.table(test.flName())
