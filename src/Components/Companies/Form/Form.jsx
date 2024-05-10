import {useState} from 'react'
import './Form.css'
const Form=()=>{

    return(
        <div className="content">
        <p className="heading">Add Company</p>
         <p className="para">Listing companies</p>
         <br/>
         <div className="container">
             <div>



                 <label htmlFor="fname">Company Name</label>
                 <input type="text" id="fname" name="firstname" placeholder="Company Name" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Industry</label>
                 <input type="text" id="fname" name="firstname" placeholder="Industry" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Location</label>
                 <input type="text" id="fname" name="firstname" placeholder="Location" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Website</label>
                 <input type="text" id="fname" name="firstname" placeholder="Website" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Contact Person</label>
                 <input type="text" id="fname" name="firstname" placeholder="Contact Person" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Contact Email</label>
                 <input type="text" id="fname" name="firstname" placeholder="Contact Email" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">Contact Phone</label>
                 <input type="text" id="fname" name="firstname" placeholder="Contact Phone" onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">XXX</label>
                 <input type="text" id="fname" name="firstname" placeholder="Contact Email"
onChange={(e)=>setDisplayText(e.target.value)}/>
                 <label htmlFor="fname">XXX</label>
                 <input type="text" id="fname" name="firstname" placeholder="Contact Email" onChange={(e)=>setDisplayText(e.target.value)}/>


                 <label htmlFor="subject">Company Details</label>
                 <textarea id="subject" name="subject" placeholder="Write something.."></textarea> 

                 <button className="btn" type="submit" onClick={()=>Click()}>Submit</button>

                 </div>
                 </div>
                 <div className='extreme'></div>
     </div>
    );
}

export default Form;