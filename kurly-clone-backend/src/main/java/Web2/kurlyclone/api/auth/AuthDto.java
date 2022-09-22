package Web2.kurlyclone.api.auth;

import lombok.Data;

@Data
public class AuthDto {

    private String memberId;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String address1;
    private String address2;
    private String gender;
    private String birthYear;
    private String birthMonth;
    private String birthDay;

}
