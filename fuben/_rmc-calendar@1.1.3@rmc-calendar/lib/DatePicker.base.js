'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _DataTypes = require('./date/DataTypes');

var _util = require('./util');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3['default'])(DatePicker, _React$Component);

    function DatePicker(props) {
        (0, _classCallCheck3['default'])(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        _this.visibleMonth = [];
        _this.getDateWithoutTime = function (date) {
            if (!date) return 0;
            return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };
        _this.genWeekData = function (firstDate) {
            var minDateTime = _this.getDateWithoutTime(_this.props.minDate);
            var maxDateTime = _this.getDateWithoutTime(_this.props.maxDate) || Number.POSITIVE_INFINITY;
            var weeks = [];
            var nextMonth = _this.getMonthDate(firstDate, 1).firstDate;
            var currentDay = firstDate;
            var currentWeek = [];
            weeks.push(currentWeek);
            var startWeekday = currentDay.getDay();
            if (startWeekday > 0) {
                for (var i = 0; i < startWeekday; i++) {
                    currentWeek.push({});
                }
            }
            while (currentDay < nextMonth) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }
                var dayOfMonth = currentDay.getDate();
                var tick = +currentDay;
                currentWeek.push({
                    tick: tick,
                    dayOfMonth: dayOfMonth,
                    selected: _DataTypes.Models.SelectType.None,
                    isFirstOfMonth: dayOfMonth === 1,
                    isLastOfMonth: false,
                    outOfDate: tick < minDateTime || tick > maxDateTime
                });
                currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
            }
            currentWeek[currentWeek.length - 1].isLastOfMonth = true;
            return weeks;
        };
        _this.selectDateRange = function (startDate, endDate) {
            var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var _this$props = _this.props,
                getDateExtra = _this$props.getDateExtra,
                type = _this$props.type,
                onSelectHasDisableDate = _this$props.onSelectHasDisableDate;

            if (type === 'one') {
                endDate = undefined;
            }
            var time1 = _this.getDateWithoutTime(startDate),
                time2 = _this.getDateWithoutTime(endDate);
            var startDateTick = !time2 || time1 < time2 ? time1 : time2;
            var endDateTick = time2 && time1 > time2 ? time1 : time2;
            var startMonthDate = _this.getMonthDate(new Date(startDateTick)).firstDate;
            var endMonthDate = endDateTick ? new Date(endDateTick) : _this.getMonthDate(new Date(startDateTick)).lastDate;
            var unuseable = [],
                needUpdate = false;
            _this.state.months.filter(function (m) {
                return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
            }).forEach(function (m) {
                m.weeks.forEach(function (w) {
                    return w.filter(function (d) {
                        if (!endDateTick) {
                            return d.tick && _this.inDate(startDateTick, d.tick);
                        } else {
                            return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
                        }
                    }).forEach(function (d) {
                        var oldValue = d.selected;
                        if (clear) {
                            d.selected = _DataTypes.Models.SelectType.None;
                        } else {
                            var info = getDateExtra && getDateExtra(new Date(d.tick)) || {};
                            if (d.outOfDate || info.disable) {
                                unuseable.push(d.tick);
                            }
                            if (_this.inDate(startDateTick, d.tick)) {
                                if (type === 'one') {
                                    d.selected = _DataTypes.Models.SelectType.Single;
                                } else if (!endDateTick) {
                                    d.selected = _DataTypes.Models.SelectType.Only;
                                } else if (startDateTick !== endDateTick) {
                                    d.selected = _DataTypes.Models.SelectType.Start;
                                } else {
                                    d.selected = _DataTypes.Models.SelectType.All;
                                }
                            } else if (_this.inDate(endDateTick, d.tick)) {
                                d.selected = _DataTypes.Models.SelectType.End;
                            } else {
                                d.selected = _DataTypes.Models.SelectType.Middle;
                            }
                        }
                        needUpdate = needUpdate || d.selected !== oldValue;
                    });
                });
                if (needUpdate && m.componentRef) {
                    m.componentRef.updateWeeks();
                    m.componentRef.forceUpdate();
                }
                ;
            });
            if (unuseable.length > 0) {
                if (onSelectHasDisableDate) {
                    onSelectHasDisableDate(unuseable.map(function (tick) {
                        return new Date(tick);
                    }));
                } else {
                    console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
                }
            }
        };
        _this.computeVisible = function (clientHeight, scrollTop) {
            var needUpdate = false;
            var MAX_VIEW_PORT = clientHeight * 2;
            var MIN_VIEW_PORT = clientHeight;
            // 大缓冲区外过滤规则
            var filterFunc = function filterFunc(vm) {
                return vm.y && vm.height && vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT;
            };
            if (_this.props.infiniteOpt && _this.visibleMonth.length > 12) {
                _this.visibleMonth = _this.visibleMonth.filter(filterFunc).sort(function (a, b) {
                    return +a.firstDate - +b.firstDate;
                });
            }
            // 当小缓冲区不满时填充
            if (_this.visibleMonth.length > 0) {
                var last = _this.visibleMonth[_this.visibleMonth.length - 1];
                if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
                    var lastIndex = _this.state.months.indexOf(last);
                    for (var i = 1; i <= 2; i++) {
                        var index = lastIndex + i;
                        if (index < _this.state.months.length && _this.visibleMonth.indexOf(_this.state.months[index]) < 0) {
                            _this.visibleMonth.push(_this.state.months[index]);
                        } else {
                            _this.canLoadNext() && _this.genMonthData(undefined, 1);
                        }
                    }
                    needUpdate = true;
                }
                var first = _this.visibleMonth[0];
                if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
                    var firstIndex = _this.state.months.indexOf(first);
                    for (var _i = 1; _i <= 2; _i++) {
                        var _index = firstIndex - _i;
                        if (_index >= 0 && _this.visibleMonth.indexOf(_this.state.months[_index]) < 0) {
                            _this.visibleMonth.unshift(_this.state.months[_index]);
                            needUpdate = true;
                        }
                    }
                }
            } else if (_this.state.months.length > 0) {
                _this.visibleMonth = _this.state.months.filter(filterFunc);
                needUpdate = true;
            }
            return needUpdate;
        };
        _this.createOnScroll = function () {
            var timer = void 0;
            var clientHeight = 0,
                scrollTop = 0;
            return function (data) {
                var client = data.client,
                    top = data.top;

                clientHeight = client;
                scrollTop = top;
                if (timer) {
                    return;
                }
                timer = setTimeout(function () {
                    timer = undefined;
                    if (_this.computeVisible(clientHeight, scrollTop)) {
                        _this.forceUpdate();
                    }
                }, 64);
            };
        };
        _this.onCellClick = function (day) {
            if (!day.tick) return;
            _this.props.onCellClick && _this.props.onCellClick(new Date(day.tick));
        };
        _this.state = {
            months: []
        };
        return _this;
    }

    (0, _createClass3['default'])(DatePicker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _util.shallowEqual)(this.props, nextProps, ['startDate', 'endDate']) || !(0, _util.shallowEqual)(this.state, nextState) || !(0, _util.shallowEqual)(this.context, nextContext);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var oldValue = this.props;
            var newValue = nextProps;
            if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
                if (oldValue.startDate) {
                    this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
                }
                if (newValue.startDate) {
                    this.selectDateRange(newValue.startDate, newValue.endDate);
                }
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                _props$initalMonths = _props.initalMonths,
                initalMonths = _props$initalMonths === undefined ? 6 : _props$initalMonths,
                defaultDate = _props.defaultDate;

            for (var i = 0; i < initalMonths; i++) {
                this.canLoadNext() && this.genMonthData(defaultDate, i);
            }
            this.visibleMonth = [].concat((0, _toConsumableArray3['default'])(this.state.months));
        }
    }, {
        key: 'getMonthDate',
        value: function getMonthDate() {
            var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
            var addMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var y = date.getFullYear(),
                m = date.getMonth();
            return {
                firstDate: new Date(y, m + addMonth, 1),
                lastDate: new Date(y, m + 1 + addMonth, 0)
            };
        }
    }, {
        key: 'canLoadPrev',
        value: function canLoadPrev() {
            var minDate = this.props.minDate;

            return !minDate || this.state.months.length <= 0 || +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate;
        }
    }, {
        key: 'canLoadNext',
        value: function canLoadNext() {
            var maxDate = this.props.maxDate;

            return !maxDate || this.state.months.length <= 0 || +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate;
        }
    }, {
        key: 'genMonthData',
        value: function genMonthData(date) {
            var addMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!date) {
                date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
            }
            if (!date) {
                date = new Date();
            }
            var locale = this.props.locale;

            var _getMonthDate = this.getMonthDate(date, addMonth),
                firstDate = _getMonthDate.firstDate,
                lastDate = _getMonthDate.lastDate;

            var weeks = this.genWeekData(firstDate);
            var title = (0, _util.formatDate)(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
            var data = {
                title: title,
                firstDate: firstDate,
                lastDate: lastDate,
                weeks: weeks
            };
            data.component = this.genMonthComponent(data);
            if (addMonth >= 0) {
                this.state.months.push(data);
            } else {
                this.state.months.unshift(data);
            }
            var _props2 = this.props,
                startDate = _props2.startDate,
                endDate = _props2.endDate;

            if (startDate) {
                this.selectDateRange(startDate, endDate);
            }
            return data;
        }
    }, {
        key: 'inDate',
        value: function inDate(date, tick) {
            return date <= tick && tick < date + 24 * 3600000;
        }
    }]);
    return DatePicker;
}(React.Component);

exports['default'] = DatePicker;

DatePicker.defaultProps = {
    prefixCls: 'rmc-calendar',
    infinite: false,
    infiniteOpt: false,
    defaultDate: new Date(),
    initalMonths: 6,
    locale: _zh_CN2['default']
};
module.exports = exports['default'];