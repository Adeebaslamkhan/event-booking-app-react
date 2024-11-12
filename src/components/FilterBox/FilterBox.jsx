import { useState } from "react";
import { generateDataOptions, categories } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category, searchTerm); // Pass both category and search term to onFilter
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    onFilter(selectedCategory, search); // Pass both category and search term to onFilter
  };

  return (
    <div className="filter-box">
      <label htmlFor="category">Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>{" "}
        {/* Option to show all categories */}
        {generateDataOptions(categories)}
      </select>

      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search events..."
      />
    </div>
  );
};

export default FilterBox;
