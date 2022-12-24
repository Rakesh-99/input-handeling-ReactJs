import React, { Component } from "react";
import './Form.css';


// Handeling the form inputs !

class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: null,
            num: null
        }
        this.isShow = false
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(' name is ' + this.name + ' & ' + ' Num is ' + this.num)

        const name = event.target.name.value;
        const num = event.target.num.value

        this.setState({ name, num, isShow: true }, () => {
            console.log('name is ' + name + ' & ' + ' Num is ' + num);
            event.target.name.value = "";
            event.target.num.value = "";

        })

    }

    render() {

        return (

            <div className="center">
                <form action="" onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <select name="num" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
