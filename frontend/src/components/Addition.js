import Axios from 'axios';
import React, { Component } from 'react'
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  

export default class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //nam becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }
    // To be called after user clicks on submit.
    mySubmitHandler = async (event) => {

        event.preventDefault(); // prevent default behaviour
        //Constructing URL to send to the server.
        const url = `https://praneethreddynakka-profile-creater-se.up.railway.app/add/${this.state.firstNumber}/and/${this.state.secondNumber}`

        //Using fetch to send a GET request to the server.

        // const data =  await axios.get(url);

        // console.log(data);
        
           await fetch(url)
            .then((result) => result.json())
            .then(result => {
                //After the request finished, update the state.
                //NOTE: You do not care where or how to display the result.
                // As HOW to display is the job of the view.
                // You just update the state and let React take it on from there.
                debugger;
                this.setState({ queryResult: result.Addition })
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                    <form onSubmit={this.mySubmitHandler}>

                        <div>
                        <div className="form-group">
                            <label htmlFor="firstNumber">Enter First Number</label>
                            <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="secondNumber">Enter Second Number</label>
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>

                        </div>


                        <div className="mt-4 mb-4">
                      
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </div>
                    </form>
                </div>
                </div>

                <div className="row">
                    <div className="col"><h3>Your Addition Result (from server) is: {this.state.queryResult} </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <h3>Your Addition Result (from ReactJS) is: {Number(this.state.firstNumber) + Number(this.state.secondNumber)} </h3>
                    </div>
                </div>
            </div>
        );
    }
}
