import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Header(props) {
	return (
		<nav className="navbar navbar-expand-lg">
			<ul className="navbar-nav">
				<li className="nav-item active"><a className="nav-link" href="#">{props.menu_1}</a></li>
				<li className="nav-item"><a className="nav-link" href="#">{props.menu_2}</a></li>
				<li className="nav-item"><a className="nav-link" href="#">{props.menu_3}</a></li>
				<li className="nav-item"><a className="nav-link" href="#">{props.menu_4}</a></li>
			</ul>
		</nav>
		);
}
const headerElement = document.getElementById("headerElement");

ReactDOM.render(<div className='container'>
	<Header menu_1="Авиабилеты" menu_2="Направления" menu_3="Акции" menu_4="Сервисы"/>            
	</div>, headerElement);

	function Sidebar(props){
		return(
		
			<li className="nav-item">
				<a className="nav-link active" href={props.link}>{props.menu}</a>
			</li>
		
		);
	}

const sideMenu = document.getElementById("sideMenu");
ReactDOM.render((<div className='container'><ul className="nav flex-column">
	<Sidebar menu="Аэрофлот" link="https://www.aeroflot.ru/us-en" />
	<Sidebar menu="British Airways" link="https://www.britishairways.com/travel/home/public/en_us" />
	<Sidebar menu="Alaska Airlines" link="https://www.alaskaair.com/‎" />
	<Sidebar menu="Fly Dubai" link="https://www.flydubai.com/‎" />
	</ul></div>), sideMenu);

function Content(props){
		return(
		<div className="col-md-4">
			<div className="card" width="18rem">
				<img src={props.src} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.destination}</h5>
					<div className="card-text">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{props.number}</li>
						<li className="list-group-item">{props.date}</li>
						<li className="list-group-item">$ {props.price}</li>
					</ul>
					</div>
					<a href="#" className="btn btn-primary">Купить</a>
				</div>
			</div>
		</div>
		);
}
const content = document.getElementById("content");
ReactDOM.render((<div className="row">
	<Content src="London.jpg" destination="Bishkek-London" number="LN 2128506" date="13.02.2019" price="666"/>
	<Content src="Havana.jpg" destination="Bishkek-Havana" number="HV 2128506" date="13.02.2019" price="666"/>
	<Content src="Alaska.jpg" destination="Bishkek-Alaska" number="AL 2128506" date="13.02.2019" price="666"/>
</div>), content);

function Footer(props) {
	return(
	<div className='container'>E-mail: {props.email} | {props.info}</div>
	);
}
const footerElement = document.getElementById("footerElement");

ReactDOM.render(<div className="fixed-bottom">
<Footer email="tickets@internet.com" info="Copyright (c). Все права защищены."/>
</div>, footerElement);
