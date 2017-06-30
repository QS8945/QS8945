
(function(){
	var targetArea = document.querySelector('.target-area');
	targetArea.addEventListener('dragenter',function(){
		this.classList.add('active');
	});
	targetArea.addEventListener('dragleave',function(){
		this.classList.remove('active');
	});
	targetArea.addEventListener('dragover',function(e){
		//return false;
		e.preventDefault();
		e.stopPropagation();
	});
	targetArea.addEventListener('drop',function(e){
		this.classList.remove('active');
		var data = e.dataTransfer.getData('text/plain');
		console.log(data);
		if(data){
			var imgDrop = document.createElement('img');
			imgDrop.src = e.dataTransfer.getData('text/uri-list');
			targetArea.appendChild(imgDrop);
		}else{
			targetArea.innerText = data;
		}
		console.log(e);
	});
})();