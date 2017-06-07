Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = '/Users/yangdeng/myProject/reactApp/demoApp/Main.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Launch = require('./components/Launch');

var _Launch2 = babelHelpers.interopRequireDefault(_Launch);

var _Login = require('./components/Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var _Login3 = require('./components/Login2');

var _Login4 = babelHelpers.interopRequireDefault(_Login3);

var _Login5 = require('./components/Login3');

var _Login6 = babelHelpers.interopRequireDefault(_Login5);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _Error = require('./components/Error');

var _Error2 = babelHelpers.interopRequireDefault(_Error);

var _Home = require('./components/Home');

var _Home2 = babelHelpers.interopRequireDefault(_Home);

var _TabView = require('./components/TabView');

var _TabView2 = babelHelpers.interopRequireDefault(_TabView);

var _TabIcon = require('./components/TabIcon');

var _TabIcon2 = babelHelpers.interopRequireDefault(_TabIcon);

var _EchoView = require('./components/EchoView');

var _EchoView2 = babelHelpers.interopRequireDefault(_EchoView);

var _NavigationDrawer = require('./components/NavigationDrawer');

var _NavigationDrawer2 = babelHelpers.interopRequireDefault(_NavigationDrawer);

var _reactNativeButton = require('react-native-button');

var _reactNativeButton2 = babelHelpers.interopRequireDefault(_reactNativeButton);

var styles = _reactNative.StyleSheet.create({
	container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
		alignItems: 'center'
	},
	tabBarStyle: {
		backgroundColor: '#eee'
	},
	tabBarSelectedItemStyle: {
		backgroundColor: '#ddd'
	}
});

var reducerCreate = function reducerCreate(params) {
	var defaultReducer = new _reactNativeRouterFlux.Reducer(params);
	return function (state, action) {
		console.log('ACTION:', action);
		return defaultReducer(state, action);
	};
};

var getSceneStyle = function getSceneStyle(props, computedProps) {
	var style = {
		flex: 1,
		backgroundColor: '#fff',
		shadowColor: null,
		shadowOffset: null,
		shadowOpacity: null,
		shadowRadius: null
	};
	if (computedProps.isActive) {
		style.marginTop = computedProps.hideNavBar ? 0 : 64;
		style.marginBottom = computedProps.hideTabBar ? 0 : 50;
	}
	return style;
};

var currentSwitchPage = 'text1';

