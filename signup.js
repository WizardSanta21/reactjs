import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component{
     render(){
      return(
        <div>
            <section> 

<div className="signin"> 

 <div className="content"> 

  <h2>Sign Up</h2> 

  <div className="form"> 

   <div className="inputBox1"> 

    <input type="text" required placeholder="Employee Name"/>
     

   </div> 
    <div className="inputBox1"> 

    <input type="text" required placeholder="Employee Code"/> 
     

   </div> 

   <div className="inputBox1"> 

    <input type="password" required placeholder="Password"/>  
      

   </div> 
    <div className="inputBox1"> 

    <input type="password" required placeholder="Confirm Password"/> 
      

   </div> 

   <div className="links"> <a href="#">Forgot Password</a> <Link to="/pages/login" >Login</Link>  

   </div> 

   <div className="inputBox"> 

    <input type="submit" value="SIGN IN" Link to="/pages/home"/>
      

   </div> 

  </div> 

 </div> 

</div> 

</section> 


        </div>
       );
     
     }
}

export default Signup;
