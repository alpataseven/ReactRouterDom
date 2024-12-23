export default function ProductCards({ item }) {
    return (
        <>
            <div className="col-sm mb-5">
                <div className="card">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description.substring(0, 20)}...</p>
                        <p className="lead">{item.price}</p>
                        <a href="#" className="btn btn-primary">Fav</a>
                    </div>
                </div>
            </div>
        </>
    )
}