var app = {
    currentLevel: 6,
    level: [0, 1, 2, 3, 4, 5, 6, 7],
    cellsAmount: 3,
    numbers: [],
    userNumbers: [],
    time: 0,
    timeRunning: true,
    userMistakes: 0,
    userMistakesPersent: 0,
    
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
                
                document.getElementById(td.id).addEventListener("click", function(){
                    app.compare(td.id);
                });
                
                //Depending on level, change the style of cells.
                switch(app.currentLevel){
                    case 0:// Default styles.                       
                        break;
                    case 1: // Different cells background.
                        app.styleLevel_1(td);
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
                    case 7: 
                        app.styleLevel_7(td);   
                        break;
                    default:
                        app.styleLevel_2(td);
                }
            }
        }
    },
    
	compare: function(id){
		app.userNumbers.push(id); //Put id in the array of userNumbers.numbers.
		app.userNumbers.sort(); //Sort array.	
    app.userMistakesPersent = app.userNumbers / 100 * app.userMistakes;
    
    if(app.userNumbers[app.userNumbers.length-2] != app.userNumbers[app.userNumbers.length-1]-1 && app.userNumbers.length != 0){
        app.userMistakes++;
        if(app.userNumbers.length == app.userMistakes + app.userNumbers-1){
            alert("Game over! You made "+app.userMistakes+" mistakes. It's "+app.userMistakesPersent+"%.");
        }
    }
    
    if(app.cellsAmount * app.cellsAmount == app.userNumbers.length){
            alert("Game over! You made "+app.userMistakes+" mistakes. It's "+app.userMistakesPersent+"%.");
    }
	},
    styleLevel_1: function(a){
        // Add random colorfull stripes in body.
        if(a.id % 2 === 0){
            a.style.transform = "rotate(7deg)";
            //document.getElementById("myDIV").style.transform = "rotate(7deg)"; 
        }
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
        a.style.transform = "rotate("+Math.floor(Math.random()*100)+"deg)";
        var deg = Math.floor(Math.random()*30);
        if(a.id % 5 === 0){
            a.style.background = "#fbb";
            a.style.transform = "skew("+deg+"deg,"+deg+"deg)";
        }else if (a.id % 3 === 0){
            a.style.background = "#5f9";
            a.style.transform = "rotateX(180deg)";
        }else if(a.id % 2 === 0){
            a.style.background = "#59f";
            a.style.transform = "rotateY(180deg)";
            
        }    
    },
    
    rotate: function(what, how){
        what.WebkitTransform =  "rotate("+how+"deg)";// Code for Chrome, Safari, Opera
        what.style.msTransform = "rotate("+how+"deg)";// Code for IE9
        what.style.transform =  "rotate("+how+"deg)";
    },
    
    runTimer: function(){ //Test it.

    },
    displayData: function(){
        var gameLevel = document.querySelector("#level");
        var data = document.createTextNode(app.currentLevel);
        gameLevel.appendChild(data);
    }
};
app.run();
