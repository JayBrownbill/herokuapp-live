import React from 'react';
import axios from 'axios';


import pager from '../assets/Pager-Rsz.png'
export default class Register extends React.Component {

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
            <div id="register-wrapper" >

                <div className="hide-desk">
                    <h1 id="pager"> <span> SIGN UP BELOW </span> </h1>
                </div>

                <div>
                    <img src={pager} alt="Captains Pager" id="vodo-page" />
                    
                    <form onSubmit={this.sumbitHandler}>

                        <input type="text"
                            value={this.state.usrname}
                            name="usrname"
                            placeholder=""
                            onChange={this.changeUsrHandler} />

                        <input type="text"
                            value={this.state.email}
                            name="email"
                            placeholder=""
                            onChange={this.changeEmailHandler} />

                        <input type="submit"
                            value="Submit"
                            className="BtnLarge submit" />
                    </form>
                </div>

                <div className="hide-mob">
                    <h1 id="pager"> <span> Sign up to get a message from Captain Stranges pager.</span> </h1>
                </div>

            </div>
        )
    }
};