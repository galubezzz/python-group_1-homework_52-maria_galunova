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
		<ul className="nav flex-column">
			<li className="nav-item">
				<a className="nav-link active" href="#">{props.menu_1}</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">{props.menu_2}</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">{props.menu_3}</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">{props.menu_4}</a>
			</li>
		</ul>
		);
	}

const sideMenu = document.getElementById("sideMenu");
ReactDOM.render(<div className='container'>
	<Sidebar menu_1="Аэрофлот" menu_2="British Airways" menu_3="Alyaska Airlines" menu_4="Fly Dubai"/>            
	</div>, sideMenu);

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
	<Content src="London.jpg" destination="London" number="AN 83953" date="10.02.2019" price="200"/>
	<Content src="Havana.jpg" destination="Havana" number="AD 88952" date="11.02.2019" price="230"/>
	<Content src="Alaska.jpg" destination="Alaska" number="AM 86782" date="11.02.2019" price="260"/>
</div>), content);

function Footer(props) {
	return(
	<div className='container'>{props.content}</div>
	);
}
const footerElement = document.getElementById("footerElement");

ReactDOM.render(<div className="fixed-bottom">
<Footer content="Copyright (c). Все права защищены"/>
</div>, footerElement);
