function getData(dataId){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" , dataId)
            resolve("sucess");
        }, 2000);
})};

//async-await
async function getAlldata() {
    console.log ('fetching data 1 ...');
    await getData(1);
    
    console.log ('fetching data 2 ...');
    await getData(2);

    console.log ('fetching data 3 ...');
    await getData(3);
}

//Promise chain

getData(1)
    .then((result) => {
        return getData(2);
    })
    .then((result) => {
        return getData(3);
    })
    .then((result) => {
        console.log(result);
    })