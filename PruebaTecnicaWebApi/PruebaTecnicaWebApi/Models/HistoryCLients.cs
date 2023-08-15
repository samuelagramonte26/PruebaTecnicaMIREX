using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaWebApi.Models
{
    public class HistoryCLients:History
    {
        public int clientId { get; set; }
        public Clients Client { get; set; }
    }
}