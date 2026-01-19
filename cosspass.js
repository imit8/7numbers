
document.querySelector("#canvas").style.top = "0px"
document.querySelector("#canvas").style.left = "0px"
document.querySelector("#canvas").width = 500
document.querySelector("#canvas").height = 500

document.querySelector("#sentocanvas2").style.top = "0px"
document.querySelector("#sentocanvas2").style.left = "400px"
document.querySelector("#sentocanvas2").width = 200
document.querySelector("#sentocanvas2").height = 100

document.querySelector("#iconcanvas").style.top = "0px"
document.querySelector("#iconcanvas").style.left = "200px"
document.querySelector("#iconcanvas").width = 100
document.querySelector("#iconcanvas").height = 100

document.querySelector("#iconcanvas2").style.top = "500px"
document.querySelector("#iconcanvas2").style.left = "600px"
document.querySelector("#iconcanvas2").width = 100
document.querySelector("#iconcanvas2").height = 100

const ctx = document.querySelector("#canvas")
//const ctx = document.getElementsByClassName('canvas');
let canvas = document.querySelector("#canvas").getContext('2d')
/*for (var i = 0; i < ctx.length; i++) {
	canvas.unshift(ctx[i].getContext('2d'))
}*/

const icanvas = document.querySelector("#iconcanvas").getContext('2d')
const icanvas2 = document.querySelector("#iconcanvas2").getContext('2d')

const canvas2 = document.querySelector("#sentocanvas2").getContext('2d')
const ctx2 = document.querySelector("#sentocanvas2")

let gamen = [canvas,canvas2]
let wazagamen = [icanvas,icanvas2]

let kazu = Math.floor(Math.random()*800)+200
console.log(kazu)

let kakukazu = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
kakukazu[0].src = "number2/0.svg"
kakukazu[1].src = "number2/1.svg"
kakukazu[2].src = "number2/2.svg"
kakukazu[3].src = "number2/3.svg"
kakukazu[4].src = "number2/4.svg"
kakukazu[5].src = "number2/5.svg"
kakukazu[6].src = "number2/6.svg"

let kakukazu2 = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
kakukazu2[0].src = "number/0.svg"
kakukazu2[1].src = "number/1.svg"
kakukazu2[2].src = "number/2.svg"
kakukazu2[3].src = "number/3.svg"
kakukazu2[4].src = "number/4.svg"
kakukazu2[5].src = "number/5.svg"
kakukazu2[6].src = "number/6.svg"
kakukazu2[7].src = "number/7.svg"
kakukazu2[8].src = "number/8.svg"
kakukazu2[9].src = "number/9.svg"

