import { genRandId } from "./genid";

// constant to get stored data
const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"))

// to read all transactions

let  allTransactions = localStorage.getItem("transactions")!== null ? localStorageTransactions : [];

//update localstorage data

const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(allTransactions))
}


// store transactions 

const  addTransaction = (data) => { 
    const single = {
        id: genRandId(),
        txt : data.txt,
        amount: data.amount
    };
    allTransactions.push(single);
    updateLocalStorage(allTransactions);

};

// remove stored transaction

const removeTransaction = (id) => {
    console.log('remove id = ' ,id);
    allTransactions = allTransactions.filter(item => item.id !== id);
    window.location.href = "/";
    updateLocalStorage()
}

// return all stored transactions 

const readAll = () => {
    return allTransactions;
}

export { addTransaction , readAll , removeTransaction}

