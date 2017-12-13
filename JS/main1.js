window.onload = function() {
	new Banner('banner-wrapper')
}

function Banner(id) {
	var _this = this
	var bannerWrapper = document.getElementById(id)
	this.banner = document.getElementById('banner')
	this.oimg = banner.getElementsByTagName('img')[0]
	this.imglen = banner.getElementsByTagName('img').length
	this.oimgW = this.oimg.clientWidth
	this.prevBtn = document.getElementById('prev')
	this.nextBtn = document.getElementById('next')
	this.circle = document.getElementById('circle')
	this.ali = circle.getElementsByTagName('li')

	this.num = 1;
	this.Timer = null;
	this.nextBtn.onclick = function() {
		_this.nextClick(this)

	}
	this.prevBtn.onclick = function() {
		_this.prevClick(this)
	}

	 // function Move() {
		this.Timer = setInterval(function() {
			_this.autoPlay(this)
		}, 2000)
	 // }
	 // Move()

	bannerWrapper.onmouseover = function() {
		clearInterval(this.Timer);
	}

	bannerWrapper.onmouseout = function() {
		this.Timer = setInterval(function() {
			_this.autoPlay(this)
		}, 2000)
		 // Move()
		// this.Timer
	}

	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].index = i
		this.ali[i].onmouseover = function() {
			_this.aliMove(this)
		}
	}

}
Banner.prototype.Transition = function() {
	this.banner.style.left = -this.num * this.oimgW + 'px'
	this.banner.style.transition = 'all 1s'
	this.banner.style.webkitTransition = 'all 1s'

}

Banner.prototype.nextClick = function() {
	var _this = this
	this.num++
		if (this.num == 9) {
			this.num = 0
			this.banner.style.left = -this.num * this.oimgW + 'px'
			this.banner.style.transition = 'all 0s'
			this.banner.style.webkitTransition = 'all 0s'
			this.num = 1
		}
	setTimeout(function() {
		_this.Transition(this)
	}, 0)
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = ''
	}
	this.ali[this.num - 1].className = 'active'
}

Banner.prototype.prevClick = function() {
	var _this = this
	this.num--
		if (this.num == 0) {
			this.num = 9
			this.banner.style.left = -this.num * this.oimgW + 'px'
			this.banner.style.transition = 'all 0s'
			this.banner.style.webkitTransition = 'all 0s'
			this.num = 8
		}
	setTimeout(function() {
	_this.Transition(this)
	}, 0)
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = ''
	}
	this.ali[this.num - 1].className = 'active'
}

Banner.prototype.aliMove = function() {
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = ''
	}
	this.className = 'active'
	this.num = this.index + 1
	this.banner.style.left = -this.num * this.oimgW + 'px'
	this.banner.style.transition = 'all 1s'
	this.banner.style.webkitTransition = 'all 1s'
}
Banner.prototype.autoPlay = function() {
	var _this = this
	this.num++
		if (this.num == 9) {
			this.num = 0
			this.banner.style.left = -this.num * this.oimgW + 'px'
			this.banner.style.transition = 'all 0s'
			this.banner.style.webkitTransition = 'all 0s'
			this.num = 1
		}
	setTimeout(function() {
		_this.Transition(this)
	}, 0)
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = ''
	}
	this.ali[this.num - 1].className = 'active'
}