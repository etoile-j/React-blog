import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import PostView from "./pages/PostView";
import "./global.css";
import data from "./data.json";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Banner data={data.blog} />
					<Main data={data} />
				</Route>
				<Route exact path="/postView">
					<PostView />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}

export default App;
