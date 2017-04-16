require('./header.js')

require("../scss/products");

console.log("products!")

// init
var Banner = function(){
	this.banner_intro = document.querySelector("#products-intro").children
	this.banner_cnt = document.querySelector('#text')
	this.banner_txt = this.banner_cnt.getElementsByTagName('DIV')

	//controller
	this.count = this.banner_txt.length - 1
	this.right = 0;
	this.center = 0;
	this.flag = 1;
	this.next = 0;
}

Banner.prototype.init = function() {
    this.controller();
}


Banner.prototype.controller = function() {
	var left_btn = document.querySelector('#left-btn')
	var right_btn = document.querySelector("#right-btn")
	var self = this
	left_btn.addEventListener("click", function(){
		if(self.right < 120 * self.count && self.flag == 1){
			self.flag = 0
			self.next = self.center + 1
			self.switchClassName(-1)
		}
	})

	right_btn.addEventListener("click",function(){
		if(self.right > 0 && self.flag == 1){
			self.flag = 0
			self.next = self.center - 1
			self.switchClassName(1)
		}
	})
}


Banner.prototype.switchClassName = function(e){
	if(e == -1){
		this.banner_cnt.classList.add("left-active")
		this.right += 120;
		this.banner_intro[this.center].classList.add("right-out")
		this.banner_intro[this.next].classList.add("right-in")
	}else if(e == 1){
		this.banner_cnt.classList.add("right-active")
		this.right -= 120;
		this.banner_intro[this.center].classList.add("left-out")
		this.banner_intro[this.next].classList.add("left-in")
	}
	this.banner_txt[this.center].classList.add("subpadding")
	this.banner_txt[this.next].classList.add("addpadding")
	this.banner_cnt.addEventListener("webkitAnimationEnd",endFunction)
	this.banner_cnt.addEventListener("animationend",endFunction)
	var self = this
	function endFunction(){
		self.flag = 1;
		if(e == -1){
			self.banner_cnt.classList.remove("left-active")
		}else{
			self.banner_cnt.classList.remove("right-active")
		}
		self.banner_intro[self.center].className = "products-content"
		self.banner_intro[self.next].className = "products-content products-on"
		self.banner_cnt.style.marginRight = self.right + "px";
		self.banner_txt[self.center].classList.remove("subpadding")
		self.banner_txt[self.next].classList.remove("addpadding")
		self.banner_txt[self.center].className = "products-item"
		self.banner_txt[self.next].classList.add("products-item-center")
		self.center = self.next
	}
}

var banner = new Banner();
banner.init()