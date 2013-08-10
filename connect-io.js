/**
 * Created with JetBrains WebStorm.
 * User: maniacneron
 * Date: 8/10/13
 * Time: 4:34 PM
 * To change this template use File | Settings | File Templates.
 */
window.connectio = (function () {
    function Connectio (els) {

    }

    var connectio = {
        get: function (selector) {

        }
    };

    return connectio;
}());

connectio.connect = function (connectionUrl)
{
    window.socket = io.connect(connectionUrl);
}

connectio.OnConnect=function (cb)
{
    socket.on('connect',cb);
}

connectio.CreateEmitMethod=function (params)
{
    return function(){socket.emit('socketEvent',params);}
}

connectio.CreateMessageMethod= function (methodName,cb)
{
    return function(){socket.on(methodName,cb);}
}

function ConnectionParams()
{
    this.connectionType = "socket";
    this.rooms="";

}