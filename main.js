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


// open overlay
document.addEventListener("click", function () {
	document.getElementById("burger-menu").onclick = openOverlay;
	// close overlay on another click
	if (document.querySelector(".overlay").style.width == "100%") {
	  document.getElementById("burger-menu").onclick = closeOverlay;
	}
  });
  
  // Open Overlay func
  function openOverlay() {
	// set width to 100% to show up overlay
	document.querySelector(".overlay").style.width = "100%";
	// disable scrolling
	document.querySelector("body").style.overflow = "hidden";
	// change image on click
	document.getElementById("burger-icon").style.display = "none";
	document.getElementById("close-burger-icon").style.display = "block";
  }
  
  // Close Overlay func
  function closeOverlay() {
	// set width to 0px to hide overlay
	document.querySelector(".overlay").style.width = "0px";
	// enable scrolling
	document.querySelector("body").style.overflow = "visible";
	// change image on click
	document.getElementById("close-burger-icon").style.display = "none";
	document.getElementById("burger-icon").style.display = "block";
  }
  
  // overlay will be closed, when you click nav links in menu
  // get all overlay nav links
  let list = document.getElementsByClassName("overlayNavLinks");
  
  let lengthOfList = list.length;
  // event handler
  for (let i = 0; i < lengthOfList; i++) {
	list[i].addEventListener("click", function () {
	  closeOverlay();
	});
  }


