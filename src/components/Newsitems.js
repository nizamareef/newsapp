import React from 'react'

const Newsitems = (props) => {

    let { title, description, imageurl, newsurl, author, date, source } = props
    return (
        <div className="container my-3">

            <div className="row">
                <div className="col md-3">
                    <div className="card"  >
                        <img style={{ width: "100%", height:"150px" }} src={!imageurl ? "https://www.royalholloway.ac.uk/media/4531/news.jpg" : imageurl} className="card-img-top" alt="..." />
                        <div  style={{height:300}}className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zindex: 1 }}>
                                {source}
                            </span>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-dark" >Read more</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Newsitems