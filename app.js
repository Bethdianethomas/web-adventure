var yCoord = 0;
var xCoord = 0;

// Initializing the corrdinates of the target cell 
var endX = 2;
var endY = 2;

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
var killAbe = function () {
	document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

//Adding a function to place an image at the target cell
var target = function(){
	document.getElementById(endY.toString() + endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};
    
var movAbe = function(){
	document.getElementById(yCoord.toString() + xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};

//refactoring hideAbe

var hideAbe = function (xChange, yChange) {
	document.getElementById((yCoord + yChange).toString() + (xCoord + xChange).toString()).innerHTML = "";
}


movAbe();
target();



function movDown() {
	
	
	if(xCoord === endX && yCoord === (endY -1)) {
        yCoord++;
        hideAbe(0, -1);	
        killAbe();
        alert("Whuuthaa!!??");
	}
	else if (yCoord === 2) {
        alert("D'oh!!!");
    }
        else {
        yCoord++;
		hideAbe(0, -1);
		movAbe();
	};
}

function movUp() {
	
	if(xCoord === endX && yCoord === (endY +1)) {
        yCoord--;
        hideAbe(0,1);
        killAbe();
	   alert("WhuuThe!!??");
    }
	else if (yCoord === 0){
		alert("D'oh!!!");
	}
	else {
		yCoord--;
		hideAbe(0, 1);
		movAbe();
	};
}

function movLeft() {
	
	if(xCoord === (endX + 1) && yCoord === endY) {
       xCoord--;
       hideAbe(1,0);
       killAbe();
	   alert("WhuuThe!!??");
    }
	else if (xCoord === 0){
		alert("D'oh!!!");
	}
	else {
		xCoord--;
		hideAbe(1,0);
		movAbe();
	};
}

function movRight() {
	
	if(xCoord === (endX - 1) && yCoord === endY) {
        xCoord++;
        hideAbe(-1,0);
        killAbe();
	   alert("WhuuThe!!??");
    }
	else if (xCoord === 2){
		alert("Don't have cow, man!");
	}
	else {
		xCoord++;
        hideAbe(-1,0);
		movAbe();
	};
}

function reset() {
    hideAbe(0,0);
    xCoord = 0;
    yCoord = 0;
    movAbe();
    target();
}
