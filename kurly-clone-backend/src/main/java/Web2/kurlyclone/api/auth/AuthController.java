package Web2.kurlyclone.api.auth;


import Web2.kurlyclone.Response;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public Response<String> signup(@RequestBody AuthDto authDto) {
        return authService.signup(authDto);
    }

    @PostMapping("/idduplicationcheck")
    public Response<String> idDuplicationCheck(@RequestBody AuthDto authDto) { return authService.idDuplicationCheck(authDto); }

    @PostMapping("/emailduplicationcheck")
    public Response<String> emailDuplicationCheck(@RequestBody AuthDto authDto) { return authService.emailDuplicationCheck(authDto); }

    @PostMapping("/authenticate")
    public Response<String> authenticate(@RequestBody AuthenticateDto authenticateDto) {
        return authService.authenticate(authenticateDto);
    }
}