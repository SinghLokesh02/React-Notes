// Rest Parameters

// function Sum(name,...args) {
    
//     // Addding elements
//     let total = 0;
//     for(let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
    
//     // Displaying the result
//     console.log(`${name} added ${args.length} numbers: ${total}`);
// }

// Sum("Lokesh",1,2,4,45,56)




// Default Parameters

function Sum(a,b=2){
    console.log(a+b);    
}

Sum(1,5)

// function rollADice(side = 6){
//     let x = Math.floor(Math.random()*side) + 1
//     console.log(x);
// }
// rollADice()


function fullname(firstName,lastName = "Yadav"){
    console.log(firstName + " " + lastName);
}

fullname("Prakash","pander")