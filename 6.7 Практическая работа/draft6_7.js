const array = [
    1,
    3,
    5,
    3,
    8,
    10,
    12,
    15,
    18,
]

let max = array[0];
let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        Math.max(...array)
    }
    max = Math.max(...array)
    if (array[i] < min) {
        Math.min(...array)
    }
    min = Math.min(...array)
}
button.onclick = for()
