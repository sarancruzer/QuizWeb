using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuizManagerWeb
{
    public class MySession
    {
        private MySession()
        {
           sessionCode = "default value";
        }

        // Gets the current session.
        public static MySession Current
        {
            get
            {
                MySession session =
                  (MySession)HttpContext.Current.Session["sessionCode"];
                if (session == null)
                {
                    session = new MySession();
                    HttpContext.Current.Session["sessionCode"] = session;
                }
                return session;
            }
        }

        // **** add your session properties here, e.g like this:
        public string sessionCode { get; set; }
       // public DateTime MyDate { get; set; }
       // public int LoginId { get; set; }
    }
}