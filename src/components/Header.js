const Header = ({ searchTerm, handleSearchChange }) => {
  return (
    <>
      <h1 className="titre">Movie app </h1>
      <input
        className="rch"
        type="search"
        name="filter"
        id="filter"
        placeholder="Search for a title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </>
  );
};
export default Header;
