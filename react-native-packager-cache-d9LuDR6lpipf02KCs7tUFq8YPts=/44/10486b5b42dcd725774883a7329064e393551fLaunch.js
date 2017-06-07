var _jsxFileName = "/Users/yangdeng/myProject/reactApp/demoApp/components/Launch.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactNativeButton = require("react-native-button");

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var _reactNativeRouterFlux = require("react-native-router-flux");

var styles = _reactNative.StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F5FCFF",
		width: '100%',
		height: '100%'
	},
	textLogo: {
		color: '#666666',
		textAlign: 'center',
		fontSize: 50,
		marginTop: 50
	},
	username: {
		width: 300,
		height: 50,
		marginTop: 100,
		padding: 15,
		textAlign: 'left',
		borderWidth: 1,
		borderColor: '#eee',
		textAlignVertical: 'top',
		backgroundColor: "#fff"
	},
	password: {
		width: 300,
		height: 50,
		marginTop: 50,
		padding: 15,
		textAlign: 'left',
		borderWidth: 1,
		borderColor: '#eee',
		textAlignVertical: 'top',
		backgroundColor: "#fff"
	},
	login: {
		width: 300,
		height: 50,
		marginTop: 50,
		backgroundColor: '#A2E563',
		padding: 15,
		borderRadius: 5
	}
});

var show = function show() {
	_reactNativeRouterFlux.Actions.home({
		data: 11,
		title: '11111'
	});
};

var Launch = function (_React$Component) {
	babelHelpers.inherits(Launch, _React$Component);

	function Launch(props) {
		babelHelpers.classCallCheck(this, Launch);

		var _this = babelHelpers.possibleConstructorReturn(this, (Launch.__proto__ || Object.getPrototypeOf(Launch)).call(this, props));

		_this.state = {
			username: '',
			password: ''
		};
		return _this;
	}

	babelHelpers.createClass(Launch, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_reactNative.View,
				babelHelpers.extends({}, this.props, { style: styles.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 70
					}
				}),
				_react2.default.createElement(
					_reactNative.KeyboardAvoidingView,
					{ behavior: this.state.behavior, __source: {
							fileName: _jsxFileName,
							lineNumber: 71
						}
					},
					_react2.default.createElement(
						_reactNative.Text,
						{ style: styles.textLogo, __source: {
								fileName: _jsxFileName,
								lineNumber: 72
							}
						},
						"\u5170\u5DDE\u94F6\u884C"
					),
					_react2.default.createElement(_reactNative.TextInput, {
						underlineColorAndroid: "transparent",
						onChangeText: function onChangeText(username) {
							return _this2.setState({ username: username });
						},
						value: this.state.username,
						style: styles.username, __source: {
							fileName: _jsxFileName,
							lineNumber: 73
						}
					}),
					_react2.default.createElement(_reactNative.TextInput, {
						underlineColorAndroid: "transparent",
						secureTextEntry: true,
						onChangeText: function onChangeText(password) {
							return _this2.setState({ password: password });
						},
						value: this.state.password,
						style: styles.password, __source: {
							fileName: _jsxFileName,
							lineNumber: 78
						}
					}),
					_react2.default.createElement(
						_reactNativeButton2.default,
						{ style: styles.login, onPress: show, __source: {
								fileName: _jsxFileName,
								lineNumber: 84
							}
						},
						"\u767B\u5F55"
					)
				)
			);
		}
	}]);
	return Launch;
}(_react2.default.Component);

module.exports = Launch;