import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
     render(){
      return(
        <div>
            <section>
                    <div class="navbar">
                        <a href="#name">Employee Name</a>
                        <a href="#code">Employee Code</a>
                    </div>

                    <div class="navbar1">
                        <a href="#" onclick="loadPage('op1.html')">APR</a>
                        <a href="#about" onclick="loadPage('op2.html')">ACD</a>
                        <a href="#about">Process</a>
                    </div>
            </section>

        </div>
       );
     
     }
}

export default Home;
