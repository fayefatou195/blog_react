import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import usefetch from "./usefetch";

const BlogDetail =( ) => {
    const { id ,titre,body} =  useParams();
    const{data:blog, isLoadind, error } = usefetch("http://localhost:8000/blogs"+id);
    const history = useHistory();
    const HandleDelete=() => {
        fetch("http://localhost:8000/blogs"+id, {
            method:'DELETE'

        }).then( () => {
            history.push('/');
            console.log('supprimer avec succes');
        })

    }
        return(
        <div  className="">
          {isLoadind && <div>En cour de traitement...</div>}
          {error &&<div>{error}</div>}
          {
              blog && (
                  <div className="blog">
                      <h2 className="blog-titre">{blog-titre}</h2>
                      <small className="blog-publication-date">{"Publier le:${blog-date}"}</small>
                      <p className="blog-body">{blog-body}</p>
                      <p className="blog-author">{"Publier par:${blog-author}"}</p>
                      <button onClick={HandleDelete}>supprimer</button>
                 </div>
              )}
        </div>
    );
}

export default BlogDetail;