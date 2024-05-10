import './Coursecard.css'

const Coursecard=()=>{
    return(
        <div className="cards">
            <div className="card">
                <img src={'webdev.png'} alt="" />
                <div className="text">
                <p className="heading">WebDevelopment</p><br/>
                <p className="content">Specialised in Frontend like react, svelte and backend like express and nodejs</p>

                </div>
            </div>
        </div>
    );
}

export default Coursecard;