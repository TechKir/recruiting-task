/* eslint-disable import/no-anonymous-default-export */

import MiniBoxContainer from './MiniBoxContainer';
export default () => {
    return(
        <section className='secondContent'>
            <header className='headerBox'>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header>
            <header className='headerBox'>
                <h2>Heading</h2>
            </header>
            <MiniBoxContainer/>
        </section>
    )
};