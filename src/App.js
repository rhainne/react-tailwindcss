import logo from './logo.svg';
import './App.css';

const Title = () => {
  return <div>
    hello world
  </div>;
};

const Description = () => {
  return <div>
    React component with a description
  </div>;
};

const Message = (props) => {
  const { text , color } = props;
  return <div style={{
      color: color
    }}>
    {text}
  </div>;
};

const Box = (props) => {
  const { label, bgColor, textColor, large } = props;

  return <div style={{
    background: bgColor,
    color: textColor,
    fontSize: large ? '40px' : '12px',
  }}>
    {label}
  </div>
};

const MainAppComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <Title />
      <Description />
      <Message text="Mensaje pasado al componente" color="red"/>
      <Message text="Segundo mensaje para el componente" color="green"/>
      <Box 
        label="Adri"
        bgColor="CornflowerBlue" 
        textColor="White"
        large={true}
      />
      <Box 
        label="Gerg" 
        bgColor="Lavender" 
        textColor="Purple"
        large={false}
      />
    </div>
  );
};

function App() {
  return <div>
    <MainAppComponent />
    
  </div>
}

export default App;
