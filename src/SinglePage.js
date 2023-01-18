import { useEffect, useState } from "react"
import { getPosts } from "./api/axios"
import ListPage from "./ListPage"
import SearchBar from "./SearchBar"




function SinglePage() {
    const [articles, setArticles] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
      getPosts().then(json => {
        setArticles(json)
        setSearchResults(json)
      })
    }, [])
  
  
  
    return (
      <div className='container_post'>
        <SearchBar articles={articles} setSearchResults={setSearchResults} searchResults={searchResults}/>
     </div>
    )
  }
  export default SinglePage;