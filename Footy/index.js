//-------- SOCCER PROBLEM ----------


/*let fs = require('fs')
let parse = require('csv-parser');

let data = [];
fs.createReadStream('./Soccer Table.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        data.push(csvrow);
    })
    .on('end', function() {
        console.log(csvrow);
    });

console.log(data) 
*/

// I tried to import the csv but to no avail (node stuf wasn't working in browser, then I tried to use webpack to create a fake server but I still couldn't get it to work). 

// Manually Loading in the table (not the best)
arr = [["Man United",2,"Chelsea",1],
        ["Aston Villa",3,"Man City",1],
        ["Westham United",2,"York",1],
        ["Man United",3,"Man City",1],
        ["Aston Villa",1,"York",0],
        ["Chelsea",3,"Westham United",2],
        ["Man United",1,"Aston Villa",1],
        ["Man United",1,"Westham United",0],
        ["Man United",3,"York",0],
        ["Man United",8,"Man City",1],
        ["Aston Villa",2,"Man United",2],
        ["Aston Villa",3,"Westham United",2],
        ["Aston Villa",1,"Chelsea",3],
        ["Westham United",0,"Man United",0],
        ["Westham United",2,"Aston Villa",1],
        ["Westham United",2,"Chelsea",3],
        ["Westham United",1,"Man City",3],
        ["Chelsea",4,"Man United",2],
        ["Chelsea",3,"Aston Villa",0],
        ["Chelsea",1,"York",1],
        ["Chelsea",3,"Man City",3],
        ["York",0,"Man United",2],
        ["York",0,"Aston Villa",0],
        ["York",0,"Westham United",2],
        ["York",1,"Chelsea",0],
        ["York",0,"Man City",3],
        ["Man City",0,"Man United",0],
        ["Man City",4,"Aston Villa",0],
        ["Man City",2,"Westham United",1],
        ["Man City",2,"Chelsea",2],
        ["Man City",3,"York",0],
    ];

//Initialize arrays
let win = [];
let draw = [];
let loss = [];

//Update arrays with wins or draws
for(let i = 0; i < arr.length; i++) {
    if (arr[i][1] > arr[i][3]) {
        win.push(arr[i][0]);
        loss.push(arr[i][2]);
    } else if (arr[i][1] < arr[i][3]) {
        win.push(arr[i][2]);
        loss.push(arr[i][2]);
    } else {
        draw.push(arr[i][0]);
        draw.push(arr[i][2])
    }
}

//Create variables 
let manUWin = 0, manUDraw = 0, manULoss = 0 , chelseaWin = 0, chelseaDraw = 0, chelseaLoss = 0, astonVillaWin = 0, astonVillaDraw = 0, astonVillaLoss = 0, yorkWin = 0, yorkDraw = 0, yorkLoss = 0, westHamWin = 0, westHamDraw = 0, westHamLoss = 0, manCityWin = 0, manCityDraw = 0, manCityLoss = 0;

//Add up each teams wins
for( i = 0; i < win.length; i++){
    if(win[i] == "Man United")
        manUWin++;
}

for( i = 0; i < win.length; i++){
    if(win[i] == "Chelsea")
        chelseaWin++;
}

for( i = 0; i < win.length; i++){
    if(win[i] == "Aston Villa")
        astonVillaWin++;
}

for( i = 0; i < win.length; i++){
    if(win[i] == "Westham United")
        westHamWin++;
}

for( i = 0; i < win.length; i++){
    if(win[i] == "York")
        yorkWin++;
}

for( i = 0; i < win.length; i++){
    if(win[i] == "Man City")
        manCityWin++;
}

//Add up each teams draws
for( i = 0; i < draw.length; i++){
    if(draw[i] == "Man United")
        manUDraw++;
}

for( i = 0; i < draw.length; i++){
    if(draw[i] == "Chelsea")
        chelseaDraw++;
}

for( i = 0; i < draw.length; i++){
    if(draw[i] == "Aston Villa")
        astonVillaDraw++;
}

for( i = 0; i < draw.length; i++){
    if(draw[i] == "Westham United")
        westHamDraw++;
}

for( i = 0; i < draw.length; i++){
    if(draw[i] == "York")
        yorkDraw++;
}

for( i = 0; i < draw.length; i++){
    if(draw[i] == "Man City")
        manCityDraw++;
}

//Add up each teams losses
for( i = 0; i < loss.length; i++){
    if(loss[i] == "Man United")
        manULoss++;
}

for( i = 0; i < loss.length; i++){
    if(loss[i] == "Chelsea")
        chelseaLoss++;
}

for( i = 0; i < loss.length; i++){
    if(loss[i] == "Aston Villa")
        astonVillaLoss++;
}

for( i = 0; i < loss.length; i++){
    if(loss[i] == "Westham United")
        westHamLoss++;
}

for( i = 0; i < loss.length; i++){
    if(loss[i] == "York")
        yorkLoss++;
}

for( i = 0; i < loss.length; i++){
    if(loss[i] == "Man City")
        manCityLoss++;
}

//Calculate games played(GP)
let manUGp = manUWin + manUDraw + manULoss;
let manCityGp = manCityWin + manCityDraw + manCityLoss;
let chelseaGp = chelseaWin + chelseaDraw + chelseaLoss;
let westHamGp = westHamWin + westHamDraw + westHamLoss;
let yorkGp = yorkWin + yorkDraw + yorkLoss;
let astonVillaGp = astonVillaWin + astonVillaDraw + astonVillaLoss;

//Calculate each teams points
let manUPoints = manUWin*3 + manUDraw*1;
let manCityPoints = manCityWin*3 + manCityDraw*1;
let chelseaPoints = chelseaWin*3 + chelseaDraw*1;
let westHamPoints = westHamWin*3 + westHamDraw*1;
let yorkPoints = yorkWin*3 + yorkDraw*1;
let astonVillaPoints = astonVillaWin*3 + astonVillaDraw*1;

//Create arrays for each team
manUArr = ["Man United", manUGp, manUWin, manUDraw, manULoss, manUPoints];
manCityArr = ["Man City", manCityGp, manCityWin, manCityDraw, manCityLoss, manCityPoints];
yorkArr = ["York", yorkGp, yorkWin, yorkDraw, yorkLoss, yorkPoints];
chelseaArr = ["Chelsea", chelseaGp, chelseaWin, chelseaDraw, chelseaLoss, chelseaPoints];
westHamArr = ["West Ham United", westHamGp, westHamWin, westHamDraw, westHamLoss, westHamPoints];
astonVillaArr = ["Aston Villa", astonVillaGp, astonVillaWin, astonVillaDraw, astonVillaLoss, astonVillaPoints];

//Create a league array
let leagueArr = [manUArr, yorkArr, chelseaArr, manCityArr, westHamArr, astonVillaArr];

//Order by most points
leagueArr = leagueArr.sort((a,b) => b[5] - a[5]);

//Add position in table
for (let i = 0; i < leagueArr.length; i++) {
    let position;
        switch(i + 1) {
            case 1: 
                position = "1st ";
                break;
            case 2:
                position = "2nd ";
                break;
            case 3:
                position = "3rd ";
                break;
            default: 
                position = (i + 1) + "th ";
        }
    leagueArr[i][0] = position + leagueArr[i][0];
}

//Print to console the final league table. 
console.log(leagueArr);
console.log("Clearly this is when Ferguson was still in charge lol")