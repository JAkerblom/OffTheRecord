using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OffTheRecord.Models
{
  public class TempGuestInput
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Relation { get; set; }
    public string DateOfBirth { get; set; }
    //public DateTime DateOfBirth { get; set; }
  }
}