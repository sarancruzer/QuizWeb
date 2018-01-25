using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(QuizManagerWeb.Startup))]

namespace QuizManagerWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
             // Make long polling connections wait a maximum of 110 seconds for a
            // response. When that time expires, trigger a timeout command and
            // make the client reconnect.
            GlobalHost.Configuration.ConnectionTimeout = TimeSpan.FromSeconds(1000);
            // Wait a maximum of 30 seconds after a transport connection is lost
            // before raising the Disconnected event to terminate the SignalR connection.
            GlobalHost.Configuration.DisconnectTimeout = TimeSpan.FromSeconds(60);
            // For transports other than long polling, send a keepalive packet every
            // 10 seconds. 
            // This value must be no more than 1/3 of the DisconnectTimeout value.
            GlobalHost.Configuration.KeepAlive = TimeSpan.FromSeconds(20);
            //Setting up the message buffer size
            GlobalHost.Configuration.DefaultMessageBufferSize = 5000;
            //ConfigureAuth(app);
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR<SignalRConnection>("/echo");
        }
    }
}
