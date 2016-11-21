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

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reBulma.Container,
      { className: (0, _css.style)(styles.container) },
      _react2.default.createElement(_header2.default, { pageTitle: 'What do you want to do?' }),
      _react2.default.createElement(
        _reBulma.Section,
        { className: (0, _css.style)(styles.section) },
        _react2.default.createElement(
          'div',
          { className: (0, _css.style)(styles.header) },
          _react2.default.createElement(
            _reBulma.Title,
            { size: 'is3' },
            'What do you want to do?'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reBulma.Columns,
            null,
            _react2.default.createElement(
              _reBulma.Column,
              null,
              _react2.default.createElement(
                _reBulma.Button,
                { color: 'isInfo', size: 'isLarge' },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/invoices' },
                  'Pay invoices'
                )
              )
            ),
            _react2.default.createElement(
              _reBulma.Column,
              null,
              _react2.default.createElement(
                _reBulma.Button,
                { color: 'isSuccess', size: 'isLarge' },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/topup' },
                  'Topup Phone'
                )
              )
            ),
            _react2.default.createElement(
              _reBulma.Column,
              null,
              _react2.default.createElement(
                _reBulma.Button,
                { color: 'isWarning', size: 'isLarge' },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/withdrawl' },
                  'Withdrawl to my account'
                )
              )
            )
          )
        )
      )
    )
  );
};

var styles = {
  container: {
    padding: '10px'
  },
  section: {
    marginTop: '40px',
    border: '1px solid #efefef',
    borderRadius: '5px'
  },
  header: {
    padding: '40px 40px 80px 0px'
  }
};
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/', Component)
      }
    }
  