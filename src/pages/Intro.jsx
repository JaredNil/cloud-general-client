import React from 'react';
import Sidebar from './../components/sidebar/Sidebar';
import Footer from './../components/footer/Footer';
import Navbar from './../components/navbar/Navbar';
import Login from '../components/authorization/Login';

const Intro = () => {
	let isAuth = false

	return (
		<div className="app">
			<Sidebar isAuth={isAuth} />
			<section className="content">
				<Navbar />
				hi, this app
				<Login></Login>
			</section>
			<Footer />
		</div>
	);
};

export default Intro;