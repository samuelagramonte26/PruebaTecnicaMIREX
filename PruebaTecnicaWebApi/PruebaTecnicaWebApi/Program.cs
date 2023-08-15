using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaWebApi.Data;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Services.Repository;

var builder = WebApplication.CreateBuilder(args);
var ConnectionString = builder.Configuration.GetConnectionString("localConexion") ?? "";

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(x =>
              x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);;
builder.Services.AddDbContext<AppDbContext>(op => op.UseSqlServer(ConnectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddCors(p =>
{
    p.AddPolicy("policy", b =>
    {
        b.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
    });
});

builder.Services.AddTransient<ICompanyRepository,CompanyRepository>();
builder.Services.AddTransient<IClientsRepository,ClientRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
