import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
     render(){
      return(
        <div>
            <section> 

<div className="login"> 

 <div className="content"> 

  <h2>Log In</h2> 

  <div className="form"> 

    <div className="inputBox"> 

    <input type="text" required placeholder='Employee Code'/>  

   </div> 

   <div className="inputBox"> 

    <input type="password" required placeholder='Password'/>  

   <div className="links"> <a href="#">Forgot Password</a> <Link to="/" >SignUp</Link> 
   </div> 

   <div className="inputBox"> 

    <input type="submit" value="LOG IN"/> 

   </div> 

  </div> 

 </div> 

</div> 
</div>

</section>




        </div>


      );
     
     }
}

export default Login;