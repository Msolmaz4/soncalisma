import React from 'react';

const PasswordReset= ({onViemChange}) => (

    <div>

<form className="form-inline">
                   <div className="form-group">
                       <input style= {{ width: "400px",marginRight: "10px"}} type="text" className="form-control" placeholder="eposta" />
                   </div>
                   

                   <button type="submit" className="btn btn-primary">sifremi resetle!</button>

                  

               </form>
 

               <p>
                   Uye girisi yapmak icin  tiklayiniz<b><u><a style={{fontsize:"18px"}} href="#" onClick={e => {
                       e.preventDefault();
                       onViemChange(1);
                   }}>tiklayiniz</a></u></b>


               </p>



    </div>


)
export default PasswordReset;