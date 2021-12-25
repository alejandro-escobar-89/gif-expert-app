import PropTypes from 'prop-types';
import 'animate.css';
import './GifGridItem.css';

const GifGridItem = ({image}) => {
    return (
        <figure id={image.id} className="animate__animated animate__bounceIn">
            <img src={image.url} alt={image.title} width="100" height="100" />
            <figcaption>{image.title}</figcaption>
        </figure>
    );
};

GifGridItem.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
};

export default GifGridItem;