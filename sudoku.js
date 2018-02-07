var canvas, context;
var keyButtom, mx, my, repeated = false;
var mSelection = { 'x':0, 'y':0, 'set':false };
var BLOCK = 60, COLS = 9, ROWS = 9;
var tab = [];



function initGame(){
	canvas = document.getElementById("gameScreen");
	canvas.width = COLS*BLOCK;
	canvas.height = ROWS*BLOCK;
	context = canvas.getContext("2d"); 
	
	for(var x = 0; x < ROWS; x++){
		tab[x] = [];
		for(var y = 0; y < COLS; y++){ 
			tab[x][y] = 0;
		}
	}
	fillTab();
}


function printTab(){
	context.strokeStyle = "#888888";
	context.lineWidth="2";
	
	for(var x = 0; x < ROWS; x++){
		for(var y = 0; y < COLS; y++){ 
		
		
			context.fillStyle = "#ffffff";
			context.font="32px Courier";
			context.rect(y*BLOCK, x*BLOCK, BLOCK, BLOCK);
			context.stroke();
			context.fillText(tab[x][y], 20+(BLOCK*x), 35+(y*BLOCK));
		
		
		}
	}
	
	
}



function draw(){
	
	context.fillStyle = "#000022";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	printTab();
	testRules();
	
	if(mSelection.set){
		context.strokeStyle = "#ffff00";
		context.lineWidth="4";
		context.beginPath();
		context.rect(mSelection.x*BLOCK, mSelection.y*BLOCK, BLOCK, BLOCK);
		context.stroke();
		context.closePath();
		
	}
	
	
	
	
}


function fillTab(){
	
	tab[0][0] = 5;
	tab[1][0] = 3;
	tab[4][0] = 7;
	tab[0][1] = 6;
	tab[3][1] = 1;
	tab[4][1] = 9;
	tab[5][1] = 5;
	tab[1][2] = 9;
	tab[2][2] = 8;
	tab[7][2] = 6;
	tab[0][3] = 8;
	tab[4][3] = 6;
	tab[8][3] = 3;
	tab[0][4] = 4;
	tab[3][4] = 8;
	tab[5][4] = 3;
	tab[8][4] = 1;
	tab[0][5] = 7;
	tab[4][5] = 2;
	tab[8][5] = 6;
	tab[1][6] = 6;
	tab[6][6] = 2;
	tab[7][6] = 8;
	tab[3][7] = 4;
	tab[4][7] = 1;
	tab[5][7] = 9;
	tab[8][7] = 5;
	tab[4][8] = 8;
	tab[7][8] = 7;
	tab[8][8] = 9;
	
	
	
	
}


function checkEmpty(){
	var count = 0;
	for(var x = 0; x < ROWS; x++){
		for(var y = 0; y < COLS; y++){
			if(tab[x][y] === 0)
				return true;
		}
	}
}


function testRules(){
	context.fillStyle = "#ff0000";
	context.font="32px Courier";
	for(var i = 0; i < ROWS; i++){
		for(var x = 0; x < COLS; x++){
			for(var y = 0; y < COLS; y++){				
				if( ((tab[i][x] === tab[i][y]) && (tab[i][x] != 0) && (tab[i][y] != 0)) ){
					if(y == x) continue;
					context.fillText(tab[i][x], 20+(BLOCK*i), 35+(x*BLOCK));
					context.fillText(tab[i][y], 20+(BLOCK*i), 35+(y*BLOCK));
					//alert("Igual encontrado!");
					repeated = true;
				}
				if( ((tab[x][i] === tab[y][i]) && (tab[x][i] != 0) && (tab[y][i] != 0)) ){
					if(y == x) continue;
					context.fillText(tab[x][i], 20+(BLOCK*x), 35+(i*BLOCK));
					context.fillText(tab[y][i], 20+(BLOCK*y), 35+(i*BLOCK));
					//alert("Igual encontrado!");
					repeated = true;
				}
				if(i == ROWS-1 && !repeated && !checkEmpty()){
					alert("Jogo finalizado. Parabéns, você venceu!");
					initGame();
				}
			}
		}
	}
	repeated = false;
	
}


function mouseDown(e){
	
	var rect = canvas.getBoundingClientRect();
	mx = e.x;
	my = e.y;
	mx -= canvas.offsetLeft;
	my -= canvas.offsetTop;
	mSelection.x = parseInt((mx / BLOCK));
	mSelection.y = parseInt((my / BLOCK));
	if(!mSelection.set)
		mSelection.set = true;
	
	//alert("Mouse X: " + mx + "  Mouse Y: " + my + "   tab[" + mSelection.x + "][" + mSelection.y + "]");
	
}


function events(e){
	keyButtom = e.which;
	
	switch(keyButtom){
		//if(mSelection){
			case 48: //0
				tab[mSelection.x][mSelection.y] = 0;
				mSelection.set = false;
				break;
			case 49: //1
				tab[mSelection.x][mSelection.y] = 1;
				mSelection.set = false;
				break;
			case 50: //2
				tab[mSelection.x][mSelection.y] = 2;
				mSelection.set = false;
				break;
			case 51: //3
				tab[mSelection.x][mSelection.y] = 3;
				mSelection.set = false;
				break;
			case 52: //4
				tab[mSelection.x][mSelection.y] = 4;
				mSelection.set = false;
				break;
			case 53: //5
				tab[mSelection.x][mSelection.y] = 5;
				mSelection.set = false;
				break;
			case 54: //6
				tab[mSelection.x][mSelection.y] = 6;
				mSelection.set = false;
				break;
			case 55: //7
				tab[mSelection.x][mSelection.y] = 7;
				mSelection.set = false;
				break;
			case 56: //8
				tab[mSelection.x][mSelection.y] = 8;
				mSelection.set = false;
				break;
			case 57: //9
				tab[mSelection.x][mSelection.y] = 9;
				mSelection.set = false;
				break;
		//}
	}
	
}


function loop(){
	
	draw();
	
	
}





/*
	tab[2][0] = 4;
	tab[3][0] = 6;
	tab[5][0] = 8;
	tab[6][0] = 9;
	tab[7][0] = 1;
	tab[8][0] = 2;
	tab[1][1] = 7;
	tab[2][1] = 2;
	tab[6][1] = 3;
	tab[7][1] = 4;
	tab[8][1] = 8;
	tab[0][2] = 1;
	tab[3][2] = 3;
	tab[4][2] = 4;
	tab[5][2] = 2;
	tab[6][2] = 5;
	tab[8][2] = 7;
	tab[1][3] = 5;
	tab[2][3] = 9;
	tab[3][3] = 7;
	tab[5][3] = 1;
	tab[6][3] = 4;
	tab[7][3] = 2;
	tab[1][4] = 2;
	tab[2][4] = 6;
	tab[4][4] = 5;
	tab[6][4] = 7;
	tab[7][4] = 9;
	tab[1][5] = 1;
	tab[2][5] = 3;
	tab[3][5] = 9;
	tab[5][5] = 4;
	tab[6][5] = 8;
	tab[7][5] = 5;
	tab[0][6] = 9;
	tab[2][6] = 1;
	tab[3][6] = 5;
	tab[4][6] = 3;
	tab[5][6] = 7;
	tab[8][6] = 4;
	tab[0][7] = 2;
	tab[1][7] = 8;
	tab[2][7] = 7;
	tab[6][7] = 6;
	tab[7][7] = 3;
	tab[0][8] = 3;
	tab[1][8] = 4;
	tab[2][8] = 5;
	tab[3][8] = 2;
	tab[5][8] = 6;
	tab[6][8] = 6;
*/