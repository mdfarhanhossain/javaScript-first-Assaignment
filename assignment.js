// feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var mainMile= feetToMile(10560);
console.log(mainMile); 


// brickCaculator

function brickCalculator(flore){
    var brick= 0;
    if(flore <= 10){
        brick = flore*15*1000;
    }
        else if(flore <= 20){
            var firstpart= 10*15*1000;
            var remign = flore-10;
            var secondpart = remign*12*1000;
            brick = firstpart+secondpart;
        }
            else{
                var firstpart = 10*15*1000;
                var secondpart = 10*12*1000;
                var remign = flore - 20;
                var thirdpart= remign *10*1000;
                brick = firstpart+secondpart+thirdpart;
            }
            return brick;
           
    }

var count = brickCalculator(15);
console.log(count);

 
// woodCalculator

function woodCalculator(chair=14, table=5, coat=3){
    var chairWood = chair*1;
    var tableWood = table*3;
    var coatWood = coat*5;
    var woodTotal = chairWood+tableWood+coatWood;
    console.log("total wood :",woodTotal , "qurry feet"); 
}
woodCalculator();

// show small name

var karim = 600;
var rahim = 450;
var tamim = 750;
if (karim < rahim){
    if (karim < tamim){
        console.log(" karim is smaller ");
    }
    else{ 
        console.log(" tamim is smaller ");
    }
}
    else{
        if ( rahim < tamim){
            console.log(" rahim is smaller ");
        }
        else{
            console.log(" tamim is smaller ");
        }
    }
