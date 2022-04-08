namespace Microsoft.AspNetCore.Builder;

using Dev.Identity;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseAdMiddleware(this IApplicationBuilder builder) =>
        builder.UseMiddleware<AdUserMiddleware>();
}