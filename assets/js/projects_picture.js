/* grass */
var slider_index_grass = document.getElementById('slider_index_grass');
var slider_main_grass = document.getElementById('slider_main_grass');

var all_pictures_grass = slider_main_grass.children;

var iNow_grass = 0;

var isClick = true;

for(var i = 0; i < all_pictures_grass.length; i++){
	var span = document.createElement('span');
	if(i == 0) {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 1)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	else {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 0.3)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	slider_index_grass.appendChild(span);
	span.addEventListener('mouseover', function(){
		this.style.color = 'rgba(255, 255, 255, 1)';
	});
	span.addEventListener('mouseout', function(){
		changeIndex_grass();
	});
}

for(var i = 1;i < all_pictures_grass.length; i++){
	all_pictures_grass[i].style.left = 720 + 'px';
}

function nex_grass() {
	if(isClick){
		isClick = false;
		$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': -720 }, 800);
		iNow_grass ++;
		if(iNow_grass >= all_pictures_grass.length){
			iNow_grass = 0;
		}
		all_pictures_grass[iNow_grass].style.left = 720 + 'px';
		$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800);
		changeIndex_grass();
	}
}

function pre_grass() {
	if(isClick){
		isClick = false;
		$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': 720 }, 800);
		iNow_grass--
		if(iNow_grass < 0){
			iNow_grass = all_pictures_grass.length - 1;
		}
		all_pictures_grass[iNow_grass].style.left = -720 + 'px';
		$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800);
		changeIndex_grass();
	}
}

for(var i = 0; i < slider_index_grass.children.length; i++){
	slider_index_grass.children[i].onmousedown = function(){
		if(isClick){
			isClick = false;
			var index = parseInt(this.id);
			if(index > iNow_grass){
				$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': -720 }, 800);
				all_pictures_grass[index].style.left = 720 + 'px';
			}else if(index < iNow_grass){
				$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': 720 }, 800);
				all_pictures_grass[index].style.left = -720 + 'px';
			}
			iNow_grass = index;
			$('#slider_main_grass div').eq(iNow_grass).animate({ 'left': 0 }, 800);
			setTimeout(function(){
				isClick = true;
			}, 800);
			changeIndex_grass();
		}
	}
}

function changeIndex_grass(){
	for(var i = 0; i < slider_index_grass.children.length; i++){
		slider_index_grass.children[i].style.color = 'rgba(255, 255, 255, 0.3)';
	}
	slider_index_grass.children[iNow_grass].style.color = 'rgba(255, 255, 255, 1)';
}

/* dry_mountain_and_water */
var slider_index_dry_mountain_and_water = document.getElementById('slider_index_dry_mountain_and_water');
var slider_main_dry_mountain_and_water = document.getElementById('slider_main_dry_mountain_and_water');

var all_pictures_dry_mountain_and_water = slider_main_dry_mountain_and_water.children;

var iNow_dry_mountain_and_water = 0;

var isClick = true;

for(var i = 0; i < all_pictures_dry_mountain_and_water.length; i++){
	var span = document.createElement('span');
	if(i == 0) {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 1)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	else {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 0.3)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	slider_index_dry_mountain_and_water.appendChild(span);
	span.addEventListener('mouseover', function(){
		this.style.color = 'rgba(255, 255, 255, 1)';
	});
	span.addEventListener('mouseout', function(){
		changeIndex_dry_mountain_and_water();
	});
}

for(var i = 1;i < all_pictures_dry_mountain_and_water.length; i++){
	all_pictures_dry_mountain_and_water[i].style.left = 720 + 'px';
}

function nex_dry_mountain_and_water() {
	if(isClick){
		isClick = false;
		$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': -720 }, 800);
		iNow_dry_mountain_and_water ++;
		if(iNow_dry_mountain_and_water >= all_pictures_dry_mountain_and_water.length){
			iNow_dry_mountain_and_water = 0;
		}
		all_pictures_dry_mountain_and_water[iNow_dry_mountain_and_water].style.left = 720 + 'px';
		$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800);
		changeIndex_dry_mountain_and_water();
	}
}

function pre_dry_mountain_and_water() {
	if(isClick){
		isClick = false;
		$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': 720 }, 800);
		iNow_dry_mountain_and_water--
		if(iNow_dry_mountain_and_water < 0){
			iNow_dry_mountain_and_water = all_pictures_dry_mountain_and_water.length - 1;
		}
		all_pictures_dry_mountain_and_water[iNow_dry_mountain_and_water].style.left = -720 + 'px';
		$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800);
		changeIndex_dry_mountain_and_water();
	}
}

