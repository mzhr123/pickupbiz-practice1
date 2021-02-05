import React, {Component} from "react";
import  Childcc  from "./Childcc";

class Parentcc extends Component {
    state = {
        person:[
            {name:"thor", age:25},
            {name:"superman", age:30},
            {name:"batman", age:35}
        ], 
    };
    
  // this is the main part of changing the state button -1
    changeNameHandler = () => {
        this.setState({
            person: [
                {name:"thor", age: 25},
                {name:"clark", age:30},
                {name:"bruce", age:35}
            ],
        });
    };

     // this is the main part of changing the state button -2
    changeNameHandler1 = () => {
        this.setState({
            person: [
                {name:"aadil", age:200},
                {name:"rizwan", age:300},
                {name:"saim", age:400}
            ],
        });
    };

    render(){
        return(
            <div>
                <button onClick={this.changeNameHandler}>on Click Event</button>
                    <br/>           <br/>
                <button onClick={this.changeNameHandler1}>click hear</button>                
                <Childcc name={this.state.person[0].name} age={this.state.person[0].age} />
                <Childcc name={this.state.person[1].name} age={this.state.person[1].age} />
                <Childcc name={this.state.person[2].name} age={this.state.person[2].age} />

            </div>
        );
    }
}
export default Parentcc