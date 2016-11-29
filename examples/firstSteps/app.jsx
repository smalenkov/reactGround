var str = "String from variable";

function Hero(props) {
  return (
    <div className="container">
      <img src={props.imgUrl} alt="React logo" className="main-logo" />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>{str}</p>
    </div>
  );
}

ReactDOM.render(
            <div>
              <Hero title="Hello React"
                    text="React is cool view library"
                    imgUrl="https://facebook.github.io/react/img/logo.svg"/>
              <Hero title="Hello Angular"
                    text="Angular is framework"
                    imgUrl="https://angular.io/resources/images/logos/angular2/angular.svg"/>
            </div>,
  document.getElementById('root'));