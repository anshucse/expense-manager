

// generate random id 
const genRandId = () => {

     let id = Math.round(Math.random() * 1000);
     return id;
}


export {genRandId}