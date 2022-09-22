package Web2.kurlyclone.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {

        log.debug(exception.toString());

        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("message", exception.getMessage());
        response.setStatus(401);
        response.setContentType("application/json");
        response.getOutputStream().write(new ObjectMapper().writeValueAsBytes(responseBody));
        response.flushBuffer();

    }
}
