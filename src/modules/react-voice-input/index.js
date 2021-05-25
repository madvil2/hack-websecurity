'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMicrophoneStyle = {
  border: 0,
  outline: 'none',
  color: 'white',
  backgroundColor: 'Transparent',
  height: '30px',
  width: '30px',
};

var ReactVoiceInput = function (_React$Component) {
  _inherits(ReactVoiceInput, _React$Component);

  function ReactVoiceInput(props) {
    _classCallCheck(this, ReactVoiceInput);

    var _this = _possibleConstructorReturn(this, (ReactVoiceInput.__proto__ || Object.getPrototypeOf(ReactVoiceInput)).call(this, props));

    _this.state = {
      clicked: false,
      isSpeaking: false,
      isSpeechRecognitionSupported: false
    };

    _this.startRecord = _this.startRecord.bind(_this);
    return _this;
  }

  _createClass(ReactVoiceInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('webkitSpeechRecognition' in window) {
        this.setState({
          isSpeechRecognitionSupported: true
        });
      }
    }
  }, {
    key: 'startRecord',
    value: function startRecord() {
      var _this2 = this;
      _this2.setState({
        clicked: true,
      });
      // eslint-disable-next-line no-undef
      var recognition = new webkitSpeechRecognition();

      recognition.lang = 'ru';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.interimResults = true;
      recognition.start();

      recognition.onspeechstart = function () {
        if (_this2.props.onSpeechStart) {
          _this2.props.onSpeechStart();
        }

        _this2.setState({
          isSpeaking: true
        });
      };

      recognition.onerror = function (event) {
        if (_this2.props.onError) {
          _this2.props.onError(event);
        }
      };

      recognition.onend = function () {
        if (_this2.props.onEnd) {
          _this2.props.onEnd();
        }

        _this2.setState({
          isSpeaking: false,
          clicked: false,
        });
      };

      recognition.onresult = function (event) {
        var result = event.results[0][0].transcript;
        _this2.props.onResult(result);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSpeaking = _state.isSpeaking,
          clicked = _state.clicked,
          isSpeechRecognitionSupported = _state.isSpeechRecognitionSupported;

      var buttonStyle = this.props.microphoneStyle ? this.props.microphoneStyle : defaultMicrophoneStyle;

      var containerClassName = this.props.containerClassName ? this.props.containerClassName : 'rvi-container';

      var microphoneClassName = this.props.microphoneClassName ? this.props.microphoneClassName : 'rvi-microphone';

      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        this.props.children,
        isSpeechRecognitionSupported && _react2.default.createElement(
          'button',
          {
            className: microphoneClassName,
            style: buttonStyle,
            disabled: isSpeaking,
            onClick: this.startRecord },
          isSpeaking || clicked ? _react2.default.createElement(_icon.ActiveMicrophone, null) : _react2.default.createElement(_icon.DefautlMicrophone, null)
        )
      );
    }
  }]);

  return ReactVoiceInput;
}(_react2.default.Component);

exports.default = ReactVoiceInput;
