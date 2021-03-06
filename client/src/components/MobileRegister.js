import React from 'react';
import axios from 'axios';

export default class MobileRegister extends React.Component {

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
            <div id="mobile-reg-form">
                <form id="regform-mobile" onSubmit={this.sumbitHandler}>
                    <h1> Register </h1>
                    <h4 id="reg-sub"> GET 16% OF SOME VODO </h4>
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
