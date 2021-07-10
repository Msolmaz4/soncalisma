import React from 'react';
import { connect } from 'react-redux';
import {post} from 'utils/http.helper.js';

import { userInit } from 'store/userReducer';
import { browserHistory} from 'react';

class LoginViem extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        }

    }

    emailChanged(e) {
        this.setState({
            email: e.target.value
        })

    }
    passwordChanged(e) {
        this.setState({
            password: e.target.value
        })
    }

    onUserClick() {

        // HTPP Call
        console.log(this.state);
        const user = {
            email: this.state.email,
            password : this.state.password
        }
        post('auth/login',user).then(res=>{
            if(res.status){
                localStorage.setItem('userToken',res.token);
                this.props.userInit({email:user.email});
                //redirect dashboard
                browserHistory.push('/app');
            }else{
                alert(res.message);
            }

        });
        
    }

    render() {
        const onViemChange = this.props.onViemChange;

        if (this.props.userDAta.name) {

            return <div>LOGIN OLDU</div>
        }
        else {
            return (
                < div>
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="eposta" value={this.state.email} onChange={this.emailChanged.bind(this)} />
                        </div>
                        <div className="form-group mx-sm-3">

                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordChanged.bind(this)} />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.onUserClick.bind(this)}>Giris YAp</button>

                        <a href="#" onClick={e => {
                            e.preventDefault();
                            onViemChange(3);
                        }}>Sifremi unuttum!</a>

                    </form>


                    <p>henuz uye olmadiniz mi?<br />
                        Ucretsiz uye olmak icin <b><u><a href="#" onClick={() => { onViemChange(2); }}>tiklayiniz</a></u></b>


                    </p>



                </div>


            )

        }




    }


}
const mapStateToProps = (state) => {

    return {
        userDAta: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        userInit: (user) => dispatch(userInit(user))

    }
}

// componette iki sey baglayabilirsin o an ki satte 
// veya action baglayabilirsin




export default connect(mapStateToProps, mapDispatchToProps)(LoginViem)

//export default LoginViem; artik kullanmiyoruz map kullandigimizdan