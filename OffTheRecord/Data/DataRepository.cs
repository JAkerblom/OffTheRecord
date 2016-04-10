using OffTheRecord.Models;
using System;
using System.Linq;

namespace OffTheRecord.Data
{
  public class DataRepository : IDataRepository
  {
    DataContext _ctx;

    public DataRepository(DataContext ctx)
    {
      _ctx = ctx;
    }

    public IQueryable<GuestInput> GetGuestFormInputs()
    {
      return _ctx.GuestFormInputs;
    }

    public bool Save()
    {
      try
      {
        return _ctx.SaveChanges() > 0;
      }
      catch (Exception ex)
      {
        // TODO log this error
        throw;
      }
    }

    public bool AddGuestFormInput(GuestInput gi)
    {
      try
      {
        _ctx.GuestFormInputs.Add(gi);
        return true;
      }
      catch (Exception ex)
      {
        // TODO log this error
        return false;
      }
    }
  }
}