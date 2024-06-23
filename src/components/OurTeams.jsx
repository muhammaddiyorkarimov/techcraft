import React from 'react'
import images from '../images/images'

function OurTeams() {
	return (
		<>
			<div className='about-us'>
				<div className="container">
					<div style={{marginBottom: '50px'}} className="main-title">Bizning jamoa</div>
					<div className="about">
						<p>
							<span>TechCraft</span> —  jamoasi tajribali dasturchi, tahlilchi va loyiha boshqaruvchilaridan iborat. Bizning maqsadimiz — mijozlarimizga eng yaxshi 
							<br /> <br />
							<span>TechCraft</span> yechimlarni taqdim etish orqali ularning biznesini samarali qilishdir. Bu jamoa odamlarga ma'lumotlarni avtomatlashtirish, boshqarish va ulashishlarni qulaylashtirish uchun turli xil texnologiyalardan foydalanishadi. Ular umumiy hisob-kitob tizimlari, mijozlarga xizmat ko'rsatish, ma'lumotlar bazasi boshqarish, hisobotlar va analitika, asbob-uskunalar boshqarish, va boshqa boshqa texnologiyalarni o'z ichiga oladi.
Biznes amaliyotlarini avtomatlashtirish jamoalari, kompaniyalar uchun yangi imkoniyatlarni yaratish, ish jarayonlarini tezlashtirish, va hisob-kitob tizimlari, mijozlarga xizmat ko'rsatish, ma'lumotlar bazasi boshqarish, hisobotlar va analitika, asbob-uskunalar boshqarish, va boshqa boshqa texnologiyalarni o'z ichiga olgan.
						</p>
						<img src={images.teamsImage} alt="About us" />
					</div>
				</div>
			</div>
		</>
	)
}

export default OurTeams