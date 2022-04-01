import { useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// import Modal from './components/modal'
// import ModalWrapper from "./components/modal";
// import { Modal, Button } from "react-bootstrap";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
	const [modalShow, setModalShow] = useState(true);
	const [login, setLogin] = useState(true);

	const registerClicked = () => {
		setModalShow(false);
	};
	const loginClicked = () => {
		setModalShow(true);
		setLogin(true);
	};
	const showHideModal = () => {
		setModalShow(true);
		setLogin(false);
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/detail" element={<DetailPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
