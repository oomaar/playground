import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../../redux/slices/videoSlice";
import {
    Title,
} from "../Feed/styledFeed";

const Feed = ({ fetchVideos }) => {
    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);

    return (
        <Title>Video List Here</Title>
    );
};

export default connect(null, { fetchVideos })(Feed);