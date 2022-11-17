import { Component } from "react";
import Material from "../Material/Material";
import SearchBar from "../SearchBar/SearchBar";
class Lista extends Component {
    constructor(){
        super();
        this.state = {
            materials: [],
            search: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({search: event.target.value});
    }

    render(){
        const {materials,search} = this.state;
        const filteredmaterials = materials.filter(mat => {
            return mat.name.toLowerCase().includes(search.toLowerCase());
        });

        return !materials.length ?
        <h1>Loading</h1>
        :
        <div>
            <SearchBar onInputChange={this.onInputChange}/>
            <Material nombre={filteredmaterials}/>
        </div> 
    }
}

export default Lista;