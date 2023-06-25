const { Artboard } = require('scenegraph');
const React = require('react');
const ReactDOM = require('react-dom');

function createPanel() {
  const panel = document.createElement('div');
  ReactDOM.render(React.createElement(App), panel);
  return panel;
}

function show(event) {
  const panel = createPanel();
  event.node.appendChild(panel);
}

function update(selection) {
  // Handle selection change event
}

module.exports = {
  panels: {
    randomThemeGenerator: {
      show,
      update,
    },
  },
};
