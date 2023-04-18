import logo from './logo.svg';
import './App.css';
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().headless())
  .build();

  function scrap() {
  driver.get('https://eservicetest.helsingborg.se/h130');
  let nextButton =  driver.findElement(By.className('nextbuttonlink'));
  nextButton.click();
  const inputs = driver.executeScript('return document.getElementsByTagName("input");');
  return inputs.length;
 } 


function App() {
  scrap();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The page has scrap() number of input elements!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