for(var i = 0; i < slider_index_dry_mountain_and_water.children.length; i++){
	slider_index_dry_mountain_and_water.children[i].onmousedown = function(){
		if(isClick){
			isClick = false;
			var index = parseInt(this.id);
			if(index > iNow_dry_mountain_and_water){
				$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': -720 }, 800);
				all_pictures_dry_mountain_and_water[index].style.left = 720 + 'px';
			}else if(index < iNow_dry_mountain_and_water){
				$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': 720 }, 800);
				all_pictures_dry_mountain_and_water[index].style.left = -720 + 'px';
			}
			iNow_dry_mountain_and_water = index;
			$('#slider_main_dry_mountain_and_water div').eq(iNow_dry_mountain_and_water).animate({ 'left': 0 }, 800);
			setTimeout(function(){
				isClick = true;
			}, 800);
			changeIndex_dry_mountain_and_water();
		}
	}
}

function changeIndex_dry_mountain_and_water(){
	for(var i = 0; i < slider_index_dry_mountain_and_water.children.length; i++){
		slider_index_dry_mountain_and_water.children[i].style.color = 'rgba(255, 255, 255, 0.3)';
	}
	slider_index_dry_mountain_and_water.children[iNow_dry_mountain_and_water].style.color = 'rgba(255, 255, 255, 1)';
}


/* focasa */
var slider_index_focasa = document.getElementById('slider_index_focasa');
var slider_main_focasa = document.getElementById('slider_main_focasa');

var all_pictures_focasa = slider_main_focasa.children;

var iNow_focasa = 0;

var isClick = true;

for(var i = 0; i < all_pictures_focasa.length; i++){
	var span = document.createElement('span');
	if(i == 0) {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 1)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	else {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 0.3)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	slider_index_focasa.appendChild(span);
	span.addEventListener('mouseover', function(){
		this.style.color = 'rgba(255, 255, 255, 1)';
	});
	span.addEventListener('mouseout', function(){
		changeIndex_focasa();
	});
}

for(var i = 1;i < all_pictures_focasa.length; i++){
	all_pictures_focasa[i].style.left = 720 + 'px';
}

function nex_focasa() {
	if(isClick){
		isClick = false;
		$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': -720 }, 800);
		iNow_focasa ++;
		if(iNow_focasa >= all_pictures_focasa.length){
			iNow_focasa = 0;
		}
		all_pictures_focasa[iNow_focasa].style.left = 720 + 'px';
		$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_focasa();
	}
}

function pre_focasa() {
	if(isClick){
		isClick = false;
		$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': 720 }, 800);
		iNow_focasa--
		if(iNow_focasa < 0){
			iNow_focasa = all_pictures_focasa.length - 1;
		}
		all_pictures_focasa[iNow_focasa].style.left = -720 + 'px';
		$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_focasa();
	}
}

for(var i = 0; i < slider_index_focasa.children.length; i++){
	slider_index_focasa.children[i].onmousedown = function(){
		if(isClick){
			isClick = false;
			var index = parseInt(this.id);
			if(index > iNow_focasa){
				$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': -720 }, 800);
				all_pictures_focasa[index].style.left = 720 + 'px';
			}else if(index < iNow_focasa){
				$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': 720 }, 800);
				all_pictures_focasa[index].style.left = -720 + 'px';
			}
			iNow_focasa = index;
			$('#slider_main_focasa div').eq(iNow_focasa).animate({ 'left': 0 }, 800);
			setTimeout(function(){
				isClick = true;
			}, 800)
			changeIndex_focasa();
		}
	}
}

function changeIndex_focasa(){
	for(var i = 0; i < slider_index_focasa.children.length; i++){
		slider_index_focasa.children[i].style.color = 'rgba(255, 255, 255, 0.3)';
	}
	slider_index_focasa.children[iNow_focasa].style.color = 'rgba(255, 255, 255, 1)';
}

/* reconnect */
var slider_index_reconnect = document.getElementById('slider_index_reconnect');
var slider_main_reconnect = document.getElementById('slider_main_reconnect');

var all_pictures_reconnect = slider_main_reconnect.children;

var iNow_reconnect = 0;

var isClick = true;

for(var i = 0; i < all_pictures_reconnect.length; i++){
	var span = document.createElement('span');
	if(i == 0) {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 1)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	else {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 0.3)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	slider_index_reconnect.appendChild(span);
	span.addEventListener('mouseover', function(){
		this.style.color = 'rgba(255, 255, 255, 1)';
	});
	span.addEventListener('mouseout', function(){
		changeIndex_reconnect();
	});
}

for(var i = 1;i < all_pictures_reconnect.length; i++){
	all_pictures_reconnect[i].style.left = 720 + 'px';
}

