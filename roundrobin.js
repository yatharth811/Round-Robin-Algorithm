let n, m;
let states = [];

function generateStates() {
  console.log("n:", n, "m:", m);
  console.log(typeof n);

  allocation = Array.from(Array(n)).map((i) => []);
  hash = Array.from(Array(n)).map((i) => 0);

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
  }

}

// for (let i = 0; i < m; i++) {
  

//   console.log("allocation:", allocation);
//   console.log("src:", src);


//   states.push(allocation.map(arr => arr.slice()));

// }

//   for (let i = 0; i < allocation.length; i++) {
//     // process.stdout.write(`a_{${i + 1}} -> `);
//     for (let y of allocation[i]) {
//       // process.stdout.write(`g_{${y + 1}} `);
//     }
//     // process.stdout.write("\n");
//   }


// generateStates();
// console.log(states);
// console.log(toEdges(states[4]));
