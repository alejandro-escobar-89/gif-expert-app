import PropTypes from 'prop-types';
import { useState } from 'react';
import './AddCategory.css';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleCategorySearchChange = (e) => setInputValue(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const sanitizedValue = inputValue.trim();

        if (sanitizedValue) {
            setCategories((categories) => [sanitizedValue, ...categories]);
        }

        setInputValue('');
    };

    return (
        <form id="category_search_form" onSubmit={handleFormSubmit}>
            <input
                type="search"
                id="category_search"
                name="category_search"
                placeholder="Type a category"
                value={inputValue}
                onChange={handleCategorySearchChange}
            />

            <input type="submit" id="add_category_btn" className="btn btn-primary" value="Add category"/>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;