const title = 'Click frontend favorites';
var element = <h1 className="main-title">{title}</h1>;


// Classes

var ElemBox = React.createClass({
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
      countTwo: this.state.countTwo + this.state.count
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
      </div>
    )
  }
});

var Heroes = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var context = this;
    fetch(this.props.url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      context.setState({data: data.users});
    })
    .catch( alert );
  },
  render: function() {
    return (
          <div>
            <UserList data={this.state.data} />
          </div>
    )
  }
});

var UserList = React.createClass({
  render: function() {
    return (
          <div>
            {
              this.props.data.map(function(item, index) {
                return (
                    <div className="heroes-container" key={index}>
                      <div>{item.name}</div>
                      <div>{item.lastname}</div>
                      <div className="heroes-age">{item.age}</div>
                      <UserText />
                    </div>
                    )
              })
            }
          </div>
    )
  }
});

var UserText = React.createClass({
  render: function() {
    return (
      <div className="user-text">
        Небольшой текстик о пользователе :)
      </div>
    )
  }
});


// Renders

ReactDOM.render(element, document.getElementById('mainTitle'));

ReactDOM.render(
            <div>
              <ElemBox title="Hello React"
                       text="React is cool view library"
                       imgUrl="https://facebook.github.io/react/img/logo.svg" />
              <ElemBox title="Hello Angular"
                       text="Angular is framework"
                       imgUrl="https://angular.io/resources/images/logos/angular2/angular.svg" />
            </div>,
  document.getElementById('root'));

ReactDOM.render(<Heroes url="data.json" />, document.getElementById('heroes'));


