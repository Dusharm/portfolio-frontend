import 'bootstrap/dist/css/bootstrap.min.css';

function Links() {
  return (    
      <header className="App-header">
        <p>
          Welcome to my links page.
        </p>
        <p>
          I'm always looking for work. <a href="/contact/">Contact me</a> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className='App-link'
          href='/how-i-made-this-site/index.html'
          target="_blank"
        >
          mdBook Test
        </a>
      </header>
  );
}

export default Links;
