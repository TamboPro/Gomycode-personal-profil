import React from 'react'
import '../css/style.css'
import Addresse from './Profile/Addresse'
import FullName  from './Profile/FullName'
import ProfilePhoto from './Profile/ProfilePhoto'
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  return (
    <div>
        <div className="container mt-5">            
            <div className="row d-flex justify-content-center">                
                <div className="col-md-7">                    
                    <div className="card p-3 py-4">                        
                        <ProfilePhoto />                       
                        <div className="text-center mt-3">
                            <FullName/>
                                                      
                            <span>Ing Mécatronicien</span>  


                            <div className="px-4 mt-1">  
                              <Addresse />                             
                            </div>                            
                            <ul className="social-list">
                                <li><i className="bi bi-facebook"></i></li>
                                <li><i className="bi bi-dribbble"></i></li>
                                <li><i className="bi bi-instagram"></i></li>
                                <li><i className="bi bi-linkedin"></i></li>
                                <li><i className="bi bi-google"></i></li>
                            </ul>                            
                            <div className="buttons">                                
                                <button className="btn btn-outline-primary px-4">Message</button>
                                <button className="btn btn-primary px-4 ms-3">Contact</button>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>            
        </div>
    </div>
  )
}
