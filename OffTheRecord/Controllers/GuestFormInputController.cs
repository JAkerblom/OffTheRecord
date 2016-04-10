﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using OffTheRecord.Models;
using OffTheRecord.Data;
using System.Net;

namespace OffTheRecord.Controllers
{
  public class GuestFormInputController : ApiController
  {
    private IDataRepository _repo;

    public GuestFormInputController(IDataRepository repo)
    {
      _repo = repo;
    }

    public HttpResponseMessage Post([FromBody]TempGuestInput gi)
    {
      var date = gi.DateOfBirth;
      date = date.Insert(4, "-");
      date = date.Insert(7, "-");
      var newDate = Convert.ToDateTime(date);

      var newgi = new GuestInput()
      {
        Name = gi.Name,
        Relation = gi.Relation,
        DateOfBirth = newDate
      };

      if (newgi.Created == default(DateTime))
      {
        newgi.Created = DateTime.UtcNow;
      }

      if (_repo.AddGuestFormInput(newgi) 
        && _repo.Save())
      {
        return Request.CreateResponse(HttpStatusCode.Created, newgi);
      }

      return Request.CreateResponse(HttpStatusCode.BadRequest);
    }
  }
}