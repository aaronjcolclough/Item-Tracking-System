@echo off

echo Updating dbseeder dependencies...
cd .\dbseeder
call dotnet add package Microsoft.EntityFrameworkCore.Relational
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer

echo Updating Dev.Auth dependencies...
cd ..\Dev.Auth
call dotnet add package Microsoft.EntityFrameworkCore

echo Updating Dev.Core dependencies...
cd ..\Dev.Core
call dotnet add package Microsoft.EntityFrameworkCore
call dotnet add package Newtonsoft.Json

echo Updating Dev.Data dependencies...
cd ..\Dev.Data
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer
call dotnet add package Microsoft.EntityFrameworkCore.Tools
call dotnet add package Newtonsoft.Json

echo Updating Dev.Identity dependencies...
cd ..\Dev.Identity
call dotnet add package Microsoft.Extensions.Configuration.Abstractions
call dotnet add package Microsoft.Extensions.Configuration.Binder
call dotnet add package System.DirectoryServices
call dotnet add package System.DirectoryServices.AccountManagement

echo Updating Dev.Identity.Mock dependencies...
cd ..\Dev.Identity.Mock

echo Updating Dev.Web dependencies...
cd ..\Dev.Web
call dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
call dotnet add package Microsoft.AspNetCore.OData
call dotnet add package Microsoft.EntityFrameworkDev.Design

echo Caching NuGet dependencies...
cd ..\
call dotnet restore --packages nuget-packages

cd ..
echo Dependencies successfully updated!
