import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./commons/Header";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {

    return (
        <>
            <Router>
                <Header />
                <Route exact path="/" component={Home}></Route>
            </Router>
        </>
    )

}

export default App;