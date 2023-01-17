
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './NotFound';
import PostItem from './PostItem';
import SinglePage from './SinglePage'

function App() {


  return (
    <>

<Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="article" />} />
            <Route path="/article" element={<SinglePage />} />
            <Route path="article/:id" element={<PostItem />}/>
     

        

            <Route path="/" element={<NotFound />} />
          </Route>
        </Routes>

    </>
  )
}

export default App;
