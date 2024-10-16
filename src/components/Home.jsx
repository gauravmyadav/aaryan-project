import React from 'react'
import PartnerImg from "../assets/images/bg-partner1.jpg"


export default function Home() {
	return (
		<div className='container-fluid'>
			<div className="carousel slide carousel-fade" id="withcontrols" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={require("../assets/images/Banner/Slider 01.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">Laptops's</h1>
							{/* <h2 className="head-2 text-white"></h2> */}
							<h2 className="head-3 text-white">Shopping</h2>
							<p className="category"><span>New trending Laptop</span></p>
							<p><a href="#" className="btn btn-primary">Shop </a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={require("../assets/images/Banner/Slider 2.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">Laptop's</h1>
							{/* <h2 className="head-2 text-white">Sale</h2> */}
							<h2 className="head-3 text-white"><strong className="font-weight-bold">50%</strong> Off</h2>
							<p className="category"><span>Big sale</span></p>
							<p><a href="#" className="btn btn-primary">Shop</a></p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={require("../assets/images/Banner/slider 3.jpg")} className="w-100" alt="" />
						<div className="carousel-caption">
							<h1 className="head-1 text-white">New</h1>
							<h2 className="head-2 text-white">Arrival</h2>
							<h2 className="head-3 text-white">up to <strong className="font-weight-bold">30%</strong> off</h2>
							<p className="category"><span>New brand laptop</span></p>
							<p><a href="#" className="btn btn-primary">Shop</a></p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#withcontrols">
					<span className="carousel-control-prev-icon"></span>
					{/* <!-- <i className="fa-solid fa-arrow-rotate-left"></i> --> */}
				</button>
				<button className="carousel-control-next" data-bs-slide="next" data-bs-target="#withcontrols">
					<span className="carousel-control-next-icon"></span>
					{/* <!-- <i className="fa-solid fa-arrow-rotate-left"></i> --> */}
				</button>
			</div>
			<div>
			<div className="container text-center mt-5 p-3 mb-5">
				<h1>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h1>
			</div>
			<div className="container-fluid">
				<div className=" collection row mb-5">
					<div className="col-lg-6 text-center">
						<a href=""><img className='w-100' src={require("../assets/images/Gaming/Dell-Gaming-G15-5515-3.webp")} alt="" /></a>
						<h2 className='mt-2'><a href="#" style={{ color: "black" }} >Dell Gaming Laptop</a></h2>
					</div>
					<div className="col-lg-6 text-center ">
						<a href=""><img className='w-100 ' src={require("../assets/images/Gaming/Hp Gaming.webp")} alt="" /></a>
						<h2 className='mt-5'><a href="#" style={{ color: "black" }}>Hp Gaming Laptop</a></h2>
					</div>
				</div>
			</div>
			</div>

			<div className="container text-center mt-5 p-3 ">
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
									<span className="price">$139.00</span>
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
		<div style={{backgroundImage: `url(${PartnerImg})`}}>
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