/*ctx[0].addEventListener("click", (event) => {
	console.log(Math.floor(Math.random()*800)+200)
});
ctx[1].addEventListener("click", (event) => {
	console.log(Math.floor(Math.random()*800)+200)
});
ctx[2].addEventListener("click", (event) => {
	console.log(Math.floor(Math.random()*800)+200)
});
ctx[3].addEventListener("click", (event) => {
	console.log(Math.floor(Math.random()*800)+200)
});*/
/*canvas[0].fillStyle = "#bbb"
canvas[0].fillRect(0, 0, 500, 500);
canvas[1].fillStyle = "#bbb"
canvas[1].fillRect(0, 0, 500, 500);
canvas[2].fillStyle = "#bbb"
canvas[2].fillRect(0, 0, 500, 500);
canvas[3].fillStyle = "#bbb"
canvas[3].fillRect(0, 0, 500, 500);
canvas[3].fillStyle = "#bbb"*/
let en = false
/*canvas[0].drawImage(kakukazu[0],0,0, 100, 100);
canvas[3].fillRect(250-25, 250-en-25, 50, 50);
canvas[3].fillRect(250+(en/Math.sqrt(2))-25, 250-(en/Math.sqrt(2))-25, 50, 50);
canvas[3].fillRect(250+en-25, 250-25, 50, 50);
canvas[3].fillRect(250+(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
canvas[3].fillRect(250-25, 250+en-25, 50, 50);
canvas[3].fillRect(250-(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
canvas[3].fillRect(250-en-25, 250-25, 50, 50);*/
kakukazu[6].onload = function() {
	kakukazu[6].setAttribute("fill","#555555")
	canvas.drawImage(kakukazu[0],250-25, 250-en-25, 50, 50);
	canvas.drawImage(kakukazu[1],250+(en/Math.sqrt(2))-25, 250-(en/Math.sqrt(2))-25, 50, 50);
	canvas.drawImage(kakukazu[2],250+en-25, 250-25, 50, 50);
	canvas.drawImage(kakukazu[3],250+(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
	canvas.drawImage(kakukazu[4],250-25, 250+en-25, 50, 50);
	canvas.drawImage(kakukazu[5],250-(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
	canvas.drawImage(kakukazu[6],250-en-25, 250-25, 50, 50);
}

let sugata = [new Image(),new Image()]
sugata[0].src = "mitame/mae.svg"
sugata[1].src = "mitame/idou.svg"

let haikei = new Image()
haikei.src = "haikei/nohara.svg"

let tekisugata = [new Image()]
tekisugata[0].src = "mitame/bou.svg"

let teki = [[-250,0,true],[-550,-50,true],[-100,100,true],[-450,50,true],[350,-50,true],[600,200,true],[-200,-100,true],[150,-150,true],[-500,200,true]]
let zibun = [0,0,false]
let idou = [-100,0,50,50]
let idoucount = 50
let time = [0,0]
let score = 0


tick()
function tick() {
	requestAnimationFrame(tick)
	canvas.clearRect(0, 0, 500, 500)
	canvas.fillStyle = "#96dd8c"//"#ddd"
	canvas.fillRect(0, 0, 500, 500);
	canvas.drawImage(haikei, -1000 - zibun[0], -1000 + 250 - zibun[1], 2000, 2000);
	for (var i = 0; i < teki.length; i++) {
		if (zibun[1] > teki[i][1]) {
			canvas.drawImage(tekisugata[0], 175 + teki[i][0] - zibun[0], 175 + teki[i][1] - zibun[1], 150, 150);
		}
	}
	if (teki[0][2] === true) {
		if (idou[0] < 0) {
			canvas.drawImage(sugata[1], 175, 175, 150, 150);
		} else {
			flipHorizontally(sugata[1], 175, 175, 150, 150);
		}
	} else {
		if (zibun[0] > teki[0][0]) {
			if (zibun[2] === false) {
				canvas.drawImage(sugata[1], 175, 175, 150, 150);
			}
		} else {
			if (zibun[2] === false) {
				flipHorizontally(sugata[1], 175, 175, 150, 150);
			}
		}
	}
	for (var i = 0; i < teki.length; i++) {
		if (zibun[1] <= teki[i][1]) {
			canvas.drawImage(tekisugata[0], 175 + teki[i][0] - zibun[0], 175 + teki[i][1] - zibun[1], 150, 150);
		}
	}
	if (teki[0][2] === true) {
		console.log(",",zibun[0],idou[0]/10)
		zibun[0] += idou[0]/idou[3]
		zibun[1] += idou[1]/idou[3]
		idou[2]--
		if (zibun[0] > teki[0][0]) {
			if (idou[2] <= 0) {
				if (en === false) {
					en = 50
				}
				zibun[0] = teki[0][0] + 150
				zibun[1] = teki[0][1]
				if (Math.floor(Math.random()*7) >= 5) {
					teki[0][2] = Math.floor(Math.random()*200)+800
				} else {
					teki[0][2] = Math.floor(Math.random()*500)+200
				}
				if ( (String(teki[0][2])[0]+String(teki[0][2])[1])%7 === 0) {
					console.log("yarinaosi",teki[0][2],String(teki[0][2])[0]+String(teki[0][2])[1])
					if (Math.floor(Math.random()*2) === 0) {
						teki[0][2] += 7 * Math.ceil(Math.random()*7)
						teki[0][2] += Math.ceil(Math.random()*7)
					} else {
						teki[0][2] -= 7 * Math.ceil(Math.random()*7)
						teki[0][2] -= Math.ceil(Math.random()*7)
					}
					//kazu -= 50
					//kazu += Math.ceil(Math.random()*100)
				}
			}
		} else {
			if (idou[2] <= 0) {
				zibun[0] = teki[0][0] - 150
				zibun[1] = teki[0][1]
				if (Math.floor(Math.random()*7) >= 5) {
					teki[0][2] = Math.floor(Math.random()*200)+800
				} else {
					teki[0][2] = Math.floor(Math.random()*500)+200
				}
				if ( (String(teki[0][2])[0]+String(teki[0][2])[1])%7 === 0) {
					console.log("yarinaosi",teki[0][2],String(teki[0][2])[0]+String(teki[0][2])[1])
					if (Math.floor(Math.random()*2) === 0) {
						teki[0][2] += 7 * Math.ceil(Math.random()*7)
						teki[0][2] += Math.ceil(Math.random()*7)
					} else {
						teki[0][2] -= 7 * Math.ceil(Math.random()*7)
						teki[0][2] -= Math.ceil(Math.random()*7)
					}
					//kazu -= 50
					//kazu += Math.ceil(Math.random()*100)
				}
			}
		}
	} else if (teki[0][2] !== false) {
		time[0] += 1
		time[1] += 1
		if (time[1]%2 === 0) {
			if (zibun[0] > teki[0][0]) {
				zibun[0] -= 1
			} else {
				zibun[0] += 1
			}
		}
		if (time[1] < 10) {
			canvas.drawImage(kakukazu2[time[1]], 460, 460, 40, 40);
		} else if (time[1] < 100) {
			canvas.drawImage(kakukazu2[String(time[1])[0]], 440, 460, 40, 40);
			canvas.drawImage(kakukazu2[String(time[1])[1]], 460, 460, 40, 40);
		} else {
			canvas.drawImage(kakukazu2[String(time[1])[0]], 420, 460, 40, 40);
			canvas.drawImage(kakukazu2[String(time[1])[1]], 440, 460, 40, 40);
			canvas.drawImage(kakukazu2[String(time[1])[2]], 460, 460, 40, 40);
		}
		if (time[1] >= 500) {
			time[1] = 0
			teki.push([teki[0][0],teki[0][1],false])
			teki.splice(0,1);
			if (Math.abs(zibun[0] - teki[0][0]) < 150) {
				if (zibun[0] > teki[0][0]) {
					idou[0] = teki[0][0] - 150 - zibun[0]
				} else {
					idou[0] = teki[0][0] + 150 - zibun[0]
				}
			} else {
				if (zibun[0] > teki[0][0]) {
					idou[0] = teki[0][0] + 150 - zibun[0]
				} else {
					idou[0] = teki[0][0] - 150 - zibun[0]
				}
			}
			idou[1] = teki[0][1] - zibun[1]
			idou[2] = 50
		}
		canvas.drawImage(kakukazu2[String(teki[0][2])[0]], 175+55-20 + teki[0][0] - zibun[0], 175 + teki[0][1] - zibun[1], 40, 40);
		canvas.drawImage(kakukazu2[String(teki[0][2])[1]], 175+55 + teki[0][0] - zibun[0], 175 + teki[0][1] - zibun[1], 40, 40);
		canvas.drawImage(kakukazu2[String(teki[0][2])[2]], 175+55+20 + teki[0][0] - zibun[0], 175 + teki[0][1] - zibun[1], 40, 40);
	}
	
	
	if (en !== false) {
		if (en < 400 / 2) {
			en += 5
		}
		canvas.drawImage(kakukazu[0],250-25, 250-en-25, 50, 50);
		canvas.drawImage(kakukazu[1],250+(en/Math.sqrt(2))-25, 250-(en/Math.sqrt(2))-25, 50, 50);
		canvas.drawImage(kakukazu[2],250+en-25, 250-25, 50, 50);
		canvas.drawImage(kakukazu[3],250+(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
		canvas.drawImage(kakukazu[4],250-25, 250+en-25, 50, 50);
		canvas.drawImage(kakukazu[5],250-(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
		canvas.drawImage(kakukazu[6],250-en-25, 250-25, 50, 50);
	}
}
canvas2.fillStyle = "#bbb"
//canvas2.fillRect(0, 0, 500, 500);
/*ctx[0].addEventListener("click", (event) => {
	console.log(Math.floor(Math.random()*800)+200)
});*/

let mousex = false
let mousey = false
ctx.addEventListener("mousedown", (event) => {
	//mousex = event.offsetX
	//mousey = event.offsetY
	mousex = 250
	mousey = 250
});
ctx.addEventListener("mouseup", (event) => {
	if (mousex !== false && mousey !== false) {
		let muki = false
		if (mousex === event.offsetX && mousey === event.offsetY) {
			en = 50
			console.log(Math.floor(Math.random()*800)+200,"onazi=")
		} else if ( Math.abs(event.offsetX - mousex) * Math.tan(Math.PI * 3 / 8) < Math.abs(event.offsetY - mousey) ) {
			if (event.offsetY < mousey) {
				console.log("0")
				muki = 0
			} else {
				console.log("4")
				muki = 4
			}
		} else if ( Math.abs(event.offsetX - mousex) > Math.abs(event.offsetY - mousey) * Math.tan(Math.PI * 3 / 8) ) {
			if (event.offsetX > mousex) {
				console.log("2")
				muki = 2
			} else {
				console.log("6")
				muki = 6
			}
		} else if (event.offsetX > mousex) {
			if (event.offsetY < mousey) {
				console.log("1")
				muki = 1
			} else {
				console.log("3")
				muki = 3
			}
		} else {
			if (event.offsetY > mousey) {
				console.log("5")
				muki = 5
			}
		}
		if (muki !== false) { 
			if (muki === teki[0][2]%7) {
				time[1] = 0
				console.log("seikai")
				score += 1
				teki.push([teki[0][0],teki[0][1],false])
				teki.splice(0,1);
				if (Math.abs(zibun[0] - teki[0][0]) < 150) {
					if (zibun[0] > teki[0][0]) {
						idou[0] = teki[0][0] - 150 - zibun[0]
					} else {
						idou[0] = teki[0][0] + 150 - zibun[0]
					}
				} else {
					if (zibun[0] > teki[0][0]) {
						idou[0] = teki[0][0] + 150 - zibun[0]
					} else {
						idou[0] = teki[0][0] - 150 - zibun[0]
					}
				}
				idou[1] = teki[0][1] - zibun[1]
				idou[2] = 50
				if (teki[0][2] === false) {
					console.log("score",time,score)
					if (score > 9) {
						canvas.drawImage(kakukazu2[String(scre)[0]], 250-60, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(score)[1]], 250-40, 180, 40, 40);
					} else {
						canvas.drawImage(kakukazu2[String(score)[0]], 250-40, 180, 40, 40);
					}
					if (time[0] < 10) {
						canvas.drawImage(kakukazu2[String(time[0])[0]], 250+60, 180, 40, 40);
					} else if (time[0] < 100) {
						canvas.drawImage(kakukazu2[String(time[0])[0]], 250+40, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[1]], 250+60, 180, 40, 40);
					} else if (time[0] < 1000) {
						canvas.drawImage(kakukazu2[String(time[0])[0]], 250+20, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[1]], 250+40, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[2]], 250+60, 180, 40, 40);
					} else {
						canvas.drawImage(kakukazu2[String(time[0])[0]], 250, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[1]], 250+20, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[2]], 250+40, 180, 40, 40);
						canvas.drawImage(kakukazu2[String(time[0])[3]], 250+60, 180, 40, 40);
					}
				}
				/*if (Math.floor(Math.random()*7) >= 5) {
					kazu = Math.floor(Math.random()*200)+800
				} else {
					kazu = Math.floor(Math.random()*500)+200
				}
				if ( (String(kazu)[0]+String(kazu)[1])%7 === 0) {
					console.log("yarinaosi",kazu,String(kazu)[0]+String(kazu)[1],Math.floor(Math.random()*2))
					if (Math.floor(Math.random()*2) === 0) {
						kazu += 7 * Math.ceil(Math.random()*7)
						kazu += Math.ceil(Math.random()*7)
					} else {
						kazu -= 7 * Math.ceil(Math.random()*7)
						kazu -= Math.ceil(Math.random()*7)
					}
					//kazu -= 50
					//kazu += Math.ceil(Math.random()*100)

				}*/
				console.log(kazu)
			} else {
				console.log("hazure",String(kazu%7))
				
			}
		}
		/* else if (mousex > event.offsetX && mousey > event.offsetY) {
			if ( Math.abs(event.offsetX - mousex) < Math.abs(event.offsetY - mousey) ) {
				console.log(Math.floor(Math.random()*800)+200,"hidariueue")
			} else {
				console.log(Math.floor(Math.random()*800)+200,"hidariuesita")
			}
		} else if (mousex < event.offsetX && mousey > event.offsetY) {
			if ( Math.abs(event.offsetX - mousex) < Math.abs(event.offsetY - mousey) ) {
				console.log(Math.floor(Math.random()*800)+200,"migiueue")
			} else {
				console.log(Math.floor(Math.random()*800)+200,"migiuesita")
			}
		} else if (mousex > event.offsetX && mousey < event.offsetY) {
			if ( Math.abs(event.offsetX - mousex) > Math.abs(event.offsetY - mousey) ) {
				console.log(Math.floor(Math.random()*800)+200,"hidarisitaue")
			} else {
				console.log(Math.floor(Math.random()*800)+200,"hidarisitasita")
			}
		} else if (mousex < event.offsetX && mousey < event.offsetY) {
			if ( Math.abs(event.offsetX - mousex) > Math.abs(event.offsetY - mousey) ) {
				console.log(Math.floor(Math.random()*800)+200,"migisitaue")
			} else {
				console.log(Math.floor(Math.random()*800)+200,"migisitasita")
			}
		}*/
	}
});

for (var i = 1; i < 20; i++) {
	console.log(7 * Math.ceil(Math.random()*7),Math.ceil(Math.random()*7))
}


document.body.addEventListener('keydown', (event) => {
	const key = event.keyCode;
	if (event.key === "e") {
		en = 50
		//hito[1] += 20
	} else if (event.key === String(kazu%7)) {
		console.log("OK")
		if (Math.floor(Math.random()*7) >= 5) {
			kazu = Math.floor(Math.random()*200)+800
		} else {
			kazu = Math.floor(Math.random()*500)+200
		}
		console.log(kazu)
	} else {
		console.log("BUT")
		/*canvas[3].drawImage(kakukazu[0],250-25, 250-en-25, 50, 50);
		canvas[3].drawImage(kakukazu[1],250+(en/Math.sqrt(2))-25, 250-(en/Math.sqrt(2))-25, 50, 50);
		canvas[3].drawImage(kakukazu[2],250+en-25, 250-25, 50, 50);
		canvas[3].drawImage(kakukazu[3],250+(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
		canvas[3].drawImage(kakukazu[4],250-25, 250+en-25, 50, 50);
		canvas[3].drawImage(kakukazu[5],250-(en/Math.sqrt(2))-25, 250+(en/Math.sqrt(2))-25, 50, 50);
		canvas[3].drawImage(kakukazu[6],250-en-25, 250-25, 50, 50);*/
	}
	
})

function flipHorizontally(img,x,y,width=null,height=null) {
  if (width  === null) width  = img.width
  if (height === null) height = img.height
  // move to x + img's width
  canvas.translate(x+width,y);
  // scaleX by -1; this "trick" flips horizontally
  canvas.scale(-1,1);
  // draw the img
  // no need for x,y since we've already translated
  //console.log(img)
  canvas.drawImage(img,0,0,width,height);
  // always clean up -- reset transformations to default
  canvas.setTransform(1,0,0,1,0,0);
}














