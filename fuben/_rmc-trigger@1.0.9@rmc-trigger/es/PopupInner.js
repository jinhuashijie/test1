import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import LazyRenderBox from './LazyRenderBox';

var PopupInner = function (_Component) {
    _inherits(PopupInner, _Component);

    function PopupInner() {
        _classCallCheck(this, PopupInner);

        return _possibleConstructorReturn(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
    }

    _createClass(PopupInner, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var className = props.className;
            if (!props.visible) {
                className += ' ' + props.hiddenClassName;
            }
            return React.createElement(
                'div',
                { className: className, style: props.style },
                React.createElement(
                    LazyRenderBox,
                    { className: props.prefixCls + '-content', visible: props.visible },
                    props.children
                )
            );
        }
    }]);

    return PopupInner;
}(Component);

export default PopupInner;