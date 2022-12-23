// automatically buy and sell on a single symbol
/*
Parameters:
  Starting cash - amount of money to play with
  Risk appetite - amount willing to lose? $ or %
  Caution/Confidence
  Time scale
  'Brain' - which strategy to use?
*/

/*
Start strategy, add to Server's to do list
*/

// measure momentum
let momentum = 0

let example = [1, 3, 10, 20, 31, 44, 57, 69, 90, 130]

let avgArr = []
for(let i = 0; i < example.length - 3; i++) {
  avgArr.push((example[i] + example[i+1] + example[i+2])/3)
}

///
example.push(200)
// avgArr.shift() // double check this is the right method to shorten from the left
let l = example.length; // turn into constant?
avgArr.push((example[l-3] + example[l-2] + example[l-1])/3)
////
// OR
////
// total -= example[index] - nextData
// example[index++] = nextData
// index %= maxLength
// avg = total / maxLength

// is the momentum very very high or very very low?
