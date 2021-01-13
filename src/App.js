import LogoBox from './components/LogoBox';
import FirstContent from './components/FirstContent';
import SecondContent from './components/SecondContent';

function App() {
  return (
    <div className='container'>
      <LogoBox/>
      <main>
        <article>
          <FirstContent/>
          <span className='dot'></span>
          <SecondContent/>
        </article>
      </main>
    </div>
  );
}

export default App;
