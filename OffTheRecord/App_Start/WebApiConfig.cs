using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace OffTheRecord
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver =
              new CamelCasePropertyNamesContractResolver();
            //jsonFormatter.SerializerSettings.DateFormatString = "yyyy-MM-dd";
            //var converters = jsonFormatter.SerializerSettings.Converters;
            //converters.Add(new IsoDateTimeConverter() { DateTimeFormat = "yyyy-MM-ddTHH:mm:ss" });


            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "GuestInputRoute",
                routeTemplate: "api/guestFormInput/{id}",
                defaults: new { controller = "GuestFormInput", id = RouteParameter.Optional }
            );
        }
    }
}
