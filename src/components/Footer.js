import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
							<ul className="footer_nav">
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">FAQs</a>
								</li>
								<li>
									<a href="contact.html">Contact us</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
							<ul>
								<li>
									<a href="#">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-twitter"></i>{" "}
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fab fa-instagram"></i>{" "}
									</a>
								</li>

								<li>
									<a href="#">
										<i className="fab fa-pinterest-p"></i>{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="footer_nav_container">
							<div className="cr text-center">
								©2022 All Rights Reserverd. Hamro <span>Footwear</span>
								Collection
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
