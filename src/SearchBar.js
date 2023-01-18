import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import ListPage from "./ListPage";


const SearchBar = ({ articles, setSearchResults,searchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(articles);

    const resultsArray = articles.filter(
      (article) =>
        article.title.includes(e.target.value) ||
        article.summary.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (<>
    <header>
      <form onSubmit={handleSubmit}>
        <div >
          <label className="search" htmlFor="search">
            <FontAwesomeIcon  className="inputIcon" icon={faMagnifyingGlass} />
            Filter by keywords
            <TextField
            style={{marginTop:"10px"}}
              variant="outlined"
              type="text"
              className="search__input"
              id="search"
              onChange={handleSearchChange}
              placeholder="The most successful IT companies in 2020"
              InputLabelProps={{ shrink: true }}
  inputProps={{
    sx: {
       paddingLeft:6,
    //   "&::placeholder": {
    //     paddingLeft: "30px"
    //   }
    }
  }}
            />
 
          </label>
 
        </div>
      </form>
    </header>
 <ListPage searchResults={searchResults} handleSearchChange={handleSearchChange}/>
    </>
  );
};
export default SearchBar;
