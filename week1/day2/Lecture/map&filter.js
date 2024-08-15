const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]

// map and filter at their core loop through an array (start to finish) and return a new array following the given instructions 
// const result1 = nums.map(function(num, idx, array){

// })
const result = nums.map(num => num*90)
console.log(result);
// const multiplyArray = arr => {
//     let result = []
//     for(var idx = 0; idx < arr.length; idx++){
//         let num = arr[idx]
//         result.push(arr[idx]*2)
//     }
//     return result
// }
const evenNums = nums.filter(num => num % 2 == 0)
console.log(evenNums);

const nbaAthletes = [
    {id:1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id:2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id:3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id:4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id:5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id:6, name:'Mike James', league:'Euro',  position: 'Point Guard', active:true },
]
// an array of athletes that are point guards 
const pointGuards = nbaAthletes.filter(athlete => athlete.position === "Point Guard")
// console.log(pointGuards);

const justNames = nbaAthletes.map(athlete => athlete.name).filter(athleteName => athleteName !== "Damian Lillard")
console.log(justNames);

const justNamesAndLeague = nbaAthletes.map(athlete => {
    return {
        name:athlete.name,
        league:athlete.league
    }
})

// console.log(justNamesAndLeague);


const justNamesAndLeagueAntonio = nbaAthletes.map(athlete => ({ name: athlete.name, league: athlete.league })); 
console.log(justNamesAndLeague);