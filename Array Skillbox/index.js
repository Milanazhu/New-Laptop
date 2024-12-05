const product = ['apple', 'banana', 'orange', 'pear'];
const search = 'orange';
function find(product, search) {
    let result = null;
    for (let i = 0; i < product.length; i++) {
        if (product[i] === search) {
            result = i;
            break;
        }
    }
    return result;
}

console.log(find(product,'pear'));
console.log(find(product,'banana'));
console.log(find(product,'moloko'));
