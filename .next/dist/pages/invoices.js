'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/paulohp/Workspace/Github/paulohp/bitfak.pl/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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
      beneficiary_name: '',
      beneficiary_address: '',
      account: '',
      amount: '',
      description: '',
      isOpen: false,
      bitcoinPrice: '',
      totalPrice: 0,
      totalBtc: 0,
      isLoading: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleChange',
    value: function handleChange(field, event) {
      var nextState = {};
      nextState[field] = event.target.value;
      this.setState(nextState);
    }
  }, {
    key: 'openModal',
    value: function openModal(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        isOpen: true
      });

      fetch('http://localhost:4000/api/v1/ticker/pln?amount=' + this.state.amount).then(function (result) {
        return result.json();
      }).then(function (json) {
        return _this2.setState({
          bitcoinPrice: json.bitcoinPrice,
          totalPrice: totalWithPercentage,
          totalBtc: json.totalToPay
        });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this3 = this;

      this.setState({
        isLoading: true
      });
      fetch('http://localhost:4000/api/v1/address/create', { method: 'POST' }).then(function (result) {
        return result.json();
      }).then(function (address) {
        var immediatelyAvailableReference = base.push('invoices', {
          data: {
            beneficiary_name: _this3.state.beneficiary_name,
            beneficiary_address: _this3.state.beneficiary_address,
            account: _this3.state.account,
            amount: _this3.state.amount,
            description: _this3.state.description,
            bitcoinPrice: _this3.state.bitcoinPrice,
            totalPrice: _this3.state.totalPrice,
            totalBtc: _this3.state.totalBtc,
            address: address
          },
          then: function then(err) {
            if (!err) {
              window.location = '/pay?id=' + immediatelyAvailableReference.key + '&type=invoices';
            }
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
                'Pay your bill with Bitcoin'
              ),
              _react2.default.createElement(
                _reBulma.Subtitle,
                null,
                'We only accept ',
                _react2.default.createElement('img', { src: 'static/bitcoin_logo.png', width: '70' })
              )
            ),
            _react2.default.createElement(
              'form',
              { noValidate: true, onSubmit: this.openModal },
              _react2.default.createElement(
                _reBulma.Columns,
                null,
                _react2.default.createElement(
                  _reBulma.Column,
                  null,
                  _react2.default.createElement(
                    _reBulma.Label,
                    null,
                    'Beneficiary Name'
                  ),
                  _react2.default.createElement(_reBulma.Input, { required: true, onChange: this.handleChange.bind(this, 'beneficiary_name'), value: this.state.beneficiary_name, type: 'text', placeholder: 'Beneficiary Name' })
                ),
                _react2.default.createElement(
                  _reBulma.Column,
                  null,
                  _react2.default.createElement(
                    _reBulma.Label,
                    null,
                    'Beneficiary Address'
                  ),
                  _react2.default.createElement(_reBulma.Input, { onChange: this.handleChange.bind(this, 'beneficiary_address'), value: this.state.beneficiary_address, type: 'text', placeholder: 'Beneficiary Address' })
                )
              ),
              _react2.default.createElement(
                _reBulma.Columns,
                null,
                _react2.default.createElement(
                  _reBulma.Column,
                  null,
                  _react2.default.createElement(
                    _reBulma.Label,
                    null,
                    'Account'
                  ),
                  _react2.default.createElement(_reBulma.Input, { required: true, onChange: this.handleChange.bind(this, 'account'), value: this.state.account, type: 'number', placeholder: 'Account' })
                ),
                _react2.default.createElement(
                  _reBulma.Column,
                  null,
                  _react2.default.createElement(
                    _reBulma.Label,
                    null,
                    'Amount'
                  ),
                  _react2.default.createElement(_reBulma.Input, { required: true, onChange: this.handleChange.bind(this, 'amount'), value: this.state.amount, type: 'number', placeholder: 'Amount' })
                )
              ),
              _react2.default.createElement(
                _reBulma.Columns,
                null,
                _react2.default.createElement(
                  _reBulma.Column,
                  null,
                  _react2.default.createElement(
                    _reBulma.Label,
                    null,
                    'Description of payment'
                  ),
                  _react2.default.createElement(_reBulma.Textarea, { onChange: this.handleChange.bind(this, 'description'), value: this.state.description, placeholder: 'Details about the payment', help: {
                      text: 'Here you can put addtional details that the receiver should know as your name, bill number or contact.',
                      color: 'isInfo'
                    } })
                )
              ),
              _react2.default.createElement(
                _reBulma.Button,
                { state: (!this.state.beneficiary_name || !this.state.account || !this.state.amount) && 'isDisabled', type: 'submit', color: 'isInfo' },
                'Checkout'
              )
            ),
            _react2.default.createElement(
              _reBulma.Modal,
              {
                type: 'card',
                headerContent: 'Are you sure?',
                footerContent: _react2.default.createElement(
                  'div',
                  { style: { padding: '20px' } },
                  this.state.isLoading && _react2.default.createElement(
                    _reBulma.Button,
                    { state: 'isLoading', color: 'isPrimary' },
                    'Loading'
                  ),
                  !this.state.isLoading && _react2.default.createElement(
                    _reBulma.Button,
                    { color: 'isInfo', onClick: this.handleSubmit },
                    'Let\'s do it.'
                  )
                ),
                isActive: this.state.isOpen,
                onCloseRequest: function onCloseRequest() {
                  return _this4.setState({ isOpen: false, isLoading: false });
                }
              },
              _react2.default.createElement(
                _reBulma.Content,
                null,
                _react2.default.createElement(
                  _reBulma.Table,
                  null,
                  _react2.default.createElement(
                    _reBulma.Tbody,
                    null,
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Beneficary Name:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.beneficiary_name
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Beneficary Address:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.beneficiary_address
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Account:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.account
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Amount:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.amount
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Description:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.description
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Bitcoin Price:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.bitcoinPrice
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Taxes:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          '5%'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reBulma.Tfoot,
                    null,
                    _react2.default.createElement(
                      _reBulma.Tr,
                      null,
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        'Total:'
                      ),
                      _react2.default.createElement(
                        _reBulma.Td,
                        null,
                        _react2.default.createElement(
                          'strong',
                          null,
                          this.state.totalPrice,
                          'z\u0142'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
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
  }
};
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/invoices', Component)
      }
    }
  