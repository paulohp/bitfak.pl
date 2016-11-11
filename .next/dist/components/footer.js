'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reBulma = require('re-bulma');

var _css = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/css.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        _reBulma.Footer,
        { style: { marginTop: '30px' } },
        _react2.default.createElement(
            _reBulma.Container,
            null,
            _react2.default.createElement(
                _reBulma.Content,
                null,
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        'strong',
                        null,
                        'bitfak.pl'
                    ),
                    ' are secured with BitGo \u2122'
                ),
                _react2.default.createElement(
                    'p',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        'a',
                        { style: { borderBottom: '0px' }, href: 'https://bitgo.com' },
                        _react2.default.createElement('img', { style: { width: '100px' }, src: 'static/BitGo_Secured_Color.png' })
                    )
                )
            )
        )
    );
};