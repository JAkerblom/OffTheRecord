using OffTheRecord.Models;
using System;
using System.Data.Entity;
using MySql.Data.Entity;

namespace OffTheRecord.Data
{
  [DbConfigurationType(typeof(MySqlEFConfiguration))]
  public class DataContext : DbContext
  {
    public DataContext()
      //: base("MySqlContext")
      : base("DefaultConnection")
    {
      this.Configuration.LazyLoadingEnabled = false;
      this.Configuration.ProxyCreationEnabled = false;

      Database.SetInitializer(
        new MigrateDatabaseToLatestVersion<DataContext, DataMigrationsConfiguration>()
        );
    }

    public DbSet<GuestInput> GuestFormInputs { get; set; }
  }
}