module.exports = {
    metadata: {
        family: "meural",
        plugin: "meural",
        label: "Meural",
        tangible: true,
        state: [],
        actorTypes: [],
        sensorTypes: [],
        services: [],
        events: [],
        configuration: [{
            id: "ipaddress",
            label: "IP Address",
            type: {
                id: "string"
            },
            mandatory: true
        }]
    },
    create: function () {
        return new Meural();
    }
};

var q = require('q');
/**
 *
 */
function Meural() {
    /**
     *
     */
    Meural.prototype.start = function () {
        var deferred = q.defer();






        return deferred.promise;
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
