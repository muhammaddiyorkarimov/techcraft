import React from 'react'
import ServicesAbout from '../components/ServicesAbout';
import './Service.css'

import images from '../images/images'
import ServiceFullAbout from '../components/ServiceFullAbout';
import Contact from '../components/Contact';

const data = [
	{
		"id": 1,
		"img": images.icon1,
		"title": "Savdo bo'limi",
		"description": "Savdo bo'limi - call-sentr, buyurtmalarni qabul qilish, barkod kiritish, kassa tizimini  avtomatlashtirish.",
		"fullDescription": "- Call Sentr: Qo'ng'iroqlarni qabul qilish, yozib olish va saralash tizimi - Buyurtmalarni Qabul Qilish: Avtomatlashtirilgan buyurtma qabul qilish tizimi - Barkod Tizimi:Shtrix kod kiritish va mahsulotlarni ro'yxatga olish - Kassa Tizimi: Mahsulotlar summasini hisoblash va chek chiqarish jarayonlari"
	},
	{
		"id": 2,
		"img": images.icon1,
		"title": "Banklar",
		"description": "Banklar - xodimlar davomati, navbatlarni avtomatlashtirish.",
		"fullDescription": "-Murakkab Formulalar: Murakkab hisob-kitoblar uchun formulalar - Material Hisobi:Iplarning metrligini hisoblash - Tannarx Hisobi: Mahsulotning tannarxini hisoblash - Ishlab Chiqarishni Quvvat Hisobi:Ishlab chiqarish quvvatini hisoblash - Avtomatlashtirilgan Ishlab Chiqarish: Buyurtmalar bo'yicha avtomatlashtirilgan ishlab chiqarish tizimi - Inson Omilini Kamaytirish: Jarayonlarni avtomatlashtiris orqali inson omilini kamaytirish - Aniqlikni Oshirish: Mahsulotlar va jarayonlarning aniqligini oshirish - Xodimlar Nazorati: Davomat va ish haqi nazorati - Ovqatlanish Nazorati: Ovqatlanish xarajatlarini aniqlik bilan hisoblash - Ishchilar Portali: Reyting va ball to'plash tizimi"
	},
	{
		"id": 3,
		"img": images.icon1,
		"title": "Kilinikalar",
		"description": "Klinikalar - navbatlarni avtomatlashtirish, moliya bo'limi, davolanish hisobotlari, xodimlar bilan ishlash, call-sentr avtomatlashtirish.",
		"fullDescription": "- Navbatlarni Avtomatlashtirish: Masofaviy navbatlarni avtomatlashtirish tizimi - Moliya Bo'limi:Umumiy to'lovlar nazorati - Davolanish Hisobotlari: Davolanish bo'yicha hisobotlar - Xodimlar Nazorati:Xodimlar bilan ishlash tizimi - Call Sentr: Navbat belgilash, saqlash va SMS yuborish tizimi"
	},
	{
		"id": 4,
		"img": images.icon1,
		"title": "Ta`lim tizimi",
		"description": "Davomat, baholash, xodimlar nazorati, oziq-ovqat nazorati, ota-onalar uchun bot.",
		"fullDescription": "- Davomat Nazorati: O'quvchilar va xodimlaing davomati - Baholash: Baholash va jurnal tizimi - Xodimlar Nazorati:Davomat, ish haqi va reyting nazorati - oziq-ovqat Nazorati: Oziq-ovqat xarajatlarini nazorat qilish - Ota-onalar uchun Bot: Bolaning maktabga kelganini ko'rsatuvchi bot"
	},
	{
		"id": 5,
		"img": images.icon1,
		"title": "Ishlab chiqarish",
		"description": "Savdo bo'limi - call-sentr, buyurtmalarni qabul qilish, barkod kiritish, kassa tizimini  avtomatlashtirish.",
		"fullDescription": "-Murakkab Formulalar: Murakkab hisob-kitoblar uchun formulalar - Material Hisobi:Iplarning metrligini hisoblash - Tannarx Hisobi: Mahsulotning tannarxini hisoblash - Ishlab Chiqarishni Quvvat Hisobi:Ishlab chiqarish quvvatini hisoblash - Avtomatlashtirilgan Ishlab Chiqarish: Buyurtmalar bo'yicha avtomatlashtirilgan ishlab chiqarish tizimi - Inson Omilini Kamaytirish: Jarayonlarni avtomatlashtiris orqali inson omilini kamaytirish - Aniqlikni Oshirish: Mahsulotlar va jarayonlarning aniqligini oshirish - Xodimlar Nazorati: Davomat va ish haqi nazorati - Ovqatlanish Nazorati: Ovqatlanish xarajatlarini aniqlik bilan hisoblash - Ishchilar Portali: Reyting va ball to'plash tizimi"
	},
	{
		"id": 6,
		"img": images.icon1,
		"title": "Savdo do`konlari",
		"description": "Mahsulot kirish-chiqish hisobi, ombor hisobi, barkod tizimi, kassa tizimi, ishchilar nazoratini avtomatlashtirish",
		"fullDescription": "- Mahsulot Kirish-Chiqish: Mahsulot kirish-chiqishi hisoboti - ombor Hisobi: Omborda kam qolgan mahsulotlarni ko'rsatish - Barkod Tizimi: Shtrix kod bilan ishlash - Kassa Tizimi:Savdo bo'limi uchun kassa tizimi - Ishchilar Nazorati: Ishchilar davomati va ish haqi nazorati"
	},
	{
		"id": 7,
		"img": images.icon1,
		"title": "Cafe",
		"description": "Mahsulot hisob-kitobi, xodimlar nazorati, savdo bo'limi, mijoz buyurtmalari, onlayn buyurtmalar  avtomatlashtirish.",
		"fullDescription": "- Mahsulot Hisob-kitobi: Ratsion bo'yicha mahsulot hisob-kitobi - Xodimlar Nazorati: Xodimlar nazorati - Savdo Bo'limi: Savdo jarayonlari nazorati - Mijoz Buyurtmalari: Mijozlar buyurtmalarini qabul qilish - Onlayn Buyurtmalar: Onlayn buyurtmalarni qabul qilish tizimi"
	},
	{
		"id": 8,
		"img": images.icon1,
		"title": "Taxi firmalar",
		"description": "Call-sentr, mijoz, operator va haydovchi dasturini avtomatlashtirish.",
		"fullDescription": "- Call Sentr: Qo'ng'iroqlarni qabul qilish tizimi - Mijoz Dasturi:Mijozlar uchun dastur - Operator Dasturi: Operatorlar uchun dastur - Haydovchi Dasturi: Haydovchilar uchun dastur"
	},
	{
		"id": 9,
		"img": images.icon1,
		"title": "Saytlar",
		"description": "- Sayt Yaratish: Istalgan turdagi va funksiyadagi saytlarni yaratish",
		"fullDescription": "Klinikalar - navbatlarni avtomatlashtirish, moliya bo'limi, davolanish hisobotlari, xodimlar bilan ishlash, call-sentr avtomatlashtirish.",
	},
	{
		"id": 10,
		"img": images.icon1,
		"title": " Kameralarda sun'iy  intellekt ",
		"description": "Xavfsizlik tizimini  avtomatlashtirish.",
		"fullDescription": "- Xavfsizlik Tizimi: Xavfsizlik tizimlari uchun sun'iy intellekt"
	},
	{
		"id": 11,
		"img": images.icon1,
		"title": "Uy  egalari",
		"description": "Face ID, xavfsizlik tizimini avtomatlashtirish.Face ID, xavfsizlik tizimini avtomatlashtirish.",
		"fullDescription": "- Face ID Face ID tizimi - Xavfsizlik Tizimi: Uy xavfsizlik tizimi"
	},
]

function Service() {
	return (
		<>
			<div className='services'>
				<div className="container">
					<ServicesAbout />
					<div className="items">
						{data.map(item => {
							return (
								<ServiceFullAbout key={item.id} item={item} />
							)
						})}
					</div>
				</div>
			</div>
			<Contact/>
		</>
	)
}

export default Service