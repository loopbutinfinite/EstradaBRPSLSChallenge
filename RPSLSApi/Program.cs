using RPSLSApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<RPSLSServices>();

builder.Services.AddCors(options =>
{
   options.AddPolicy("CorsRPSLSPolicy", policy =>
   {
       policy.WithOrigins("https://agreeable-smoke-07b729c1e.1.azurestaticapps.net", "http://agreeable-smoke-07b729c1e.1.azurestaticapps.net").AllowAnyHeader().AllowAnyMethod();
   }); 
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsRPSLSPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
