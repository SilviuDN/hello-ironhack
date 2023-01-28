import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';
import "./Header.css"
import Nav from './Nav';

const Header = (props) => {
    return(
        <header>
            <Nav/>
            <div className='hero'>
                <Title text={props.titleText}/>
                <Subtitle/>
                <hr/>
                <Button buttonText="Google search" link="https://www.google.com" newWindow="true" color="light">Awesome!</Button>                
            </div>

        </header>
    )
}

export default Header