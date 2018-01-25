using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QuizManagerWeb.Models;

namespace QuizManagerWeb.Controllers
{
    public class LoadPageController : Controller
    {
       
        // GET: LoadPage
        public ActionResult login()
         {
            return View();
        }
        public ActionResult mainpage()
        {
           // Session["sessionCode"]
             return View();
        }
        public ActionResult questions()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CopyFiles(string imageName)
        {

            return View();
        }

        public ActionResult aspect()
        {
            return View();
        }

       
    }
}