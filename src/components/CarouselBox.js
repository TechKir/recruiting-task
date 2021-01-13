/* eslint-disable import/no-anonymous-default-export */
import MiniBox from './MiniBox';
import WpBox from './WpBox';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <nav>
            <Carousel responsive={responsive}>
                <WpBox headerText='Heading' text='Lorem ipsum dolor sit amet'/>
                <MiniBox headerText='Heading' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam molestiae unde nemo sunt.'/>
                <MiniBox headerText='Ultra Mega Super Long heading' text='Lorem ipsum dolor sit amet'/>
                <WpBox headerText='Heading' text='Lorem ipsum dolor sit amet'/>
                <MiniBox headerText='Heading' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam molestiae unde nemo sunt.'/>
                <MiniBox headerText='Ultra Mega Super Long heading' text='Lorem ipsum dolor sit amet'/>
            </Carousel>
        </nav>
    )
};