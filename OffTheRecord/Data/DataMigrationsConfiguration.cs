using OffTheRecord.Controllers;
using System;
using System.Data.Entity.Migrations;

namespace OffTheRecord.Data
{
  public class DataMigrationsConfiguration
    : DbMigrationsConfiguration<DataContext>
  {
    public DataMigrationsConfiguration()
    {
      this.AutomaticMigrationDataLossAllowed = true;
      this.AutomaticMigrationsEnabled = true;
    }

    protected override void Seed(DataContext context)
    {
      base.Seed(context);

#if DEBUG

#endif

    }
  }
}