import React, {Component} from "react";

class Childcc extends Component {
render(props){
return(
    <div>
        <h1>my first name is {this.props.name} and age is {this.props.age}</h1>
        
    </div>
);
}
}
export default Childcc