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

	// 下一张
	this.nextBtn.onclick = function() {
		_this.nextClick(this)

	}
	// 上一张
	this.prevBtn.onclick = function() {
		_this.prevClick(this)
	}
    // 自动播放
	autoPlay = function() {
		_this.autoPlay(this)
	}
	// 启动自动播放
	_this.autoPlay(this)
    // 鼠标移入时清除定时器
	bannerWrapper.onmouseover = function() {
		clearInterval(_this.Timer);
	}
    // 鼠标移出时自动播放
	bannerWrapper.onmouseout = function() {
		_this.autoPlay(this)
	}
    // 悬浮小圆点切换轮播
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].index = i
		this.ali[i].onmouseover = function() {
			_this.aliActive(this)
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

Banner.prototype.aliActive = function(oLi) {
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = ''
	}
	oLi.className = 'active'
	this.num = oLi.index + 1
	this.banner.style.left = -this.num * this.oimgW + 'px'
	this.banner.style.transition = 'all 1s'
	this.banner.style.webkitTransition = 'all 1s'
}
Banner.prototype.imgChange = function() {
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

Banner.prototype.autoPlay = function() {
	var _this = this
	_this.Timer = setInterval(function() {
		_this.imgChange(this)
	}, 2000);
}
