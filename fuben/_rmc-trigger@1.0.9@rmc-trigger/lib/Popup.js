'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rmcAlign = require('rmc-align');

var _rmcAlign2 = _interopRequireDefault(_rmcAlign);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = require('./PopupInner');

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = require('./LazyRenderBox');

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Popup = function (_Component) {
    (0, _inherits3['default'])(Popup, _Component);

    function Popup(props) {
        (0, _classCallCheck3['default'])(this, Popup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

        _this.onAlign = function (popupDomNode, align) {
            var props = _this.props;
            var currentAlignClassName = props.getClassNameFromAlign(align);
            // FIX: https://github.com/react-component/trigger/issues/56
            // FIX: https://github.com/react-component/tooltip/issues/79
            if (_this.currentAlignClassName !== currentAlignClassName) {
                _this.currentAlignClassName = currentAlignClassName;
                popupDomNode.className = _this.getClassName(currentAlignClassName);
            }
            props.onAlign(popupDomNode, align);
        };
        _this.getTarget = function () {
            return _this.props.getRootDomNode();
        };
        _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
        _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
        return _this;
    }

    (0, _createClass3['default'])(Popup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.rootNode = this.getPopupDomNode();
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return _reactDom2['default'].findDOMNode(this.popupInstance);
        }
    }, {
        key: 'getMaskTransitionName',
        value: function getMaskTransitionName() {
            var props = this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getTransitionName',
        value: function getTransitionName() {
            var props = this.props;
            var transitionName = props.transitionName;
            if (!transitionName && props.animation) {
                transitionName = props.prefixCls + '-' + props.animation;
            }
            return transitionName;
        }
    }, {
        key: 'getClassName',
        value: function getClassName(currentAlignClassName) {
            return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
        }
    }, {
        key: 'getPopupElement',
        value: function getPopupElement() {
            var savePopupRef = this.savePopupRef,
                props = this.props;
            var align = props.align,
                style = props.style,
                visible = props.visible,
                prefixCls = props.prefixCls,
                destroyPopupOnHide = props.destroyPopupOnHide;

            var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
            var hiddenClassName = prefixCls + '-hidden';
            if (!visible) {
                this.currentAlignClassName = null;
            }
            var newStyle = (0, _extends3['default'])({}, style, this.getZIndexStyle());
            var popupInnerProps = {
                className: className,
                prefixCls: prefixCls,
                ref: savePopupRef,
                style: newStyle
            };
            if (destroyPopupOnHide) {
                return _react2['default'].createElement(
                    _rcAnimate2['default'],
                    { component: '', exclusive: true, transitionAppear: true, onAnimateLeave: props.onAnimateLeave, transitionName: this.getTransitionName() },
                    visible ? _react2['default'].createElement(
                        _rmcAlign2['default'],
                        { target: this.getTarget, key: 'popup', ref: this.saveAlignRef, monitorWindowResize: true, align: align, onAlign: this.onAlign },
                        _react2['default'].createElement(
                            _PopupInner2['default'],
                            (0, _extends3['default'])({ visible: true }, popupInnerProps),
                            props.children
                        )
                    ) : null
                );
            }
            var alignOtherProps = {
                xVisible: visible
            };
            return _react2['default'].createElement(
                _rcAnimate2['default'],
                { component: '', exclusive: true, transitionAppear: true, transitionName: this.getTransitionName(), onAnimateLeave: props.onAnimateLeave, showProp: 'xVisible' },
                _react2['default'].createElement(
                    _rmcAlign2['default'],
                    (0, _extends3['default'])({ target: this.getTarget, key: 'popup', ref: this.saveAlignRef, monitorWindowResize: true }, alignOtherProps, { childrenProps: { visible: 'xVisible' }, disabled: !visible, align: align, onAlign: this.onAlign }),
                    _react2['default'].createElement(
                        _PopupInner2['default'],
                        (0, _extends3['default'])({ hiddenClassName: hiddenClassName }, popupInnerProps),
                        props.children
                    )
                )
            );
        }
    }, {
        key: 'getZIndexStyle',
        value: function getZIndexStyle() {
            var style = {};
            var props = this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        }
    }, {
        key: 'getMaskElement',
        value: function getMaskElement() {
            var props = this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = this.getMaskTransitionName();
                maskElement = _react2['default'].createElement(_LazyRenderBox2['default'], { style: this.getZIndexStyle(), key: 'mask', className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible });
                if (maskTransition) {
                    maskElement = _react2['default'].createElement(
                        _rcAnimate2['default'],
                        { key: 'mask', showProp: 'visible', transitionAppear: true, component: '', transitionName: maskTransition },
                        maskElement
                    );
                }
            }
            return maskElement;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                this.getMaskElement(),
                this.getPopupElement()
            );
        }
    }]);
    return Popup;
}(_react.Component);

exports['default'] = Popup;
module.exports = exports['default'];