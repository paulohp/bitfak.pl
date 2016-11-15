'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inherits2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _react = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reBulma = require('re-bulma');

var _css = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/css.js');

var _link = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reBase = require('re-base');

var _reBase2 = _interopRequireDefault(_reBase);

require('whatwg-fetch');

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _qrcode = require('../components/qrcode');

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _reBase2.default.createClass({
    apiKey: "AIzaSyC28QlWR-605lobVbBbch3AzqZ0QwIDBZM ",
    authDomain: "bitfak-f44e0.firebaseapp.com ",
    databaseURL: "https://bitfak-f44e0.firebaseio.com/",
    storageBucket: "bitfak-f44e0.appspot.com "
});

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = {
            paymentId: ''
        };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reBulma.Container,
                    { className: (0, _css.style)(styles.container) },
                    _react2.default.createElement(_header2.default, { pageTitle: 'Checkout' }),
                    _react2.default.createElement(
                        _reBulma.Section,
                        { className: (0, _css.style)(styles.section) },
                        _react2.default.createElement(
                            'div',
                            { className: (0, _css.style)(styles.centerToTop) },
                            _react2.default.createElement('img', { src: 'static/bitcoin_logo_ball.png', className: (0, _css.style)(styles.btc) }),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _reBulma.Title,
                                    { className: (0, _css.style)(styles.centerContent), size: 'is1' },
                                    'Pay with Bitcoin'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reBulma.Columns,
                            null,
                            _react2.default.createElement(
                                _reBulma.Column,
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        _reBulma.Heading,
                                        null,
                                        'Send exacly:'
                                    ),
                                    _react2.default.createElement(
                                        _reBulma.Title,
                                        null,
                                        this.props.payment.totalBtc
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        _reBulma.Heading,
                                        null,
                                        'To:'
                                    ),
                                    _react2.default.createElement(
                                        _reBulma.Title,
                                        null,
                                        this.props.payment.address.address
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        _reBulma.Button,
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'bitcoin:' + this.props.payment.address.address + '?amount=' + this.props.payment.totalBtc },
                                            'Open Wallet'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        _reBulma.Heading,
                                        null,
                                        'Expires in:'
                                    ),
                                    _react2.default.createElement(
                                        _reBulma.Title,
                                        null,
                                        '20:00 minutes'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reBulma.Column,
                                null,
                                _react2.default.createElement(_qrcode2.default, { className: (0, _css.style)(styles.centerContent), amount: this.props.payment.totalBtc, address: this.props.payment.address.address })
                            ),
                            _react2.default.createElement(
                                _reBulma.Column,
                                null,
                                _react2.default.createElement(
                                    _reBulma.Heading,
                                    null,
                                    'Payment details:'
                                ),
                                _react2.default.createElement(
                                    _reBulma.Title,
                                    null,
                                    'Total Zl: ',
                                    this.props.payment.totalPrice
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var req = _ref2.req;
                var match, match2, id, type;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                match = RegExp('[?&]' + 'id' + '=([^&]*)').exec(req.url);
                                match2 = RegExp('[?&]' + 'type' + '=([^&]*)').exec(req.url);
                                id = decodeURIComponent(match[1].replace(/\+/g, ' '));
                                type = decodeURIComponent(match2[1].replace(/\+/g, ' '));
                                return _context.abrupt('return', base.fetch(type, {
                                    context: {},
                                    asArray: true
                                }).then(function (data) {
                                    var filteredData = data.filter(function (d) {
                                        return d.key === id;
                                    });
                                    return { payment: filteredData[0] };
                                }));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;

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
    },
    centerContent: {
        textAlign: 'center'
    },
    btc: {
        width: '120px'
    },
    centerToTop: {
        textAlign: 'center',
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
  