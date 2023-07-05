const slider=document.querySelectorAll(".carousel-inner .carousel-item");
let counter=0;
setTimeout(myfunction,7000);
function myfunction(){
	if(counter==slider.length-1){
		counter=0;
		for(let index=0; index<slider.length; index++){
			slider[index].style.marginLeft="0px";
		}
	}
	else{
		slider[counter].style.marginLeft="-950px";
		counter++;
	}
	setTimeout(myfunction,7000);
} 



//------------------------------------------------------------
const slideropinions = document.querySelectorAll(".Testimonial .opinions-warp .opinions");
let index=0;
document.getElementById("next-btn").onclick=function(){
	if(index==slideropinions.length-1){
		index=0;
	}
	else{
		slideropinions[index].style.marginLeft="-950px";
		index++;
	}
	
}
document.getElementById("prev-btn").onclick=function(){
	for(let index=0; index<slider.length; index++){
		slideropinions[index].style.marginLeft="0px";
	}
}


//-------------------------------------------------------------------------