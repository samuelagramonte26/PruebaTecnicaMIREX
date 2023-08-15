using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnicaWebApi.Models
{
    public class HistoryCompany:History
    {
        public int companyId { get; set; }
        public Company Company { get; set; }
    }
}