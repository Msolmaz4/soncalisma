import React, { Component } from 'react';
import LoginViem from './LoginViem';
import SignupViem from './SignupViem';
import PasswordReset from './PasswordReset';

class AuthViem extends Component {


   // 1 ; giris ekrani
   // 2; kayit ekrani
   // 3; sifre reset


    constructor(){
        super();
        this.state ={
             currentViem : 1
        }
    }
   
     changeViem(newViem){
         this.setState({
             currentViem:newViem    //ekrana yeniyen komut bunu loginViem kayit oldan cagirmma gerekir
         })
     }
  
    render() {

     return this.state.currentViem === 1
                ?<LoginViem onViemChange={this.changeViem.bind(this)} />
                :this.state.currentViem === 2
                ?<SignupViem onViemChange={this.changeViem.bind(this)} />
                :<PasswordReset onViemChange={this.changeViem.bind(this)} />

    
                 
                
        
    }
}



export default AuthViem;
