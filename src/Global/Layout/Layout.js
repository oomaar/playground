import { Navbar } from "../../components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "..";
import { Provider } from "react-redux";
import { store } from "../../redux";

export const Layout = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <Navbar />
                {children}
            </ThemeProvider>
        </Provider>
    );
};
