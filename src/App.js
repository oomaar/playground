import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact to="/" component={Home} />
            </Switch>
        </Router>
    );
};