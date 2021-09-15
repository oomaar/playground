import { useState } from "react";
import history from "../../Global/history";
import {
    Container,
    MainContainer,
    Form,
    Input,
} from "./styledSearchBar";

export const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: "/videos",
            search: `search=${search}`
        });
        setSearch('');
    };

    return (
        <Container>
            <MainContainer>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Input
                        type="text"
                        value={search}
                        required
                        placeholder="Enter your search"
                        onChange={e => setSearch(e.target.value)}
                    />
                </Form>
            </MainContainer>
        </Container>
    );
};