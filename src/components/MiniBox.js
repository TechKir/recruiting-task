/* eslint-disable import/no-anonymous-default-export */

export default ({headerText,text}) => {
    return(
        <div className='miniBox'>
            <h3>{headerText}</h3>
            <p>{text}</p>
        </div>
    )
};