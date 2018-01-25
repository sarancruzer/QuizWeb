using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using System.Configuration;
using System.Web.Configuration;
using System.Net.Http;
using QuizManagerWeb.Controllers;

namespace QuizManagerWeb
{
    public class SignalRConnection : PersistentConnection
    {
        //Helps to open the Root level web.config file.
        //Configuration webConfigApp = WebConfigurationManager.OpenWebConfiguration("~");
        //Modifying the AppKey from AppValue to AppValue1
        QuizController objcontroller = new QuizController();
        public string connectionId { get; set; }
        //webConfigApp.AppSettings.Settings["AppKey"].Value= "AppValue1";
        public static  string groupName {get;set;}
        //public List<connec>
        //public const string groupName = "";
        protected override Task OnConnected(IRequest request, string connectionId)
        {

            //HttpContext.Current.Session["winsessionCode"] = "";
            if (request.QueryString["sessionCode"] != "")
            {
               groupName= request.QueryString["sessionCode"].ToString().Replace("'","").Trim();
            //    objcontroller.setvalueforsession(request.QueryString["sessionCode"].ToString());
            //    //HttpContext.Current.Session["winsessionCode"] = groupName;
            //    groupName = ConfigurationManager.AppSettings["sessionCode"].ToString();
            }
            
            string msg = string.Format(
                "A new user {0} has just joined. (ID: {1})",
                request.QueryString["sessionCode"], connectionId);
           // Groups.Add(connectionId, groupName);
            //return Connection.Broadcast(msg);
           if (groupName != "")
           {
            Groups.Add(connectionId, groupName);
               return Groups.Send(groupName, msg);
            //}
            //else
            //{
    
            }
           else
            return Connection.Broadcast(msg);
        }

        protected override Task OnReceived(IRequest request, string connectionId, string data)
        {
            //groupName = HttpContext.Current.Session["winsessionCode"].ToString();
            //groupName = request.QueryString["sessionCode"];
            // Broadcast data to all clients
            //string msg = string.Format(
            //    "{0}:{1}" , data);
            //return Connection.Broadcast(data);
            // return Groups.Send(groupName, data);

            if (groupName != "")
            {
                return Groups.Send(groupName, data);
            }
            else
            {
                return Connection.Broadcast(data);
            }
        }
    }
}