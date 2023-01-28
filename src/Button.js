import "./App.css"
import "./Button.css"

const Button = (props) => {
    // const targetValue = props.newWindow ? "_blank" : "_self"
    const colorClass = `button ${props.color}`
    return (
        <a 
            href={props.link} 
            className={colorClass} 
            // target={targetValue}
            target={props.newWindow ? "_blank" : "_self"}
            // style = {{color: props.color2}} // another way to pass in text and/or margin color
        >
            {props.buttonText} 
        </a>)
}

export default Button