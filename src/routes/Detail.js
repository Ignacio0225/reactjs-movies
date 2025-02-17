import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const [detail, setDetail] = useState(true)
    const [movie, setMovie] = useState([])

    const {id} = useParams()

    const getMovie = async () => {

        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setDetail(false)
    }

    useEffect(() => {
        getMovie();
    }, []);

    return <div>
        {detail ? <h1>Loading...</h1> :
            <div>
                <h1>{movie.title}</h1>
                <h4>ID : {movie.id}</h4>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <h2>{movie.year}</h2>
                <p>{movie.description_full}</p>
                <ul>
                    {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <Link to="/">Home</Link>
            </div>
        }
    </div>
}
export default Detail;