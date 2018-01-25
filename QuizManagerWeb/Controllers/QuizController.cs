using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Configuration;
using System.Net.Http;
using System.Configuration;

namespace QuizManagerWeb.Controllers
{
    public class QuizController : Controller
    {
        Configuration webConfigApp = WebConfigurationManager.OpenWebConfiguration("~");
        // GET: Quiz
        public ActionResult Index()
        {
            //Session["winsessionCode"] = "";
            return View();
        }

        //public void setvalueforsession(string sessionvalue)
        //{
        //    webConfigApp.AppSettings.Settings["sessionCode"].Value = sessionvalue;
        //    // Session["winsessionCOde"] = sessionvalue;
        //}
    }
}