import {useState} from 'react';
import './Header.css';
export default function Header() {

	/*
	 * Check the text for grammar mistakes
	 */
	
	 
	return (
		<div className='header-container'>
			<div className='logo-container'>
			<img width="140" height="33" src="https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg" alt="Grammarly Logo"/>
			</div>
			<div className='detail-container'>
			<div className="user-greeting">
						<span data-qa="txtUsername">Hello, Saurabh Gaur</span>
			</div>
			</div>
		</div>
	)
}