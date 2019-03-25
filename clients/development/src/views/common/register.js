import React from "react";
import axios from 'axios';
import './style.css';
import {Redirect} from "react-router";

class RegistrationPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toLoginPage:false,
            form:{
                email:"",
                username:"",
                password:"",
                first_name:"",
                last_name:"",
                address:""
            }
        }
    }


    handleChange(e,type){
        let _form = this.state.form;
        _form[type] = e.target.value;
        this.setState({form:_form})
    }


    RegisterHandler(e){
        e.preventDefault();
        let _form = this.state.form;
        axios({
            method:"POST",
            url:"http://localhost:8000/api/register",
            data:_form
        })
        .then(res=>{
            this.setState({toLoginPage:true})
        })
        .catch(err=>{
            console.log(err)
        })
    }

register
    render(){
        if(this.state.toLoginPage == true){
            return <Redirect to = "/login"/>
        }
        return(
            <div className = "header">
                <form>
                    <input value = {this.state.form.email} placeholder="email" onChange = {e=>this.handleChange(e,"email")}></input>
                    <input value = {this.state.form.username} placeholder="username" onChange = {e=>this.handleChange(e,"username")}></input>
                    <input value = {this.state.form.password} placeholder="password" onChange = {e=>this.handleChange(e,"password")}></input>
                    <input value = {this.state.form.first_name} placeholder="first_name" onChange = {e=>this.handleChange(e,"first_name")}></input>
                    <input value = {this.state.form.last_name} placeholder="last_name" onChange = {e=>this.handleChange(e,"last_name")}></input>
                    <input value = {this.state.form.address} placeholder="address" onChange = {e=>this.handleChange(e,"address")}></input>
                    <button className = "btn btn-link" onClick = {e=>this.RegisterHandler(e)}>Register</button>
                    <button className = "btn btn-primary" onClick = {e=>this.setState({toLogiPage:true})}>Already have an account</button>
                </form>
            </div>
        )
    }
}
export default RegistrationPage;