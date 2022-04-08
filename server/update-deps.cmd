@echo off

echo Updating dbseeder dependencies...
cd .\dbseeder
call dotnet add package Microsoft.EntityFrameworkCore.Relational
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer

echo Updating Core.Auth dependencies...
cd ..\Core.Auth
call dotnet add package Microsoft.EntityFrameworkCore

echo Updating Core.Core dependencies...
cd ..\Core.Core
call dotnet add package Microsoft.EntityFrameworkCore
call dotnet add package Newtonsoft.Json

echo Updating Core.Data dependencies...
cd ..\Core.Data
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer
call dotnet add package Microsoft.EntityFrameworkCore.Tools
call dotnet add package Newtonsoft.Json

echo Updating Core.Identity dependencies...
cd ..\Core.Identity
call dotnet add package Microsoft.Extensions.Configuration.Abstractions
call dotnet add package Microsoft.Extensions.Configuration.Binder
call dotnet add package System.DirectoryServices
call dotnet add package System.DirectoryServices.AccountManagement

echo Updating Core.Identity.Mock dependencies...
cd ..\Core.Identity.Mock

echo Updating Core.Web dependencies...
cd ..\Core.Web
call dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
call dotnet add package Microsoft.AspNetCore.OData
call dotnet add package Microsoft.EntityFrameworkCore.Design

echo Caching NuGet dependencies...
cd ..\
call dotnet restore --packages nuget-packages

cd ..
echo Dependencies successfully updated!
