import React from 'react'
import Banner from '../components/Banner';
import Benifit from '../components/Benifit';
import BestSeller from '../components/BestSeller';
import CategoryBanner from '../components/CategoryBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrival from '../components/NewArrival';

const Home = () => {
  return (
		<>
			<Navbar />
			<Banner />
			<CategoryBanner />
			<NewArrival  />
			<Benifit />
			<BestSeller />
			<Footer />
		</>
	);
}

export default Home