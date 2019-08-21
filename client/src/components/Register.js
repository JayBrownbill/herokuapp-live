import React from 'react';
import axios from 'axios';
import utils from 'util'

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

    // AXIOS POST METHOD 

    // axios.post('/api/register/', this.state).then(function(res){
    //     console.log(res);
    //     console.log(res.data);
    // });

    sumbitHandler = event => {

        event.preventDefault();

        const usrname = this.state.usrname;
        const email = this.state.email;

        let data = JSON.stringify({
            usrname,
            email
        });

        // let usrname = this.state.usrname;
        // let email = this.state.email;


        axios.post(`http://localhost:5000/api/add`, data,{
            headers : {
                'Content-Type': 'application/json',
            }
        })
        .then(res =>{
            console.log(res);
            console.log(res.data);
            console.log(usrname + " "  + email);
        })

    }


    // --------------------------------------


    render() {
        return (
            <div id="register-wrapper" >
                <div>
                    <img src={pager} alt="Captains Pager" />
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

                <div>
                    <h1 id="pager"> <span> Sign up to get a message from Captain Stranges pager.</span> </h1>
                </div>

            </div>
        )
    }
};





        // const fname = this.state.usrname;
        // const eml = this.state.email;

        // axios({
        //     method: "post",
        //     headers: 'Access-Control-Allow-Origin',                  ***** OLD BUT WORKING AXIOS METHOD POST *******
        //     mode: 'cors',
        //     url: "http://localhost:5000/api/add",
        //     data: {fname, eml},
        //     // config: { headers: { 'Content-Type': 'multipart/form-data' } }

        // }).then(function (response) {
        //     //handle success
        //     console.log(response);
        // })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     })
        // event.preventDefault();
        // console.log(fname, eml);




     // <div id="signUp">       OLD SIGNUP FORM ------***
            //     <h1> <span> Sign up to get a message from Capt.Stranges pager </span> </h1>
            //     <form onSubmit={this.sumbitHandler}>
            //         <label className="formLbl">
            //             EMAIL <br/> 
            //         <input type="text"
            //                 value={this.state.email}
            //                 placeholder="Connect to the Vodo Realm"
            //                 onChange={this.changeEmailHandler} />
            //         </label>
            //         <input type="submit" 
            //             value="Submit" 
            //             className="BtnLarge"/>
            //     </form>
            // </div>