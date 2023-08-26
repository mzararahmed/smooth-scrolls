import React, { Component } from 'react';
import { TweenLite } from "gsap/all";

class SmoothPageScroll extends Component {

	componentDidMount() {
		this.html = document.documentElement;
		this.body = document.body;

		this.scroller = {
			target: document.querySelector("#scroll-container"),
			ease: 0.1, // <= scroll speed
			endY: 0,
			y: 0,
			resizeRequest: 1,
			scrollRequest: 0,
		};

		this.requestId = null;

		TweenLite.set(this.scroller.target, {
			rotation: 0.01,
			force3D: true
		});

		window.addEventListener("load", this.onLoad);
	}

	onLoad = () => {
		this.updateScroller();
		window.focus();
		window.addEventListener("resize", this.onResize);
		document.addEventListener("scroll", this.onScroll);
	}

	updateScroller = () => {

		var resized = this.scroller.resizeRequest > 0;

		if (resized) {
			var height = this.scroller.target.clientHeight;
			this.body.style.height = height + "px";
			this.scroller.resizeRequest = 0;
		}
		var scrollY = window.pageYOffset || this.html.scrollTop || this.body.scrollTop || 0;

		this.scroller.endY = scrollY;
		this.scroller.y += (scrollY - this.scroller.y) * this.scroller.ease;

		if (Math.abs(scrollY - this.scroller.y) < 0.05 || resized) {
			this.scroller.y = scrollY;
			this.scroller.scrollRequest = 0;
		}

		TweenLite.set(this.scroller.target, {
			y: -this.scroller.y
		});

		this.requestId = this.scroller.scrollRequest > 0 ? requestAnimationFrame(this.updateScroller) : null;
	}

	onScroll = () => {
		this.scroller.scrollRequest++;
		if (!this.requestId) {
			this.requestId = requestAnimationFrame(this.updateScroller);
		}
	}

	onResize = () => {
		this.scroller.resizeRequest++;
		if (!this.requestId) {
			this.requestId = requestAnimationFrame(this.updateScroller);
		}
	}

	render() {
		return (
			<div>
				<section className="viewport" style={{ zIndex: '200' }}>
					<div id="scroll-container" className="scroll-container">
						<div className="content">
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="" />
							</div>
							<div className="img-container">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="" />
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default SmoothPageScroll;