import "./FeatureCard.css"

const FeatureCard = (props) => {
    return(
        <>
            <article className="featureCard">
                <img src = {props.imageSource} alt="pic"></img>
                <br></br>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </article>
        </>
    )
}

export default FeatureCard