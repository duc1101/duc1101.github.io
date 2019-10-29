function nhay(){
	var m = document.getElementById('m');
	var r = document.getElementById('r');
	var cham = document.getElementById('ch');
	var d = document.getElementById('d');
	var u = document.getElementById('u');
	var c = document.getElementById('c');
	var color_table = ['red','orange','yellow','green','aqua','blue','white'];
	var bg_table = ['url("images/bg5.jpg")','url("images/bg.jpg")','url("images/bg2.jpg")','url("images/bg3.jpg")','url("images/bg4.jpg")'];
	var time = 1;
	var count =2;
	// ,'url("images/bg6.jpg")','url("images/bg7.jpg")','url("images/bg8.jpg")'
	setInterval(function(){
		if(time%35==0){
			// đổi nền tự động
			var bg_length = Math.random()*bg_table.length;
			var bg_key = Math.floor(bg_length);
			_body.style.backgroundImage=bg_table[bg_key];
		}
		if (time%3==0) {
			_button.style.backgroundColor= '#f0ad4e';
		}else{
			_button.style.backgroundColor= '#5cb85c';
		}
		if(time<=42){
					// chạy xuôi
					duc.style.fontFamily='Tangerine';
					duc.style.fontSize='34px';
					if(time%6==1){m.style.color = color_table[count];}
					else if(time%6==2){r.style.color = color_table[count];}			
					else if(time%6==3){cham.style.color = color_table[count];}			
					else if(time%6==4){d.style.color = color_table[count];}			
					else if(time%6==5){u.style.color = color_table[count];}			
					else{
						c.style.color = color_table[count];
						count++;
					}			
				}else if((time>42&&time<=70)||(time>175&&time<=200)){
					// nhấp nháy
					if(window.matchMedia('(max-width: 539px)').matches){
						duc.style.fontSize='22px';
					}else{
						duc.style.fontSize='33px';
					}
					duc.style.fontFamily='Fredericka the Great';
					c.style.color = color_table[count];
					u.style.color = color_table[count];
					d.style.color = color_table[count];
					cham.style.color = color_table[count];
					r.style.color = color_table[count];
					m.style.color = color_table[count];
					// _body.style.backgroundImage='url("images/bg1.jpg")';
					count++;
				}else if(time==71||time==114||time==201){
					duc.style.fontSize='28px';
					// xóa màu
					duc.style.fontFamily='Courgette';
					c.style.color = 'transparent';
					u.style.color = 'transparent';
					d.style.color = 'transparent';
					cham.style.color = 'transparent';
					r.style.color = 'transparent';
					m.style.color = 'transparent';
				}else if(time>71&&time<114){
					//chạy ngược
					if(window.matchMedia('(max-width: 539px)').matches){
						duc.style.fontSize='28px';
					}else{
						duc.style.fontSize='34px';
					}
					duc.style.fontFamily='Niconne';
					if(time%6==5){
						m.style.color = color_table[count];
						count++;
					}
					else if(time%6==4){r.style.color = color_table[count];}			
					else if(time%6==3){cham.style.color = color_table[count];}			
					else if(time%6==2){d.style.color = color_table[count];}			
					else if(time%6==1){u.style.color = color_table[count];}			
					else{c.style.color = color_table[count];}
				}else if(time>114&&time<176){
					duc.style.fontFamily='Sacramento';
					if(window.matchMedia('(max-width: 539px)').matches){
						duc.style.fontSize='27px';
					}else{
						duc.style.fontSize='34px';
					}
					//gậy như ý
					if(time%6==1){
						m.style.color = color_table[count];
						c.style.color = color_table[count];
					}else if(time%6==2){
						u.style.color = color_table[count];
						r.style.color = color_table[count];
					}else if(time%6==3){
						d.style.color = color_table[count];
						cham.style.color = color_table[count];
						count++;
					}else if(time%6==4){
						d.style.color = color_table[count];
						cham.style.color = color_table[count];
					}else if(time%6==5){
						u.style.color = color_table[count];
						r.style.color = color_table[count];
					}else if(time%6==0){
						m.style.color = color_table[count];
						c.style.color = color_table[count];
						count++;
					}
				}if(count>6){
					count=0;
				}if(time==201){
					time=0;
				}
				// console.log(time+':'+color_table[count]);
				time ++;
			},111);			
}
jQuery(function() {
	if(window.matchMedia('(max-width: 340px)').matches){
		jQuery("body").snow({
			intensity: 6,
			sizeRange: [3, 7],
			opacityRange: [0.4, .7],
			driftRange: [11, 20],
			speedRange: [11, 30]
		});
	}else if(window.matchMedia('(max-width: 680px)').matches){
		jQuery("body").snow({
			intensity: 11,
			sizeRange: [6, 11],
			opacityRange: [0.4, .7],
			driftRange: [11, 20],
			speedRange: [11, 50]
		});
	}else{
		jQuery("body").snow({
			intensity: 24,
			sizeRange: [11, 16],
			opacityRange: [0.4, .7],
			driftRange: [11, 20],
			speedRange: [16, 80]
		});
	}
});
function bongbay(){
	var thoiGian = 0;
	setInterval(function(){
		if(thoiGian==1){
			quaBong.style.bottom ='740px';
		}
		if(thoiGian==5){
			qua.style.bottom = '90px';
		}
		if(thoiGian==11){
			_gif.style.backgroundColor='black';
			qua.style.display = 'none';
		}
		if (thoiGian==13) {
			_gif.style.backgroundImage = 'url("images/Rose-Yellow-2-icon.png")';
			_gif.style.backgroundColor='white';
		}
		if(thoiGian==16){
			alert('nói chơi chứ làm gì có quà');
		}
		console.log("thoiGian");
		thoiGian++;
	},800)
}
function thoatFake(){
	alert('nút này hỏng rồi, ấn nút kia');
}
function thanks(){
	alert('😈😈😈😈😈😈😈😈');
	location.assign("https://google.com");
}