"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscribers_1 = require("./subscribers");
var invokes_1 = require("./invokes");
var SignalRMock = /** @class */ (function () {
    function SignalRMock() {
    }
    SignalRMock.prototype.on = function (action, callback) {
        subscribers_1.addSubscriber({ action: action, callback: callback });
    };
    SignalRMock.prototype.invoke = function (action) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve) {
            invokes_1.addInvoke({ action: action, args: args });
            resolve(window.signalRInvocationResults && window.signalRInvocationResults[action]);
        });
    };
    SignalRMock.prototype.off = function (action, callback) {
        subscribers_1.removeSubscriber(action, callback);
    };
    SignalRMock.prototype.onclose = function (callback) {
        return;
    };
    SignalRMock.prototype.start = function () {
        return Promise.resolve();
    };
    SignalRMock.prototype.stop = function () {
        return Promise.resolve();
    };
    SignalRMock.prototype.onreconnecting = function (callback) {
        return;
    };
    SignalRMock.prototype.onreconnected = function (callback) {
        return;
    };
    SignalRMock.prototype.send = function (methodName, args) {
        return Promise.resolve();
    };
    return SignalRMock;
}());
exports.SignalRMock = SignalRMock;
