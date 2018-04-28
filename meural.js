module.exports = {
    metadata: {
        family: "meural",
        plugin: "meural",
        label: "Meural",
        tangible: true,
        state: [],
        actorTypes: [],
        sensorTypes: [],
        services: [{
            id: "up",
            label: "Up"
        }, {
            id: "down",
            label: "Down"
        }, {
            id: "left",
            label: "Left"
        }, {
            id: "right",
            label: "Right"
        }],
        events: [],
        configuration: [{
            id: "ipaddress",
            label: "IP Address",
            type: {
                id: "string"
            },
            defaultValue: ""
        }]
    },
    create: function () {
        return new Meural();
    }
};

var q = require('q');
var http = require('http');

/**
 *
 */
function Meural() {
    /**
     *
     */
    Meural.prototype.start = function () {
        var deferred = q.defer();

        this.requestOptions = {
            host: this.configuration.ipaddress,
            path: '',
            port: '80'
        };

        return deferred.promise;
    };

    /**
     *
     */
    Meural.prototype.up = function () {
        this.requestOptions.path = '/remote/control_command/set_key/up';

        http.request(this.requestOptions, function (callback) {
            this.logDebug("Up Service ", callback);
        }).end();
    };

    /**
     *
     */
    Meural.prototype.down = function () {
        this.requestOptions.path = '/remote/control_command/set_key/down';

        http.request(this.requestOptions, function (callback) {
            this.logDebug("down Service ", callback);
        }).end();
    };

    /**
     *
     */
    Meural.prototype.left = function () {
        this.requestOptions.path = '/remote/control_command/set_key/left';

        http.request(this.requestOptions, function (callback) {
            this.logDebug("Left Service ", callback);
        }).end();
    };

    /**
     *
     */
    Meural.prototype.right = function () {
        this.requestOptions.path = '/remote/control_command/set_key/right';

        http.request(this.requestOptions, function (callback) {
            this.logDebug("Right Service ", callback);
        }).end();
    };

    /**
     *
     */
    Meural.prototype.stop = function () {

    };

    /**
     *
     */
    Meural.prototype.setState = function (state) {
        this.state = state;
    };

    /**
     *
     */
    Meural.prototype.getState = function () {
        return this.state;
    };
}
