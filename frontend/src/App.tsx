import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./commons/Header";
import Sidemenu from "./commons/Sidemanu";
import Home from "./pages/Home";
import Form from "./pages/Form";
import "./App.css";
import { getTodos } from "./connection";
import { Todo } from "./reducers/todo";

const App: React.FC = () => {

    const dispatch = useDispatch();

    /* 最上位コンポーネントは一度しかレンダリングを行わないのでAPIからの取得処理をここに書く */
    useEffect(() => {
        getTodos().then((todos: Todo[]) => {
            dispatch({type: "INITTODOS", payload: {todos: todos}});
        });
    }, [])

    return (
        <>
            <Router>
                <Header />
                <Box display="flex" flexDirection="row">
                    <Sidemenu />
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/form" component={Form}></Route>
                </Box>
            </Router>
        </>
    )

}

export default App;