angular.module('testApp', ['ThingItMobile.PluginDirectives'])
    .controller('TestController', function () {
        this.meural = {

            configuration: {
                ipaddress: "192.168.0.2"
            },
        };

        this.panel = {
            callActorService: function (controllerObject, controllerFunction, valueToSet) {
                console.log('Hellooooooo!!!!!');
                controllerObject[controllerFunction](valueToSet)
            }
        }

    });