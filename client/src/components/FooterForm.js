import React from 'react';
import axios from 'axios';


export default class FooterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            usrname: '',
        };
        this.changeUsrHandler = this.changeUsrHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.sumbitHandler = this.sumbitHandler.bind(this);
    }


    changeUsrHandler(event) {
        this.setState({ usrname: event.target.value });
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    sumbitHandler = event => { 

        alert(`Thank you ` + this.state.usrname + ` your email has been submitted`);
        event.preventDefault();

        const usrname = this.state.usrname;
        const email = this.state.email;

        let data = JSON.stringify({
            usrname,
            email
        });

        axios.post(`https://vodoorealm.herokuapp.com/api/add`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(usrname + " " + email);
            })
    }

    render() {
        return (
            <div id="kickstart-register">
                <form id="regform-final" onSubmit={this.sumbitHandler}>
                    <h1 id="reg-head"> Register </h1>
                    <h4 id="reg-sub"> Sign up to get 30% off </h4>
                    <input name="usrname"
                        className="kickregister"
                        type="text"
                        placeholder="Type your full name"
                        onChange={this.changeUsrHandler} />

                    <input name="email"
                        className="kickregister"
                        type="text"
                        placeholder="Type your email"
                        onChange={this.changeEmailHandler} />

                    <button className="submitreg" type="submit"> S u b m i t </button>
                </form>
            </div>
        );
    }

};


