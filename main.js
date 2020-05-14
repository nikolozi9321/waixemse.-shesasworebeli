let addButtons = document.getElementsByTagName('button');

let bl = addButtons.length;

for(let i = 0; i < bl; i++){
	
	addButtons[i].addEventListener('click', function(){
		this.classList.toggle('added');
		if (this.classList.contains('added')){
			this.textContent = 'დამატებულია';
		} else {
			this.textContent = 'დამატება';
		}
		
	})
	
}


document.addEventListener("click", function () {
	document.getElementById("burger-menu").onclick = openOverlay;


	if (document.querySelector(".overlay").style.width == "100%") {
	  document.getElementById("burger-menu").onclick = closeOverlay;
	}
  });
  

  function openOverlay() {

	document.querySelector(".overlay").style.width = "100%";

	document.querySelector("body").style.overflow = "hidden";
	
	document.getElementById("burger-icon").style.display = "none";
	document.getElementById("close-burger-icon").style.display = "block";
  }
  
  function closeOverlay() {

	document.querySelector(".overlay").style.width = "0px";
	
	document.querySelector("body").style.overflow = "visible";
	
	document.getElementById("close-burger-icon").style.display = "none";
	document.getElementById("burger-icon").style.display = "block";
  }
  

//   let list = document.getElementsByClassName("overlayNavLinks");
  
//   let lengthOfList = list.length;

//   for (let i = 0; i < lengthOfList; i++) {
// 	list[i].addEventListener("click", function () {
// 	  closeOverlay();
// 	});
//   }


