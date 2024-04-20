// In this code we can store a promise in a variable 
const promiseOne = new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("promise started")
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log('its resolve');
})

// In that code we can not stored a promise into a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("again start Promise");
        resolve()
    },1000)
}).then(function(){
    console.log('its resolve again')
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'suhail ahmed', password: 123})
        }else{
            reject('something went wrong')
        }
    }, 1000);
})

promiseThree
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('the promise give something resolve or reject'))



const promiseFour = new Promise(function(resolve, reject)  {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'Javascript', password: 123})
        }else{
            reject('Js went wrong')
        }
    }, 1000);
})

async function MakePromise(){
    try {
        const respone = await promiseFour
        console.log(respone);
        
    } catch (error) {
        console.log(error);
        
    }
}

MakePromise()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 



async function getUserData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
   

}
getUserData()