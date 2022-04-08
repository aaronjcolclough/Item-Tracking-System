namespace Microsoft.AspNetCore.Builder;

using Core.Identity.Mock;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseMockMiddleware(this IApplicationBuilder builder) => builder.UseMiddleware<MockMiddleware>();
}