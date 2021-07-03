import HomeDropdown from "../components/HomeDropdown";
import HomeStatic from "../components/HomeStatic";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<div id="LandingPage">
				<HomeStatic />
				<HomeDropdown />
			</div>
			<Footer />
		</>
	);
}

export default Home;
