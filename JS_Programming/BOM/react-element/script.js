// const h2 = React.createElement(
//   'h2',
//   { className: 'subheading', id: 'subhead1' },
//   'Hello Programmer!!'
// );

const container=React.createElement(
    'section',
    {className:'sections', id:'section1'},
[
    React.createElement('h2',{className:'subheadings', id:'subhead1'},'Hello Programmer!!'),
    React.createElement('p',{className:'paragraphs', id:'p1'}, 'This is paragraph')
])

const root = ReactDOM.createRoot(
  document.querySelector('#root')
);

//root.render(h2);
root.render(container);
