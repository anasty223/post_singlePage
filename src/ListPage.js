
import Post from "./Post"

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(article => <Post key={article.id} article={article} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (<>

   <h3 className="results">Results: {results.length}</h3>


        <main className="list">{content}</main>
        

        </>
    )
}
export default ListPage