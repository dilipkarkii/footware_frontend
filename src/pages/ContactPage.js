import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [message, setMessage] = useState();
	return (
		<>
			<Navbar />
			{/* <!--Section: Contact v.2--> */}
			<section class="mb-4 container">
				{/* <!--Section heading--> */}
				<h2 class="h1-responsive font-weight-bold text-center my-4">
					Contact us
				</h2>
				{/* <!--Section description--> */}
				<p class="text-center w-responsive mx-auto mb-5">
					Do you have any questions? Please do not hesitate to contact us
					directly. Our team will come back to you within a matter of hours to
					help you.
				</p>

				<div class="row">
					{/* <!--Grid column--> */}
					<div class="col-md-9 mb-md-0 mb-5">
						<form
							id="contact-form"
							name="contact-form"
							action="mail.php"
							method="POST"
						>
							{/* <!--Grid row--> */}
							<div class="row">
								{/* <!--Grid column--> */}
								<div class="col-md-6 mt-2">
									<label for="name" class="">
										Your name
									</label>
									<div class="md-form mb-0">
										<input
											type="text"
											id="name"
											name="name"
											class="form-control mt-2"
										/>
									</div>
								</div>
								{/* <!--Grid column-->

                    <!--Grid column--> */}
								<div class="col-md-6 mt-2">
									<label for="email" class="">
										Your email
									</label>
									<div class="md-form mb-0">
										<input
											type="text"
											id="email"
											name="email"
											class="form-control mt-2"
										/>
									</div>
								</div>
								{/* <!--Grid column--> */}
							</div>
							{/* <!--Grid row-->

                <!--Grid row--> */}
							<div class="row">
								<div class="col-md-12 mt-2">
									<label for="subject" class="">
										Subject
									</label>
									<div class="md-form mb-0">
										<input
											type="text"
											id="subject"
											name="subject"
											class="form-control mt-2"
										/>
									</div>
								</div>
							</div>
							{/* <!--Grid row-->

                <!--Grid row--> */}
							<div class="row">
								{/* <!--Grid column--> */}
								<div class="col-md-12">
									<div class="md-form mt-2">
										<label for="message">Your message</label>
										<textarea
											type="text"
											id="message"
											name="message"
											rows="2"
											class="form-control md-textarea mt-2"
										></textarea>
									</div>
								</div>
							</div>
							{/* <!--Grid row--> */}
						</form>

						<div class="text-center text-md-left mt-2">
							<a
								class="btn btn-primary"
								// onclick="document.getElementById('contact-form').submit();"
							>
								Send Email
							</a>
						</div>
						<div class="status"></div>
					</div>
					{/* <!--Grid column-->

        <!--Grid column--> */}
					<div class="col-md-3 text-center">
						<ul class="list-unstyled mb-0">
							<li>
								<i class="fas fa-map-marker-alt fa-2x"></i>
								<p>Sankhamul, kathmandu-32, Nepal</p>
							</li>

							<li>
								<i class="fas fa-phone mt-4 fa-2x"></i>
								<p> 01 234 567 89</p>
							</li>

							<li>
								<i class="fas fa-envelope mt-4 fa-2x"></i>
								<p>hamrofootwear@gmail.com</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ContactPage;
