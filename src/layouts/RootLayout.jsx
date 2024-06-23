import { Link, NavLink, Outlet } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
	return (
		<div className='root-layout'>
			<header>
				<div className="container">
					<div className="logo"><Link to='/'><span>Tech</span>craft</Link></div>
					<nav>
						<NavLink to='/'>Asosiy</NavLink>
						<NavLink to='/about-us'>Biz haqimizda</NavLink>
						<NavLink to='/services'>Xizmatlar</NavLink>
						<NavLink to='/teams'>Bizning jamoa</NavLink>
						<NavLink to='/contact'>Aloqa</NavLink>
					</nav>
					<div className="header-items">
						<div className="select-language"><span>UZ</span> / RU / ENG</div>
						<div className="header-contact">
							<button><Link to='/contact'>Biz bilan bog'laning</Link></button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default RootLayout