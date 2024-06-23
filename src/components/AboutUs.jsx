import React from 'react'

import images from '../images/images'

function AboutUs() {
	return (
		<>
			<div className='about-us'>
				<div className="container">
					<div className="main-title">Biz haqimizda</div>
					<div className="about">
						<p>
							<span>TechCraft</span> — bu murakkab biznes amaliyotlarini avtomatlashtirishga mo'ljallangan kompaniya. Biz eski texnologiyalarni ishlatmasdan, barcha jarayonlarni kompyuterga kiritish orqali bizneslarni qog'ozlardan voz kechishga yordam beramiz. Bizning maqsadimiz mijozlarimizga vaqt va resurslarni tejashda yordam berishdir.
							<br /> <br />
							<span>TechCraft</span> avtomatlashtirish xizmatlari bilan nafaqat milliy, balki xalqaro miqyosda ham tanilgan kompaniya. Bizning xizmatlarimiz orqali mijozlarimizning biznes jarayonlari soddalashadi va samaradorligi oshadi.
						</p>
						<img src={images.aboutUsImage} alt="About us" />
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutUs