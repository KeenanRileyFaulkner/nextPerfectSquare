const nextSquare = square => {
    const sqrt = Math.sqrt(square);
    if(Math.floor(sqrt) !== sqrt) {
        //this is silly behavior, because the algorithm is the same either way, but the requirements mandate -1 return if square is not square
        return -1;
    }
    return Math.pow((sqrt + 1), 2);
}

console.log(`The next perfect square after 9 is ${nextSquare(9)}`);
console.log(`The next perfect square after 289 is ${nextSquare(289)}`);
console.log(`The next perfect square after 3000 is ${nextSquare(3000)} (3000 is not a perfect square)`);

const lessDumbMethod = square => Math.pow(Math.floor(Math.sqrt(square)) + 1, 2);

console.log(`The next perfect square after 3000 is actually ${lessDumbMethod(3000)}`);