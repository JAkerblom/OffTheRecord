using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OffTheRecord.Startup))]
namespace OffTheRecord
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
