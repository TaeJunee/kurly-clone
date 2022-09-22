package Web2.kurlyclone.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static Web2.kurlyclone.security.JWTProvider.HEADER_STRING;
import static Web2.kurlyclone.security.JWTProvider.TOKEN_PREFIX;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private final UserDetailService userDetailService;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, UserDetailService userDetailService) {
        super(authenticationManager);
        this.userDetailService = userDetailService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = request.getHeader(HEADER_STRING);

        //validation
        if (token == null || !token.startsWith(TOKEN_PREFIX) || JWTProvider.getIdfAccount(token) == null) {
            chain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authenticationToken = getAuthenticationToken(request);
        SecurityContextHolder.getContext()
                .setAuthentication(authenticationToken);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthenticationToken(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        String username = JWTProvider.getMemberId(token);

        UserDetails userDetails = userDetailService.loadUserByUsername(username);

        return username != null ? new UsernamePasswordAuthenticationToken(userDetails, null, null) : null;
    }
}
