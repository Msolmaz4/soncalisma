import React from 'react';
import axios from 'axios';
import * as Http from  'utils/http.helper'


clas SignupViem extends React.component {

    constructor (){
     super();
     this.state ={
         email : '',
         password : '',
         hasError :false,
         errorMessage : ''
        }
    }
    onInputChamged(e) {
         this.setState ({
             [e.target.name]: e.target.value
         })
     }
     onSignup(e) {
         e.preventDefault();

         if(this.state.email === ''|| this.state.password === ''){
             this.setState({
             hasError :true,
             errorMessage:'lutfen tum alanlari doldurunuz'

             });
            }
            return;
         
         Http.post('auth/sign-up',this.state)
         .then(res => {
             console.log('res',res);
            }

             if (!res.status) {
                this.setState({
                    hasError:!res.status,
                    errorMessage : res.error.code === 11000 ? 'bu kayitli' : 'beklenmeyen hata'
                })
             }
             
         });
         

     }

renderError(){
    return <div className='alert alert-danger'>{this.state.errorMessage}</div>;
}

render (){

    const {onViemChange } = this.props;
    const Error =this.renderError.bind(this);
    return(
        <div>
            <from className='form-inline' onSubmit={this.onSignup.bind(this)}>
              <div className='form-grup'>
                  <input type='text' name='email'className='from-control' placeholder='E-Posta' value={this.state.email} onChange={this.onInputChanged.bind(this)}></input>

              </div>
                <div className='form-group mx-sm-3'>
                <input type='password' name='password'className='from-control' placeholder='sifre' value={this.state.password} onChange={this.onChanged.bind(this)}></input>
                </div>
                <button type='submit' className='btn btn-primary'>Kayit ol</button>
            </from>
            {this.state.hasError?<Error /> :null}
            <p>
                Zaten uye misniz?<br />
                o zaman girs yapmak icin <b><u><a style={{ fontSize:'18px'}} href='#' onClick {e => {
                    e.preventDefault();
                    onViemChange(1);}}>tijklayiniz</a>
                    </u></b>



            </p>



        </div>
    )
}



}
export default SignupViem;