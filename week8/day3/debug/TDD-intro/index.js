const hello = () => 'Hello, World!';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        resolve('peanut butter');
    });
}

export {hello, fetchData};