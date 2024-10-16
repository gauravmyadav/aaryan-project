import React from 'react'
import PartnerImg from "../assets/images/bg-partner1.jpg"

export default function Men() {
	return (
		<div>
			<div className="container">
				<img className='w-50 h-25 mt-5' src={require("../assets/images/Banner/1600w-iLqmaZmwOz4.webp")} alt="" />
			</div>

			<div className="container">
				<nav class="navbar navbar-expand-lg navbar-dark mx-auto bg-dark ">

					{/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul style={{ marginLeft: "30%" }} class="nav navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">NEW ARRIVLES <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">BEST SELLERS</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#">EXTENDED WIDTHS</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#">SALE</a>
							</li>
						</ul>

					</div>
				</nav>
			</div>

			<div className=" row animeted-card">
				<div className="col-lg-4">
					<div className="banner_thumb">
						<div className="card card-bg-img1">
							<div class="banner_content">
								<h3>Sale up to</h3>
								<h2>50%</h2>
								<p>Laptop <span> & </span> Offers</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="banner_thumb">
						<div className="card card-bg-img2">
							<div class="banner_content">
								{/* <img src={require("../assets/images/product-card/hp new.jpg")} alt="" /> */}
								<h3>Sale up to</h3>
								<h2>50%</h2>
								<p>Laptop <span> & </span> Offers</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="banner_thumb">
						<div className="card card-bg-img3">
							<div class="banner_content">
								<h3>Sale up to</h3>
								<h2>50%</h2>
								<p>Laptop <span> & </span> Offers</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container text-center mt-5  ">
				<h1>BEST SELLERS</h1>
			</div>

			<div className="colorlib-product">
				<div className="container">
					<div className="row">

					</div>
					<div className="row row-pb-md">
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Hp/Hp pavilion i3-cutout.png")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Hp Pavilion</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Hp/Hp probook-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Hp ProBook</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Hp/hp Chromebook 11A-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Hp ChromeBook</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Hp/hp victus-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Hp Victus</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Dell/Dell Lititude-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Dell Lititude</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Dell/Dell XPS Ultra-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Dell XPS Ultra</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Dell/Dell inpiron-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Dell inpiron</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Dell/Dell G16 Gaming-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Dell G16 Gaming</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Asus/ASUS-VivoBook-14-1-cutout.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Asus VivoBook</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Asus/Asus E210.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Asus E210</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Asus/Asus X545.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Asus X545</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Asus/Asus TUF Gaminig.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Asus TUF Gaming</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Aser/acer Aspire 3-cutout.png")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Acer Aspire 3</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Aser/acer Aspire Lite 12th Gen-cutout.png")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Acer Aspire Lite</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Aser/acer aspiare 3 a315-cutout.png")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Acer Aspire A315</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center text-dark">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../assets/images/Aser/acer Nitro 5 Gaming-cutout.png")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#" className='text-dark'>Acer Nitro 5 Gaming</a></h2>
									<span className="price">Rs 139,000</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-5 ">
						<div className="col-md-12 text-center">
							<p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ backgroundImage: `url(${PartnerImg})` }}>
				<div className="colorlib-partner">
					<div className="container ">
						<div className="row  mb-5">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Trusted Partners</h2>
							</div>
						</div>
						<div className="row mt-5 mb-5">
							<div className="col partner-col text-center">
								<img width={100} src={require("../assets/images/Brand logo/hp-cutout.png")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img width={150} src={require("../assets/images/Brand logo/Dell-cutout.png")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center mt-4">
								<img src={require("../assets/images/Brand logo/Asus-cutout.png")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center mt-4">
								<img src={require("../assets/images/Brand logo/acer logo-cutout.png")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center mt-4">
								<img src={require("../assets/images/Brand logo/Lenovo-cutout.png")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
