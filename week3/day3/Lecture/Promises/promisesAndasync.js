
// ! Syncronous code example

const fetchDataSync = (url) => {
    if (url === 'https://api.example.com/data') {
        return {
            status: 200,
            data: { response: 'Successful data' }
        }
    } else {
        return {
            status: 404,
            data: { error: 'Error, data not found' }
        }
    }
}

console.log(fetchDataSync('https://api.example.com/data')); // stop here wait for it to complete before moving on in the program
console.log('This will run after the function is completed');








// ! Asyncronous code example

let trashGotTakenOut = true

const checkTheTrash = new Promise( function(resolve, reject) {
    if (trashGotTakenOut) {
        resolve('Thanks for taking out the trash')
    }
    else {
        reject('You didnt take out the trash 😢')
    }
})

checkTheTrash
    .then((response) => console.log('LINE 42: ', response))
    .catch((error) => console.log(error))




console.log('LINE 48: This will run before the promise is resolved or rejected because it is asyncronous');



let state = '';
let errorState = ''


const secretClub = new Promise((resolve, reject) => {
    let password = 'I love sports'
    if (password === 'I love anime') {
        resolve('That is the secret word welcome to animeClub')
    } else {
        reject('Sorry that is incorrect you cannot enter the secret club')
    }
})

secretClub
    .then((response) => {
        console.log(response)
        state = response
    })
    .catch((err) => {
        console.log(err)
        errorState = err
    })
console.log(state);
console.log(errorState);







const takeOrder = (order, menu) => {
    return new Promise((resolve, reject) => {
        if (menu.includes(order)) {
            resolve(`Order Up! Here is your ${order}`)
        }
        else {
            reject(`Sorry we dont have ${order}`)
        }
    })
}
const menu = ['pizza', 'pasta', 'salad', 'soup', 'sandwich', 'steak']
takeOrder('enchilada', menu)
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log('This will run before the promise is resolved');



const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            if (url === 'https://api.example.com/data') {
                resolve({
                    status: 200,
                    data: [
                        {
                            name: 'Bob',
                            email: 'bob@aol.com',
                            password: '123!@$@SGgwgw4Q#4532FWf34f43rf',
                        },
                        {
                            name: 'Stacy',
                            email: 'stacy@aol.com',
                            password: '345!@$@SGgwgw4Q#4532FWf34f43rf',
                        },
                        {
                            name: 'Uriah',
                            email: 'uriah@aol.com',
                            password: '456!@$@SGgwgw4Q#4532FWf34f43rf',
                        },
                    ]
                });
            } else {
                reject({
                    status: 404,
                    data: { error: 'Error, data not found' }
                });
            }
        }, 2000); // Simulates a 2 seconds delay
    });
}


fetchData('https://api.example.com/data')
    .then((res) => {
        console.log(res.data);
        setPokemon(res.data)
    })
    .catch((err) => console.log(err))
console.log('This will run before the promise is resolved');













const handleData = async () => {
    try {
        const response = await fetchData('https://api.example.com/data');
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

handleData();