function nex_reconnect() {
	if(isClick){
		isClick = false;
		$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': -720 }, 800);
		iNow_reconnect ++;
		if(iNow_reconnect >= all_pictures_reconnect.length){
			iNow_reconnect = 0;
		}
		all_pictures_reconnect[iNow_reconnect].style.left = 720 + 'px';
		$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_reconnect();
	}
}

function pre_reconnect() {
	if(isClick){
		isClick = false;
		$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': 720 }, 800);
		iNow_reconnect--
		if(iNow_reconnect < 0){
			iNow_reconnect = all_pictures_reconnect.length - 1;
		}
		all_pictures_reconnect[iNow_reconnect].style.left = -720 + 'px';
		$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_reconnect();
	}
}

for(var i = 0; i < slider_index_reconnect.children.length; i++){
	slider_index_reconnect.children[i].onmousedown = function(){
		if(isClick){
			isClick = false;
			var index = parseInt(this.id);
			if(index > iNow_reconnect){
				$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': -720 }, 800);
				all_pictures_reconnect[index].style.left = 720 + 'px';
			}else if(index < iNow_reconnect){
				$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': 720 }, 800);
				all_pictures_reconnect[index].style.left = -720 + 'px';
			}
			iNow_reconnect = index;
			$('#slider_main_reconnect div').eq(iNow_reconnect).animate({ 'left': 0 }, 800);
			setTimeout(function(){
				isClick = true;
			}, 800)
			changeIndex_reconnect();
		}
	}
}

function changeIndex_reconnect(){
	for(var i = 0; i < slider_index_reconnect.children.length; i++){
		slider_index_reconnect.children[i].style.color = 'rgba(255, 255, 255, 0.3)';
	}
	slider_index_reconnect.children[iNow_reconnect].style.color = 'rgba(255, 255, 255, 1)';
}

/* metadata */
var slider_index_metadata = document.getElementById('slider_index_metadata');
var slider_main_metadata = document.getElementById('slider_main_metadata');

var all_pictures_metadata = slider_main_metadata.children;

var iNow_metadata = 0;

var isClick = true;

for(var i = 0; i < all_pictures_metadata.length; i++){
	var span = document.createElement('span');
	if(i == 0) {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 1)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	else {
		span.className = 'fa fa-window-minimize';
		span.id = i;
		span.style.transition = '1s ease-in-out';
		span.style.color = 'rgba(255, 255, 255, 0.3)';
		span.style.margin = '0 1px';
		span.style.cursor = 'pointer';
	}
	slider_index_metadata.appendChild(span);
	span.addEventListener('mouseover', function(){
		this.style.color = 'rgba(255, 255, 255, 1)';
	});
	span.addEventListener('mouseout', function(){
		changeIndex_metadata();
	});
}

for(var i = 1;i < all_pictures_metadata.length; i++){
	all_pictures_metadata[i].style.left = 720 + 'px';
}

function nex_metadata() {
	if(isClick){
		isClick = false;
		$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': -720 }, 800);
		iNow_metadata ++;
		if(iNow_metadata >= all_pictures_metadata.length){
			iNow_metadata = 0;
		}
		all_pictures_metadata[iNow_metadata].style.left = 720 + 'px';
		$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_metadata();
	}
}

function pre_metadata() {
	if(isClick){
		isClick = false;
		$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': 720 }, 800);
		iNow_metadata--
		if(iNow_metadata < 0){
			iNow_metadata = all_pictures_metadata.length - 1;
		}
		all_pictures_metadata[iNow_metadata].style.left = -720 + 'px';
		$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': 0 }, 800);
		setTimeout(function(){
			isClick = true;
		}, 800)
		changeIndex_metadata();
	}
}

for(var i = 0; i < slider_index_metadata.children.length; i++){
	slider_index_metadata.children[i].onmousedown = function(){
		if(isClick){
			isClick = false;
			var index = parseInt(this.id);
			if(index > iNow_metadata){
				$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': -720 }, 800);
				all_pictures_metadata[index].style.left = 720 + 'px';
			}else if(index < iNow_metadata){
				$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': 720 }, 800);
				all_pictures_metadata[index].style.left = -720 + 'px';
			}
			iNow_metadata = index;
			$('#slider_main_metadata div').eq(iNow_metadata).animate({ 'left': 0 }, 800);
			setTimeout(function(){
				isClick = true;
			}, 800)
			changeIndex_metadata();
		}
	}
}

function changeIndex_metadata(){
	for(var i = 0; i < slider_index_metadata.children.length; i++){
		slider_index_metadata.children[i].style.color = 'rgba(255, 255, 255, 0.3)';
	}
	slider_index_metadata.children[iNow_metadata].style.color = 'rgba(255, 255, 255, 1)';
}
