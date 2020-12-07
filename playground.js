import { randomArray } from './helpers.js'

const a = randomArray(100, 9)

console.log(a.sort())

const storage = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(storage.sort())


const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]

console.log(kids.sort(function(a, b) {
    return parseFloat(a.naughtyScore) - parseFloat(b.naughtyScore);
}))