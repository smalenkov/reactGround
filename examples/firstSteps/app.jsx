var str = "String from variable";

var Hero = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countTwo: 0
    };
  },
  handleClick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  handleMouseOver: function() {
    this.setState({
      countTwo: this.state.countTwo + 2
    })
  },
  render: function() {
    return (
      <div className="container">
        <div>{this.state.count}</div>
        <div>{this.state.countTwo}</div>
        <img src={this.props.imgUrl} alt="React logo" className="main-logo" onClick={this.handleClick} onMouseOver={this.handleMouseOver} />
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <p>{str}</p>
      </div>
    )
  }
});

ReactDOM.render(
            <div>
              <Hero title="Hello React"
                    text="React is cool view library"
                    imgUrl="https://facebook.github.io/react/img/logo.svg" />
              <Hero title="Hello Angular"
                    text="Angular is framework"
                    imgUrl="https://angular.io/resources/images/logos/angular2/angular.svg" />
            </div>,
  document.getElementById('root'));
