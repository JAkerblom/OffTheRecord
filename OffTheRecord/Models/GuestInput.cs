using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OffTheRecord.Models
{
  [Table("GuestFormInputs")]
  public class GuestInput
  {
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Relation { get; set; }
    public DateTime DateOfBirth { get; set; }
    //public DateTime DateOfBirth { get; set; }
    public DateTime Created { get; set; }
  }
}