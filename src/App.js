import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import PostView from "./pages/PostView";
import "./global.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Banner />
					<Main />
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
