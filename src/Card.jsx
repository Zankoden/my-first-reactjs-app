import ProfileImage from "./assets/space_wallpaper.jpg"

function Card(){
    return(
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img className="card-image" src={ProfileImage} alt="profile picture"></img>

            <h2 className="card-title">Zankoden</h2>
            <p className="card-text">I am studying react js</p>
        </div>
    );
}

export default Card