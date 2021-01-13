/* eslint-disable import/no-anonymous-default-export */
import wp from '../assets/logo-wordpress.png';

export default ({headerText,text}) => {
    return(
        <div className='miniBox'>
            <h3>{headerText}</h3>
            <p>{text}</p>
            <figure>
                <img src={wp} alt='wordpress logo' />
            </figure>
        </div>
    )
};