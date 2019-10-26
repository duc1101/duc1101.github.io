function nhay(){
	var m = document.getElementById('m');
	var r = document.getElementById('r');
	var cham = document.getElementById('ch');
	var d = document.getElementById('d');
	var u = document.getElementById('u');
	var c = document.getElementById('c');
	var color_table = ['red','orange','yellow','green','aqua','blue','white'];
	var bg_table = ['url("images/bg.jpg")','url("images/bg1.jpg")','url("images/bg2.jpg")','url("images/bg3.jpg")','url("images/bg4.jpg")'];
	var bg_table_2 = ['url("images/bg5.jpg")','url("images/bg6.jpg")','url("images/bg7.jpg")','url("images/bg8.jpg")'];
	var time = 1;
	var count =2;
	setInterval(function(){
		if(time%50==0){
			// đổi nền tự động
			if(window.matchMedia('(max-width: 666px)').matches){
				// khi reponsive về màn dọc
				var bg_length_2 = Math.random()*bg_table_2.length;
				var bg_key = Math.floor(bg_length_2);
				_body.style.backgroundImage=bg_table_2[bg_key];
			}else{
				// khi màn hình ngang
				var bg_length = Math.random()*bg_table.length;
				var bg_key = Math.floor(bg_length);
				_body.style.backgroundImage=bg_table[bg_key];
			}
		}
		if(time<=42){
					// chạy xuôi
					duc.style.fontFamily='Tangerine';
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
					duc.style.fontFamily='Fredericka the Great';
					duc.style.fontSize='27px';
					c.style.color = color_table[count];
					u.style.color = color_table[count];
					d.style.color = color_table[count];
					cham.style.color = color_table[count];
					r.style.color = color_table[count];
					m.style.color = color_table[count];
					// _body.style.backgroundImage='url("images/bg1.jpg")';
					count++;
				}else if(time==71||time==114||time==201){
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
					duc.style.fontSize='26px';
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
			},90);			
}
function clock(){
	/*var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var second = document.getElementById('second');*/
	setInterval(function(){
		var d = new Date();
		hour.innerHTML = (d.getHours() < 10) ? '0'+d.getHours() : d.getHours();
		minute.innerHTML = ':'+((d.getMinutes() < 10) ? '0'+d.getMinutes() : d.getMinutes()); 
		second.innerHTML = ':'+((d.getSeconds() < 10) ? '0'+d.getSeconds() : d.getSeconds());
	},1000);
}
function show_menu(){
	var show_app_left = document.getElementById('show_app_left');
	if(show_app_left.style.display ==="none"){
		show_app_left.style.display = "block";
	}else{
		show_app_left.style.display = "none";
	}
}
function show_button(){
	var show_app_left = document.getElementById('show_app_left');
	var bu_mail = document.getElementById('bu_mail');
	var sp_mail = document.getElementById('sp_mail');
	var _body = document.getElementById('_body');
	if(window.matchMedia('(max-width: 359px)').matches){
		bu_mail.innerHTML='';
	}else if(window.matchMedia('(max-width: 440px)').matches){
		bu_mail.innerHTML='Mr.DUC0616';
	}else{
		bu_mail.innerHTML='mr.duc0616@gmail.com';
	}
	if(window.matchMedia('(max-width: 666px)').matches){
		_body.style.backgroundImage='url("images/bg8.jpg")';
		show_app_left.style.display = "none";
		bu_mail.style.display ="block";
		sp_mail.style.display ="none";
	}else{
		_body.style.backgroundImage='url("images/bg.jpg")';
		show_app_left.style.display = "block";
		bu_mail.style.display ="none";
		sp_mail.style.display ="block";
	}
}
jQuery(function() {
	if(window.matchMedia('(max-width: 340px)').matches){
		jQuery("body").snow({
			intensity: 5,
			sizeRange: [6, 11],
			opacityRange: [0.4, .7],
			driftRange: [11, 20],
			speedRange: [11, 40]
		});
	}else if(window.matchMedia('(max-width: 667px)').matches){
		jQuery("body").snow({
			intensity: 11,
			sizeRange: [11, 16],
			opacityRange: [0.4, .7],
			driftRange: [11, 20],
			speedRange: [16, 80]
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
