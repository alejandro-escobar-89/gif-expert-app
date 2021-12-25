import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import './GifGrid.css';
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {
    const {data: gifs, loading} = useFetchGifs(category);

    return (
        <div className="gif-grid">
            <p className="category">{category}</p>

            {loading && <p className="loader animate__animated animate__flash animate__infinite animate__slow">Loading...</p>}

            <div className="images">{gifs.map(gif => (<GifGridItem key={gif.id} image={gif}/>))}</div>
        </div>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;