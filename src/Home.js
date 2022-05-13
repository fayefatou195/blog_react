import BlogList from './BlogList';
import usefetch from './usefetch';

 const Home = () => {
   const {data: blogs, isLoadind, error} =usefetch('http://localhost:8000/blogs?_sort=id&_order=desc');
  return (
    <div className="home">
      {error && <div style={ {'color': 'red'}}>{error}</div>}
      {isLoadind && <div>En cour de traitement ....</div>}
      {blogs && <BlogList blogs={blogs} title={"Liste des blogs"} /> }
   </div>
  );
}
export default Home;
