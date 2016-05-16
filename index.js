var app = {
    currentLevel: 4,
    level: [1, 2, 3, 4, 5],
    cellsAmount: 9,
    numbers: [],
    time: 0,
    timeRunning: true,
    
    run: function(){
        app.displayData();
        app.drawSimpleTable();
        app.runTimer();
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
                        app.styleLevel_4(td);   
                        break;
                    case 5: 
                        app.styleLevel_5(td);   
                        break;
                    case 6: 
                        app.styleLevel_6(td);   
                        break;
                    default:
                        app.styleLevel_2(td);
                }
            }
        }
    },
    
    drawDifficultTable: function(){
        // Difficult means both for user and programmer, who creates it.
    },
    
    styleLevel_2: function(a){ // Make some cells different color.
        if(a.id % 5 === 0){
            a.style.background = "#fbb";
        }else if (a.id % 3 === 0){
            a.style.background = "#5f9";
        }else if(a.id % 2 === 0){
            a.style.background = "#59f";
        }    
    },
    
    styleLevel_3: function(a){ // Different fonts and cells sizes.
        if(a.id % 5 === 0){
            a.setAttribute("class", "stripes");
            a.style.fontWeight = "bold";
        }else if (a.id % 3 === 0){
            a.style.background = "#CD5C5C";
        }else if(a.id % 2 === 0){
            a.style.background = "#2F4F4F"; 
            a.setAttribute("class", "font1");
        }else{
            a.setAttribute("class", "font2");
            a.style.background = "#FFF8DC";
        }   
    },
    
    styleLevel_4: function(a){ // Delete cells with it's backgrounds at all.
        a.setAttribute("class", "stripes");
        a.style.fontWeight = "bold";
        a.style.borderRadius = "25px";
        //Randomly rotate numbers. 
        if(a.id % 5 === 0){
            a.setAttribute("class", "stripes");
            app.rotate(a, Math.floor(Math.random()*100)); //Positive rotation.
        }else if(a.id % 3 === 0){//Add circular gradient from the cell center.
            a.style.background = "#CD5C5C"; 
            a.setAttribute("class", "nothing");
        }else if(a.id % 2 === 0 && a.id % 5 !== 0){//Change color of some numbers to random.
            app.rotate(a, Math.floor(Math.random()*-100)); //Negative rotation.
            a.style.background = "#2F4F4F"; 
            a.setAttribute("class", "font1");
        }else{
            a.setAttribute("class", "font2");
            a.style.background = "#FFF8DC";
        }       
    },
    
    styleLevel_5: function(a){ // Delete cells with it's backgrounds at all.
        a.setAttribute("class", "nothing");
        a.style.borderRadius = "25px";
        //Randomly rotate numbers. 
        if(a.id % 5 === 0){
            a.setAttribute("class", "stripes");
            app.rotate(a, Math.floor(Math.random()*100)); //Positive rotation.
        }else if(a.id % 3 === 0){//Add circular gradient from the cell center.
            a.setAttribute("class", "grad1");         
        }else if(a.id % 2 === 0 && a.id % 5 !== 0){//Change color of some numbers to random.
            app.rotate(a, Math.floor(Math.random()*-100)); //Negative rotation.
            a.setAttribute("class", "font4");
            a.setAttribute("class", "grad2");
        }else{
            a.style.background = "#"+Math.floor(Math.random()*1000);
            a.setAttribute("class", "white-outline"); 
        }       
    },
    
    styleLevel_6: function(a){ // Make some cells different color.
        if(a.id % 5 === 0){
            a.style.background = "#fbb";
        }else if (a.id % 3 === 0){
            a.style.background = "#5f9";
        }else if(a.id % 2 === 0){
            a.style.background = "#59f";
        }    
    },
    
    rotate: function(what, how){
        what.WebkitTransform =  "rotate("+how+"deg)";// Code for Chrome, Safari, Opera
        what.style.msTransform = "rotate("+how+"deg)";// Code for IE9
        what.style.transform =  "rotate("+how+"deg)";
    },
    
    styleLevel_6: function(a){
        // Add random colorfull stripes in body.
    },
    runTimer: function(){ //Test it.
        while(timeRunning){
            setInterval(function(){ app.time = +1; }, 1000);
            // Display it after the game has finished.
        }
        return app.time.toString('H:mm:ss');
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
