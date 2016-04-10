using OffTheRecord.Models;
using System.Linq;

namespace OffTheRecord.Data
{
  public interface IDataRepository
  {
    IQueryable<GuestInput> GetGuestFormInputs();

    bool Save();

    bool AddGuestFormInput(GuestInput gi);
  }
}