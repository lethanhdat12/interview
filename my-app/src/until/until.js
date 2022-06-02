
const maxArray = (arr) => {
    let sortArr = arr.map(item => item.toString() + "9z").sort().reverse();
    let maxStr = sortArr.map(item => item.replace("9z", "")).join("");
    return Number.parseInt(maxStr);
}

const checkLengthArr = (arr, length) => {
    return arr.length < length;
}

const checkIncludesArray = (arr, item) => {
    return arr.includes(item)
}


const convertArrayToObject = (arr) => {
    return arr.map((name, index) => {
        return {
            name, index
        }
    })
}

const initArray24 = (arr, length) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i];
        let check = checkLengthArr(newArr, length);
        let includes = checkIncludesArray(newArr, elm)
        if (check) {
            if (!includes) {
                newArr.push(elm);
            }

        }
        if (!check) break;
    }

    return newArr;
}

const madeArrayObjectToArray = (inputArray, number) => {
    let result = inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / number)
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])

    let res = result.map( (item,index) => {
        return {
            list : [...item],
            primary : index*number
        }
    } )

    return res;
}

export {
    maxArray,
    initArray24,
    convertArrayToObject,
    madeArrayObjectToArray
}