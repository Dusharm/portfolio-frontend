function Home(args) {
  return (    
      <header className="App-header">
        <p>Hi, I'm Danny (He/Him).</p>
        <p>Currently I'm a {args.role} at {args.employer}.</p>
        <p>Feel free to click around.</p>
      </header>
  );
}

export default Home;
