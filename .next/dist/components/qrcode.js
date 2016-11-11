'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var address = _ref.address,
        amount = _ref.amount,
        className = _ref.className;
    return _react2.default.createElement('img', { className: className,
        src: 'https://chart.googleapis.com/chart?chs=360x360&cht=qr&chl=bitcoin:' + address + '?amount=' + amount });
};