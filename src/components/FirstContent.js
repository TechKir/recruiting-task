/* eslint-disable import/no-anonymous-default-export */
import FirstHeader from './FirstHeader';
import CarouselBox from './CarouselBox';

export default () => {
    return(
        <section className='firstContent'>
            <header className='headerBox altColor'>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header>
            <CarouselBox/>
        </section>
    )
};