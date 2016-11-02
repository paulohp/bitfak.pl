webpackHotUpdate(2,{

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inherits2 = __webpack_require__(1);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _getPrototypeOf = __webpack_require__(77);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(81);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(82);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(86);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _reBulma = __webpack_require__(95);

	var _css = __webpack_require__(91);

	var _link = __webpack_require__(174);

	var _link2 = _interopRequireDefault(_link);

	var _reactRecaptcha = __webpack_require__(175);

	var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

	var _reBase = __webpack_require__(176);

	var _reBase2 = _interopRequireDefault(_reBase);

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
	      description: ''
	    };
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
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
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();

	      var immediatelyAvailableReference = base.push('requests', {
	        data: {
	          beneficiary_name: this.state.beneficiary_name,
	          beneficiary_address: this.state.beneficiary_address,
	          account: this.state.account,
	          amount: this.state.amount,
	          description: this.state.description
	        },
	        then: function then(err) {
	          if (!err) {
	            Router.transitionTo('dashboard');
	          }
	        }
	      });
	      //available immediately, you don't have to wait for the callback to be called
	      var generatedKey = immediatelyAvailableReference.key;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	            { onSubmit: this.handleSubmit },
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
	                _react2.default.createElement(_reBulma.Input, { onChange: this.handleChange.bind(this, 'beneficiary_name'), value: this.state.beneficiary_name, type: 'text', placeholder: 'Beneficiary Name' })
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
	                _react2.default.createElement(_reBulma.Input, { onChange: this.handleChange.bind(this, 'account'), value: this.state.account, type: 'number', placeholder: 'Account' })
	              ),
	              _react2.default.createElement(
	                _reBulma.Column,
	                null,
	                _react2.default.createElement(
	                  _reBulma.Label,
	                  null,
	                  'Amount'
	                ),
	                _react2.default.createElement(_reBulma.Input, { onChange: this.handleChange.bind(this, 'amount'), value: this.state.amount, type: 'number', placeholder: 'Amount' })
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
	                    text: 'Here you can put addtional details that the receiver should know as name your name or contact.',
	                    color: 'isInfo'
	                  } })
	              )
	            ),
	            _react2.default.createElement(
	              _reBulma.Button,
	              { type: 'submit', color: 'isInfo' },
	              'Procced'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return _class;
	}(_react2.default.Component);

	exports.default = _class;


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
	  }
	};
	    if (true) {
	      module.hot.accept()
	      if (module.hot.status() !== 'idle') {
	        var Component = module.exports.default || module.exports
	        next.router.update('/', Component)
	      }
	    }
	  

/***/ }

})