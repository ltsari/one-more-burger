import React from "react";
import axios from "axios";
import {Redirect} from "react-router";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toRegisterPage:false,
            form:{
                email:"",
                password:""
            }
        }
    }

    handleChange(e,type){
        var _form = this.state.form;
        _form[type] = e.target.value;
        this.setState({form:_form});
    }
    render(){
        if(this.state.toRegisterPage == true){
            return <Redirect to = "/register"/>
        }
        return (
            <div>
                <div>Login page</div>
                <input value={this.state.form.email} onChange={e=>this.handleChange(e,"email")}/>
                <input value={this.state.form.password} onChange={e=>this.handleChange(e,"password")}/>
                <button class="btn btn-link" onClick = {e=>this.setState({toRegisterPage:true})}>Register</button>
                <button class="btn btn-primary">Login</button>    
            </div>
        )
    }
}
export default Login;