import React from 'react'

function Contact() {
	return (
		<div className='Contact'>
			<div className="container">
				<div className="main-title">Biz bilan bog'laning</div>
				<div className="about">
					<h1>Har qanday savollaringiznga mutaxasislarimiz tez orada javob berishadi.</h1>
				</div>
				<div className="contact-info">
					<div className="details">
					<div className="item">
							<div className="icon">
								<i className="fa-solid fa-location-dot"></i>
							</div>
							<p>Toshkent shahar, Amir Temur ko'chasi, 12-uy</p>
						</div>
						<div className="item">
							<div className="icon">
								<i className="fa-solid fa-phone"></i>
							</div>
							<p>+998 (71) 123-45-67</p>
						</div>
						<div className="item">
							<div className="icon">
								<i className="fa-solid fa-message"></i>
							</div>
							<p>info@techcraft.uz</p>
						</div>
						<div className="item">
							<div className="icon">
								<i className="fa-solid fa-tablet"></i>
							</div>
							<p>www.techcraft.uz</p>
						</div>
					</div>

					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59915.49844840892!2d69.20407624303485!3d41.31115128493007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4e71171a0e5%3A0x7d64b1d6d5e1c0f4!2z0J3QsNGI0LrQtdC90LjRhtC60LDRjywg0KLQvtC00LDQvQ!5e0!3m2!1suz!2s!4v1688476828371!5m2!1suz!2s"

							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Google Map"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact