namespace Microsoft.AspNetCore.Builder;

using Dev.Identity.Mock;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseMockMiddleware(this IApplicationBuilder builder) => builder.UseMiddleware<MockMiddleware>();
}