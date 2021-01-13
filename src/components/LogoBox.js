/* eslint-disable import/no-anonymous-default-export */
import logo from '../assets/logo.png';

export default () => {
    return(
        <>
            <header className='logoBox'>
                <figure>
                    <img src={logo} alt="PSD2CSS logo"/>
                </figure>
            </header>
        </>
    )
};