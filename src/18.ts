// Solution 1: Using await and async
function asyncExample() {
    // Your code here

    try {
        const result = await someFunctionAsync();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

asyncExample();

// Solution 2: Using promises and await
function promiseExample() {
    // Your code here

    return new Promise((resolve, reject) => {
        try {
            const result = someFunctionPromised();
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

promiseExample();
