import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRegisterPage: false,
            form: {
                email: "",
                password: ""
            },
            error: "",
        }
    }

    handleChange(e, type) {
        var _form = this.state.form;
        _form[type] = e.target.value;
        this.setState({ form: _form });
    }

    handleSubmit() {
        axios({
            method: "POST",
            url: "http://localhost:8000/api/login",
            data: this.state.form
        })
            .then(res => {
                localStorage.setItem("_id", res.data._id);
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("first_name", res.data.first_name);
                localStorage.setItem("lust_name", res.data.last_name)
                console.log(res.data);
            })
            .catch(err => {
                if (err.response.status == 401){
                this.setState({
                    error: "Please go outside and fuck yourself! :)"
                })
            }
            console.log(err.response);
        })
}



render(){
    if (this.state.toRegisterPage == true) {
        return <Redirect to="/register" />
    }
    return (
        <div>
            <div>Login page</div>
            <input value={this.state.form.email} onChange={e => this.handleChange(e, "email")} />
            <input value={this.state.form.password} onChange={e => this.handleChange(e, "password")} />
            <span>{this.state.error}</span>
            <button class="btn btn-link" onClick={e => this.setState({ toRegisterPage: true })}>Register</button>
            <button class="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Login</button>
        </div>
    )
}
}
export default Login;