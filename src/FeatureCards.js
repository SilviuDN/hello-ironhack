import FeatureCard from "./FeatureCard";
import { Component } from "react";
import { featureCards, pics } from './fakeAPI';

import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'

class FeatureCards extends Component{
    constructor(){
        super()
        this.state = {
            features: featureCards,
            pics: pics
        }
    }

    render(){
        // const {title, description, imageSource} = this.state
        // const pics = [ icon1, icon2, icon3, icon4 ]
        let k = 0
        return(
            this.state.features.map( (el,idx) => {
                // console.log(el)
                el.imageSource = this.state.pics[k++]
                // return <FeatureCard key = {idx} title={el.title} description={el.description} imageSource={el.imageSource}/>
                return <FeatureCard key = {idx} {...el}/>
        })
        )
    }
}


export default FeatureCards