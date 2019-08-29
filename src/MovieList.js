import React from "react"
import axios from 'axios'
// https://www.youtube.com/watch?v=GTQZf_0hTKg

class MovieList extends React.Component {

    state = {
        photos: []
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
            console.log(response.data)
            this.setState({
                photos: response.data.slice(0, 10)
            })
        })
    }

    render(){
        return <section>
            <div className='row'>
            {this.state.photos.map(photo => {
                return (
                    <div key={photo.id} className="col s12 m4">
                        <div className="card">
                        <div className="card-image">
                            <img src={photo.thumbnailUrl} />
                            <span className="card-title">{photo.title}</span>
                        </div>
                        <div className="card-action">
                            <a >This is a link</a>
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </section>
    }
}

export default MovieList;