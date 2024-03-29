'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/css.js');

var _head = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactIntercom = require('react-intercom');

var _reactIntercom2 = _interopRequireDefault(_reactIntercom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var pageTitle = _ref.pageTitle;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'bitfak - ',
        pageTitle
      ),
      _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }),
      _react2.default.createElement('script', { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true }),
      _react2.default.createElement(_reactIntercom2.default, { appID: 'kry8ns5a' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { className: (0, _css.style)(styles.logo), src: 'static/logo.png' })
    )
  );
};

var styles = {
  logo: {
    width: '120px'
  }
};