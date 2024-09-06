// ! Asyncronous code examples

let trashGotTakenOut = false

const takeOutTheTrash = new Promise((resolve, reject) => {
    if (trashGotTakenOut) {
        resolve('Thanks for taking out the trash')
    }
    else {
        reject('You didnt take out the trash 😢')
    }
})




// handling promises with .then & .catch
takeOutTheTrash
    .then((response) => {
        console.log(response)
    })
    .catch((err) => console.log(err))


// consuming promises with async/await
const consumeTrash = async () => {
    try{
        const response = await takeOutTheTrash // api call 1 
        // const anotherResponse = await anotherPromise // api call 2
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
consumeTrash()
console.log('This will run before the promise is resolved or rejected because it is asyncronous');
// ES5 async syntax
// async function nameOfFunction(){

// }
const promise = new Promise((resolve, reject) => {
    let password = 'I love anime'
    if (password === 'I love anime') {
        resolve('That is the secret word welcome to animeClub')
    } else {
        reject('Sorry that is incorrect you cannot enter the secret club')
    }
})
// promise
//     .then((message) => console.log(message))
//     .catch((err) => console.log(err))









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

// takeOrder('enchilada', menu)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const takeOrderAsync = async (item, menu) => {
    try{
        const response = await takeOrder(item, menu);
        console.log(response);
    }
    catch(err){
        console.log('ERROR: ', err);
    }
}
takeOrderAsync('enchilada', menu)




console.log('This will run before the promise is resolved');









const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            if (url === 'https://api.example.com/data') {
                resolve({
                    status: 200,
                    data: 'Successful data'
                });
            } else {
                reject({
                    status: 404,
                    data: 'Error, data not found'
                });
            }
        }, 2000); // Simulates a 2 seconds delay
    });
}

fetchData('https://api.example.com/data')
    .then((res) => {
        console.log(res);
        // setData(res.data)
    })
    .catch((err) => console.log(err))
console.log('This will run before the promise is resolved');


