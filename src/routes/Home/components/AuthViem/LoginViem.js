import React from 'react';



const LoginViem = ({onViemChange}) => (

     <div>

<form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="eposta" />  
                    </div>
                    <div className="form-group mx-sm-3">

                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Confirm identity</button>

                    <a href="#" onClick={e => {
                        e.preventDefault();
                        onViemChange(3);
                    }}>Sifremi unuttum!</a>

                </form>
  

                <p>henuz uye olmadiniz mi?<br />
                    Ucretsiz uye olmak icin <b><u><a href="#" onClick={()=> {onViemChange(2);}}>tiklayiniz</a></u></b>


                </p>



     </div>


)
export default LoginViem;