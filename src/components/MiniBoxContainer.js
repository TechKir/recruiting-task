/* eslint-disable import/no-anonymous-default-export */
import MiniBox from './MiniBox';
import WpBox from './WpBox';

export default () => {
    return (
        <div className='miniBoxContainer'>
            <WpBox headerText='Heading' text='Lorem ipsum dolor sit amet'/>
            <MiniBox headerText='Heading' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam molestiae unde nemo sunt.'/>
            <MiniBox headerText='Ultra Mega Super Long heading' text='Lorem ipsum dolor sit amet'/>
        </div>
    )
};