/**
 * Created by arvenjade on 11/7/2015.
 */
var app = angular.module('myApp', [
    'btford.socket-io'
]);

app.factory('socket', function (socketFactory) {
        return socketFactory({
            prefix: 'foo~',
            ioSocket: io.connect('/some/path')
        });
    });
app.controller('MyCtrl', function (socket) {
        socket.on('foo~bar', function () {
            $scope.bar = true;
        });
    });