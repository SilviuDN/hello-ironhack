import FeatureCard from "./FeatureCard";
import { Component } from "react";
import { featureCards } from './fakeAPI';

class FeatureCards extends Component{
    constructor(){
        super()
        this.state = {
            features: featureCards
        }
    }

    render(){
        // const {title, description, imageSource} = this.state
        return(
            this.state.features.map( (el,idx) => <FeatureCard key = {idx} title={el.title} description={el.description} imageSource={el.imageSource}/>)
        )
    }
}


export default FeatureCards