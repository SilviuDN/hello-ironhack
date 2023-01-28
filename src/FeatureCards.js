import FeatureCard from "./FeatureCard";

import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'

const FeatureCards = (props) => {

    // const innerJSX = ''

    // props.featureCards.forEach(el => {
    //     innerJSX += <FeatureCard title = {el.title} description = {el.description} imageSource = {el.imageSource}/>
    // });

    return(
        <>
            <FeatureCard title = "Declarative" description = "React makes it painless to create interactive UIs." imageSource = {icon1}/>
            <FeatureCard title = "Components" description = "Build encapsuled components that manage their state." imageSource = {icon2}/>
            <FeatureCard title = "Single-Way" description = "A set of imutable values is passed to the components." imageSource = {icon3}/>
            <FeatureCard title = "JSX" description = "Statically typed, designed to run on modern browsers." imageSource = {icon4}/>

            {/* {
                props.featureCards.forEach( el => <FeatureCard title = "{el.title}" description = "{el.description}" imageSource = {icon1}/>)
            } */}

        </>

    )
}

export default FeatureCards