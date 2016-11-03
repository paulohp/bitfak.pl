'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reBulma = require('re-bulma');

var _css = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/css.js');

var _link = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reBulma.Container,
    { className: (0, _css.style)(styles.container) },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { className: (0, _css.style)(styles.logo), src: 'static/logo.png' })
    ),
    _react2.default.createElement(
      _reBulma.Section,
      { className: (0, _css.style)(styles.section) },
      _react2.default.createElement(
        'div',
        { className: (0, _css.style)(styles.centerContent) },
        _react2.default.createElement('img', { src: 'static/bitcoin_logo_ball.png', className: (0, _css.style)(styles.btc) })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reBulma.Title,
          { className: (0, _css.style)(styles.centerContent), size: 'is1' },
          'Pay with Bitcoin'
        )
      )
    )
  );
};

var styles = {
  container: {
    width: '960px',
    padding: '10px'
  },
  logo: {
    width: '120px'
  },
  section: {
    marginTop: '40px',
    border: '1px solid #efefef',
    borderRadius: '5px'
  },
  header: {
    padding: '40px 40px 80px 0px'
  },
  centerContent: {
    textAlign: 'center'
  },
  btc: {
    width: '120px',
    position: 'relative',
    top: '-100px'
  }
};
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/pay', Component)
      }
    }
  