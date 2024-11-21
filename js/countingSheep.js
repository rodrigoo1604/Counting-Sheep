var list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
var list2 = [false, false, false]

function countingSheep(list) {
    var sheepCounter = 0;

    for (let index = 0; index < list.length; index++) {
        if (list[index]) {
            sheepCounter++;
        }
    }
    
    if (sheepCounter == 0) {
        console.log("Oops... The wolves ate all the sheep :(")
    } else{
        console.log("There are " + sheepCounter + " sheep in total")
    }
}

countingSheep(list1)
countingSheep(list2)