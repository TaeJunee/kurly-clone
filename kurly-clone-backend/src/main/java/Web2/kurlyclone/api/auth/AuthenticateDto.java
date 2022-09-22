package Web2.kurlyclone.api.auth;

import lombok.Data;

@Data
public class AuthenticateDto {

    private String phone;
    private String code;
}