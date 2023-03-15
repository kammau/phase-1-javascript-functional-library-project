const { transform } = require("babel-core");

function myEach(collection, callback) {
    if (Array.isArray(collection) === true) {
        collection.forEach(element => {
            callback(element)
        });
    } else if (Array.isArray(collection) === false) {
        let newObj = Object.values(collection)
        newObj.forEach(element => {
            callback(element) && collection
        })
    }
    return collection
}

function myMap(collection, callback) {
    if (Array.isArray(collection) === true) {
        let newArray = collection.map(element => {
            return callback(element)
        })
        return newArray
    } else if (Array.isArray(collection) === false) {
        let newObj = Object.values(collection)
        let newArray = newObj.map(element => {
            return callback(element)
        })
        return newArray
    }
}

function myReduce(collection, callback, acc=undefined) {
    let collection2 = [...collection]
    if (Array.isArray(collection) !== true) {
        collection2 = Object.values(collection)
    }
    let accCopy = acc
    if (acc === undefined) {
        accCopy = collection2[0]
        for (let i=1; i < collection2.length; i++) {
            accCopy = callback(accCopy, collection2[i], collection)
        }
    } else {
        for (let i=0; i<collection2.length; i++) {
            accCopy = callback(accCopy, collection2[i], collection)
        }
    }
    return accCopy
}

function myFind(collection, predicate) {
    let collection2;
    if(Array.isArray(collection) === false) {
        collection2 = Object.values(collection)
    } else {
        collection2 = [...collection]
    }
    for (let i = 0; i < collection2.length; i++) {
        let predicateReturn = predicate(collection2[i]);
        if (predicateReturn === true) {
            return collection2[i]
        }
    }
}


function myFilter(collection, predicate) {
    let collection2;
    if (Array.isArray(collection) === false) {
        collection2 = Object.values(collection)
    } else {
        collection2 = [...collection]
    }
    let array = [];
    for (let i = 0; i < collection2.length; i++) {
        let predicateReturn = predicate(collection2[i]);
        if (predicateReturn === true) {
            array.push(collection2[i])
        }
    }
    return array
}

function mySize(collection) {
    let collection2;
    if (Array.isArray(collection) === false) {
        collection2 = Object.values(collection);
    } else {
        collection2 = [...collection]
    }
    return collection2.length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    } else {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(array[i])
        }
        return arr
    }
}

function myLast(array, n=undefined) {
    if (n === undefined) {
        return array[array.length-1]
    } else {
        array.reverse()
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(array[i])
        }
        return arr.reverse()
    }
}

function myKeys(obj) {
    let arr = [];
    return arr = Object.keys(obj);
}

function myValues(obj) {
    let arr = [];
    return arr = Object.values(obj);
}
