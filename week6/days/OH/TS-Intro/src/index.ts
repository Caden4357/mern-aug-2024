console.log('Hello');

// types
type StringOrNum = string | number

type Person = {
    readonly id: number,
    name:string, 
    age:number,
    isRetired?: boolean,
    phoneNumber: StringOrNum
}

let test:any = 'something'

let age:number = 50;

let fName:string = 'Caden'

let isMarried:boolean = false;

// arrays
let names:StringOrNum[] = ['Sapphire', 'Antonio', 'Brandon', 'Paul', 8, 900]

let person1:Person = {
    id:123123123,
    name:'Bob',
    age:39,
    phoneNumber:'425-444-4444'
}
test = 12312

