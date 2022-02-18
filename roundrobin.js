let n, m;
let states = [];

function generateStates() {
  console.log("n:", n, "m:", m);
  console.log(typeof n);

  // n aur m mein khi exchange krke toh nhi likh diya? ek baar dekhio

  allocation = Array.from(Array(n)).map((i) => []);
  hash = Array.from(Array(m)).map((i) => 0);

  t = 0;

  for(let k=0; k < m; k++){
    let good = -1, maxval = -1;
    
    for(let j = 0; j < m; j++){
        if (valuation[t%n][j] > maxval && hash[j]==0){
            maxval = valuation[t%n][j];
            good = j;
        }
    }
    hash[good] = 1;
    allocation[t%n].push(good);
    t++;
    // console.log()
    // console.log("allocation:",  allocation);
    states.push(allocation.map(arr => arr.slice()));

    console.log(states);
  }

}
