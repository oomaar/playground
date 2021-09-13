import { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { fetchVideos } from "../../redux/slices/videoSlice";
import propTypes from "prop-types";
import {
    Container,
} from "./styledSearchBar";

const SearchBar = ({ fetchVideos }) => {
    const [search, setSearch] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: "/videos",
            search: `search=${search}`
        });
        fetchVideos();
        setSearch('');
    };

    return (
        <Container>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type="text"
                    value={search}
                    required
                    placeholder="Enter your search"
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
        </Container>
    );
};

SearchBar.propTypes = {
    fetchVideos: propTypes.func.isRequired
}

export default connect(null, { fetchVideos })(SearchBar);