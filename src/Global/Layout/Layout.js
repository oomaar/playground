import { Navbar } from "../../components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "..";

export const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Navbar />
            {children}
        </ThemeProvider>
    );
};
