# Shulte-tables
var app = {
    currentLevel: 3,
    level: [1, 2, 3, 4, 5],
    cellsAmount: 5,
    numbers: [],
    
    run: function(){
        app.displayData();
        app.drawSimpleTable();
    },
    drawSimpleTable: function(){
        for(var l = 0; l < app.cellsAmount * app.cellsAmount; l++){ // Create the array of numbers.
             app.numbers.push(l);       
        }
        // Randomise numbers in the array.
        app.numbers = app.numbers.sort(function(){return .5 - Math.random()});
        
        var table = document.createElement("TABLE");
        document.body.appendChild(table);
        for(var i = 0, k = 0; i < app.cellsAmount; i++){ // Append table rows.
            var tr = document.createElement("TR");
            table.appendChild(tr);
            for(var j = 0; j < app.cellsAmount; j++, k++){ // Append table cells.
                var td = document.createElement("TD");
                tr.appendChild(td);                       
                var t = document.createTextNode(app.numbers[k]);
                td.appendChild(t);
                td.id = app.numbers[k]; // Add id to every cell.
               // alert(td.id);
                //Depending on level, change the style of cells.
                switch(app.currentLevel){
                    case 1:
                        
                        break;
                    case 2:
                        if(td.id % 5 == 0){
                            td.style.background = "#fbb";
                        }else if (td.id % 3 == 0){
                            td.style.background = "#5f9";
                        }else if(td.id % 2 == 0){
                            td.style.background = "#59f";
                        }
                        break;
                    case 3:
                        if(td.id % 5 == 0){
                            td.setAttribute("class", "stripes");
                            td.style.fontWeight = "bold";
                        }else if (td.id % 3 == 0){
                            td.style.background = "#006400"; // Green.
                        }else if(td.id % 2 == 0){
                            td.style.background = "#8B0000"; // Bordo.
                            td.setAttribute("class", "font1");
                        }else{
                            td.setAttribute("class", "font2");
                        }
                        
                        break;
                    case 4: 
                        
                        break;
                    default:
                        
                };
            };
        };
    },
    
    drawDifficultTable: function(){
        // Difficult means both for user and programmer, who creates it.
    },
    
    styleLevel_2: function(){ // Make some cells different color.
    
    },
    
    styleLevel_3: function(){ // Different fonts and cells sizes.
    
    },
    
    styleLevel_4: function(){
    
    },
    
    getUserInput: function(){
    
    },
    compareUserInputWithTarget: function(){
    
    },
    displayData: function(){
        var gameLevel = document.querySelector("#level");
        var data = document.createTextNode(app.currentLevel);
        gameLevel.appendChild(data);
    },
    test: function(){
        alert("works");
    }
};
app.run();
