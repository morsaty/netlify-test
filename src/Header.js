import React from 'react'
import photo from './header-photo.jpg'

const Header = () => {
	return (
		<header>
			<img src={photo} className="header--photo" alt=''/>
			<h1 className="header--title">Daniel Kwiatkowski</h1>
			<p className="header--subtitle">Frontend Developer</p>
			<p className="header--link">github.com/morsaty</p>
			<div className="header--button_group">
				<button href="#" className="header--button_group-btn">
					<i className="fa-solid fa-envelope"></i> Email
				</button>
				<button href="#" className="header--button_group-btn btn-white">
					<i className="fa-brands fa-linkedin"></i> LinkedIn
				</button>
			</div>
		</header>
	)
}

export default Header
