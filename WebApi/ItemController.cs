//using AngularNG.Controller;
//using AngularNG.Model;
//using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Collections.Generic;
using DotNetNuke.Security;
using aj_angularUppdragsAdmin.Model;
using aj_angularUppdragsAdmin.Controller;
using DotNetNuke.Entities.Users;
using Newtonsoft.Json;

namespace aj_angularUppdragsAdmin.WebApi.controller
{
    //[SupportedModules("Angularmodule")]
    public class ItemController : DnnApiController
    {

        /// <summary>
        /// API that returns Hello world
        /// </summary>
        /// <returns></returns>

        //[ActionName("test")]
        [HttpGet]
        //[DesktopModules]/[routing]/item/test
        // URL http://localhost/DesktopModules/aj_angularUppdragsAdmin/API/item/HelloWorld
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage HelloWorld()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "Hello World!");
        }

        /// <summary>
        /// API that returns Hello world
        /// </summary>
        /// <returns></returns>
        [HttpGet]  //[baseURL]/item/test
        [ActionName("ciao")]
        //[ValidateAntiForgeryToken]
        //[AllowAnonymous]
        [DnnAuthorize] //be accessed by logged user is by specifying
        //[DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public HttpResponseMessage ciao()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "ciao World!");
        }

    }
}