var SwitcherPage = function SwitcherPage(props) {
	return _react2.default.createElement(
		_reactNative.View,
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 70
			}
		},
		_react2.default.createElement(
			_reactNative.Text,
			{ style: { marginTop: 100, textAlign: 'center' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			},
			'current page: ',
			props.text
		),
		_react2.default.createElement(
			_reactNativeButton2.default,
			{
				onPress: function onPress() {
					currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
					_reactNativeRouterFlux.Actions.refresh({ key: 'switcher' });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			},
			'Switch!'
		),
		_react2.default.createElement(
			_reactNativeButton2.default,
			{
				onPress: function onPress() {
					_reactNativeRouterFlux.Actions.launch({ type: _reactNativeRouterFlux.ActionConst.RESET });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			},
			'Exit'
		)
	);
};

var Main = function (_Component) {
	babelHelpers.inherits(Main, _Component);

	function Main() {
		babelHelpers.classCallCheck(this, Main);
		return babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	babelHelpers.createClass(Main, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactNativeRouterFlux.Router,
				{ createReducer: reducerCreate, getSceneStyle: getSceneStyle, __source: {
						fileName: _jsxFileName,
						lineNumber: 93
					}
				},
				_react2.default.createElement(
					_reactNativeRouterFlux.Scene,
					{ key: 'modal', component: _reactNativeRouterFlux.Modal, __source: {
							fileName: _jsxFileName,
							lineNumber: 94
						}
					},
					_react2.default.createElement(
						_reactNativeRouterFlux.Scene,
						{ key: 'root', hideNavBar: true, hideTabBar: true, __source: {
								fileName: _jsxFileName,
								lineNumber: 95
							}
						},
						_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'echo', clone: true, component: _EchoView2.default, getTitle: function getTitle(navState) {
								return navState.key;
							}, __source: {
								fileName: _jsxFileName,
								lineNumber: 96
							}
						}),
						_react2.default.createElement(
							_reactNativeRouterFlux.Scene,
							{ key: 'switcher', component: _reactNativeRouterFlux.Switch, selector: function selector() {
									return 'text1';
								}, __source: {
									fileName: _jsxFileName,
									lineNumber: 97
								}
							},
							_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'text1', text: 'text1', component: function component(props) {
									return _react2.default.createElement(SwitcherPage, babelHelpers.extends({}, props, { text: currentSwitchPage, __source: {
											fileName: _jsxFileName,
											lineNumber: 98
										}
									}));
								}, __source: {
									fileName: _jsxFileName,
									lineNumber: 98
								}
							}),
							_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'text2', text: 'text2', component: function component(props) {
									return _react2.default.createElement(SwitcherPage, babelHelpers.extends({}, props, { text: currentSwitchPage, __source: {
											fileName: _jsxFileName,
											lineNumber: 99
										}
									}));
								}, __source: {
									fileName: _jsxFileName,
									lineNumber: 99
								}
							})
						),
						_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'home', component: _Home2.default, title: 'Replace', type: _reactNativeRouterFlux.ActionConst.REPLACE, __source: {
								fileName: _jsxFileName,
								lineNumber: 101
							}
						}),
						_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'launch', component: _Launch2.default, title: 'Launch', initial: true, __source: {
								fileName: _jsxFileName,
								lineNumber: 102
							}
						}),
						_react2.default.createElement(
							_reactNativeRouterFlux.Scene,
							{ key: 'login', direction: 'vertical', __source: {
									fileName: _jsxFileName,
									lineNumber: 103
								}
							},
							_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'loginModal', direction: 'vertical', component: _Login2.default, title: 'Login', __source: {
									fileName: _jsxFileName,
									lineNumber: 104
								}
							}),
							_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'loginModal2', hideNavBar: true, component: _Login4.default, title: 'Login2', panHandlers: null, duration: 1, __source: {
									fileName: _jsxFileName,
									lineNumber: 105
								}
							}),
							_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'loginModal3', hideNavBar: true, component: _Login6.default, title: 'Login3', panHandlers: null, duration: 1, __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							})
						),
						_react2.default.createElement(
							_reactNativeRouterFlux.Scene,
							{ key: 'tabbar', component: _NavigationDrawer2.default, __source: {
									fileName: _jsxFileName,
									lineNumber: 108
								}
							},
							_react2.default.createElement(
								_reactNativeRouterFlux.Scene,
								{ key: 'main', tabs: true, tabBarStyle: styles.tabBarStyle, tabBarSelectedItemStyle: styles.tabBarSelectedItemStyle, __source: {
										fileName: _jsxFileName,
										lineNumber: 109
									}
								},
								_react2.default.createElement(
									_reactNativeRouterFlux.Scene,
									{ key: 'tab1', title: 'Tab #1', icon: _TabIcon2.default, navigationBarStyle: { backgroundColor: 'red' }, titleStyle: { color: 'white' }, __source: {
											fileName: _jsxFileName,
											lineNumber: 110
										}
									},
									_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab1_1', component: _TabView2.default, title: 'Tab #1_1', onRight: function onRight() {
											return alert('Right button');
										}, rightTitle: 'Right', __source: {
											fileName: _jsxFileName,
											lineNumber: 111
										}
									}),
									_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab1_2', component: _TabView2.default, title: 'Tab #1_2', titleStyle: { color: 'black' }, __source: {
											fileName: _jsxFileName,
											lineNumber: 112
										}
									})
								),
								_react2.default.createElement(
									_reactNativeRouterFlux.Scene,
									{ key: 'tab2', initial: true, title: 'Tab #2', icon: _TabIcon2.default, __source: {
											fileName: _jsxFileName,
											lineNumber: 114
										}
									},
									_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab2_1', component: _TabView2.default, title: 'Tab #2_1', renderRightButton: function renderRightButton() {
											return _react2.default.createElement(
												_reactNative.Text,
												{
													__source: {
														fileName: _jsxFileName,
														lineNumber: 115
													}
												},
												'Right'
											);
										}, __source: {
											fileName: _jsxFileName,
											lineNumber: 115
										}
									}),
									_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab2_2', component: _TabView2.default, title: 'Tab #2_2', hideBackImage: true, onBack: function onBack() {
											return alert('Left button!');
										}, backTitle: 'Left', duration: 1, panHandlers: null, __source: {
											fileName: _jsxFileName,
											lineNumber: 116
										}
									})
								),
								_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab3', component: _TabView2.default, title: 'Tab #3', hideTabBar: true, icon: _TabIcon2.default, __source: {
										fileName: _jsxFileName,
										lineNumber: 118
									}
								}),
								_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab4', component: _TabView2.default, title: 'Tab #4', hideNavBar: true, icon: _TabIcon2.default, __source: {
										fileName: _jsxFileName,
										lineNumber: 119
									}
								}),
								_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'tab5', component: _TabView2.default, title: 'Tab #5', hideTabBar: true, icon: _TabIcon2.default, __source: {
										fileName: _jsxFileName,
										lineNumber: 120
									}
								})
							)
						)
					),
					_react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'error', component: _Error2.default, __source: {
							fileName: _jsxFileName,
							lineNumber: 124
						}
					})
				)
			);
		}
	}]);
	return Main;
}(_react.Component);

exports.default = Main;