import './Companies.css' 
const Company=()=>{
    return(
        // <div className="container">
        <div className="company">
            <div className="image">
                <img className="bg" src={'background1.jpg'} alt="" />
            </div>
            <div className="company1">
            <img src={'google.png'} alt="" />
            <div className="text">
                <p className="heading">Google</p>
                <p className="content">Tech firm based in US</p>
            </div>
            </div>
        </div>
        // </div>
    );
}

export default Company;