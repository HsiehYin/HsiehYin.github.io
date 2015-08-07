var flag=0 , one , two ,three ,four , flag2=1, A , B ;

		function getNum(number){
			if(flag==0){
				one = document.getElementById("boxone").value = number;
				flag = flag+1;
			}else if(flag==1){
				two = document.getElementById("boxtwo").value = number;
				flag=flag+1;
			}else if(flag==2){
				three = document.getElementById("boxthree").value = number;
				flag=flag+1;
			}else if(flag==3){
				four = document.getElementById("boxfour").value = number;
				flag=flag+1;
			}
		}

	function compare(R1,R2,R3,R4){
		var R=[R1,R2,R3,R4];
		A=0;
		B=0;
		for(var i=0 ; i<4 ; i++){
			if(R[i]==one && i==0){
				A=A+1;
			}else if(R[i]==two && i==1){
				A=A+1;
			}else if(R[i]==three && i==2){
				A=A+1;
			}else if(R[i]==four && i==3){
				A=A+1;
			}else if(R[i]==one && i!=0){
				B=B+1;
			}else if(R[i]==two && i!=1){
				B=B+1;
			}else if(R[i]==three && i!=2){
				B=B+1;
			}else if(R[i]==four && i!=3){
				B=B+1;
			}
		}
		if(A==4){
			document.getElementById("show11").style.display = "block";
		}else if(flag2==10 && A !=4){
			document.getElementById("show11").style.display = "block";
			document.getElementById('show11').innerHTML ="超過10次囉!";
		}
	}

function getResult(){
		if(flag2==1){
			document.getElementById("show1").style.display = "block";
			document.getElementById('show1').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==2){
			document.getElementById("show2").style.display = "block";
			document.getElementById('show2').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==3){
			document.getElementById("show3").style.display = "block";
			document.getElementById('show3').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==4){
			document.getElementById("show4").style.display = "block";
			document.getElementById('show4').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==5){
			document.getElementById("show5").style.display = "block";
			document.getElementById('show5').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==6){
			document.getElementById("show6").style.display = "block";
			document.getElementById('show6').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==7){
			document.getElementById("show7").style.display = "block";
			document.getElementById('show7').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==8){
			document.getElementById("show8").style.display = "block";
			document.getElementById('show8').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==9){
			document.getElementById("show9").style.display = "block";
			document.getElementById('show9').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}else if(flag2==10){
			document.getElementById("show10").style.display = "block";
			document.getElementById('show10').innerHTML = one+" "+two+" "+three+" "+four
			+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+A+" A&nbsp;&nbsp;"+B+" B";
			flag2=flag2 + 1;
		}	
		document.getElementById('boxone').value='';
		document.getElementById('boxtwo').value='';
		document.getElementById('boxthree').value='';
		document.getElementById('boxfour').value='';
		one=null;
		two=null;
		three=null;
		four=null;
		flag=0;
	}

function inputClear(){
	document.getElementById('boxone').value='';
	document.getElementById('boxtwo').value='';
	document.getElementById('boxthree').value='';
	document.getElementById('boxfour').value='';
	//document.getElementById("guessform").reset();
	one=null;
	two=null;
	three=null;
	four=null;

	flag=0;
}