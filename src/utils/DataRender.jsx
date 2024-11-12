export const categories = ["All", "Music", "Comedy", "Sci-Fi"];
export const generateDataOptions = (optionsArray) => {
  return optionsArray.map(option => (
    <option key={option} value={option === "All" ? "" : option}>
      {option}
    </option>
  ));
};
