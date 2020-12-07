import { randomArray } from './helpers.js'

const a = randomArray(100, 10)

import { swap } from './helpers.js'

/*
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[i] < arr[i + 1]) {
                swap(arr, arr[i], arr[i + 1])
        }
        }
    }
    return arr
}

console.log(a)

console.log(bubbleSort(a))
*/


for (let j = 0; j < a.length - 1; j++) {
    for (let i = 0; i < a.length - 1 - j; i++) {
        if (a[i] > a[i + 1]) {
            swap(a, i, i + 1)
        }
    }
}

console.log(a)