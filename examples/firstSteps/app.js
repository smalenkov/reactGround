var logo = React.createElement('img', {
  src: 'https://facebook.github.io/react/img/logo.svg',
  className: 'main-logo'
});

var title = React.createElement('h1', null, 'Hello React');
var text = React.createElement('p', null, 'React is cool view library');

var container = React.createElement('div', {
    className: 'container'
  }, logo, title, text);

ReactDOM.render(container, document.getElementById('root'));