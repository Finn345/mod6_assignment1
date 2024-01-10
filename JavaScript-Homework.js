//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    let found_match = false;

    for (let i = 0; i < dog_names.length; i++) {
        const regex = new RegExp("\\b" + dog_names[i] + "\\b", "i"); //This checks the whole word from the string to make sure it matches to the word in the array
        if (dog_string.match(regex)) {
            console.log("Matched " + dog_names[i]); //If matched from the string, it returns the word from the array
            found_match = true;
        }
    }

    if (!found_match) {
        console.log("No Matches"); //If it doesnt find a match, it returns No matches
    }
}
console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

name_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let replaceEvens = function(arr){
    for(let i = 0; i < name_arr.length; i++){
        if(i % 2 == 0){
            name_arr.splice(i,1,'even index')
        }
    }
    console.log(name_arr)
}

console.log(replaceEvens())
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
