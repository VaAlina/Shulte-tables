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
                    case 1:// Default styles.                       
                        break;
                    case 2: // Different cells background.
                        app.styleLevel_2(td);
                        break;
                    case 3:// Stripes and few fonts.
                        app.styleLevel_3(td);                        
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
    
    styleLevel_2: function(a){ // Make some cells different color.
        if(a.id % 5 == 0){
            a.style.background = "#fbb";
        }else if (a.id % 3 == 0){
            a.style.background = "#5f9";
        }else if(a.id % 2 == 0){
            a.style.background = "#59f";
        }    
    },
    
    styleLevel_3: function(a){ // Different fonts and cells sizes.
        if(a.id % 5 == 0){
            a.setAttribute("class", "stripes");
            a.style.fontWeight = "bold";
        }else if (a.id % 3 == 0){
            a.style.background = "#006400"; // Green.
        }else if(a.id % 2 == 0){
            a.style.background = "#8B0000"; // Bordo.
            a.setAttribute("class", "font1");
        }else{
            a.setAttribute("class", "font2");
        }   
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
