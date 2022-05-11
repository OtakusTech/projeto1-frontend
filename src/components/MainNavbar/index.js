import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
	Button,
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	Nav,
	Container,
	Input
} from "reactstrap";
import Pesquisa from '../Pesquisa';

import Logo from '../../assets/logo/LOGO-PRINCIPAL-BRANCA.png'

const MainNavbar = () => {

	let history = useNavigate();
	const [collapseClasses, setcollapseClasses] = useState('');
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const id = localStorage.getItem('user-id');
		setUserId(id);
		let headroom = new Headroom(document.getElementById("navbar-main"));
		headroom.init();
	}, [])

	const logoutUser = () => {
		setUserId(null);
		localStorage.clear();
	}

	return (
		<>
			<header className="header-global">
			<Navbar
				className="navbar-main navbar-transparent headroom"
				expand="lg"
				id="navbar-main"
			>
				<Container>
				<button className="navbar-toggler" id="navbar_global">
					<span className="navbar-toggler-icon" />
				</button>
				<UncontrolledCollapse
					toggler="#navbar_global"
					navbar
					className={collapseClasses}
					onExiting={() => setcollapseClasses("collapsing-out")}
					onExited={() => setcollapseClasses("")}
				>
					<NavbarBrand className="mr-lg-5" to="/" tag={Link}>
						<img src={Logo}/>
					</NavbarBrand>
					<Nav className="navbar-nav-hover align-items-lg-center" navbar>
						<NavItem>
							<a href="/anime/new" className="text-white">Novo Anime</a>
						</NavItem>
						{
							userId && 
								<NavItem>
									<a href={`profile/${userId}`} className="text-white">Meu Perfil</a>
								</NavItem>
						}
						<NavItem>
							<a href="/tags" className="text-white">Tags</a>
						</NavItem>
					</Nav>
					<Nav className="align-items-lg-center ml-lg-auto" navbar>
						<NavItem>
							<Pesquisa className="pesquisa"/>
						</NavItem>
						<NavItem className="d-none d-lg-block ml-lg-4">
							<Button
								className="btn-neutral btn-icon"
								style={{ blackgroungColor: '#34004a' }}
								href={userId ? null : "/login"}
								target="_self"
							>
							<span className="btn-inner--icon">
								<i className="fa fa-user mr-2" />
							</span>
							<span className="nav-link-inner--text ml-1" onClick={() => userId ? logoutUser() : history('/login')}>
								{userId ? "Logout" : "Login"}
							</span>
							</Button>
						</NavItem>
					</Nav>
				</UncontrolledCollapse>
				</Container>
			</Navbar>
			</header>
		</>
	);
}

export default MainNavbar;
