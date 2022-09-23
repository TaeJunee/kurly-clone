package Web2.kurlyclone.security;

import Web2.kurlyclone.api.auth.AuthDto;
import Web2.kurlyclone.exception.LogicErrorList;
import Web2.kurlyclone.exception.LogicException;
import Web2.kurlyclone.user.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static Web2.kurlyclone.security.JWTProvider.HEADER_STRING;
import static Web2.kurlyclone.security.JWTProvider.TOKEN_PREFIX;

@Slf4j
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, UserRepo userRepo) {
        super.setFilterProcessesUrl("/api/auth/signin");
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
        this.setAuthenticationFailureHandler(new CustomAuthenticationFailureHandler());
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        try {
            log.info("attempt auth 진입");
            AuthDto authDto = new ObjectMapper().readValue(request.getInputStream(), AuthDto.class);
            return this.authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authDto.getMemberId(), authDto.getPassword()));
        } catch (Exception e) {
            log.error("attemptAuthentication >> signin error");
            throw new BadCredentialsException(e.getMessage());
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException {
        Map<String, String> map = new HashMap<>();

        String memberId = ((User) authResult.getPrincipal()).getUsername();
        Web2.kurlyclone.user.User user = userRepo.findByMemberId(memberId)
                .orElseThrow(() -> new LogicException(LogicErrorList.DoesNotExist_Account));

        log.info("successful auth 진입 memberId : " + memberId);

        String token = JWTProvider.createJwt(user);
        String bearerToken = TOKEN_PREFIX + token;
        map.put(HEADER_STRING, bearerToken);

        String json = new Gson().toJson(map);
        response.setContentType("application/json");
        response.getWriter().write(json);
    }
}
