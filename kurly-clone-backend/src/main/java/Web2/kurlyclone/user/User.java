package Web2.kurlyclone.user;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idf_account")
    private Long idfAccount;
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
    @Column(length = 13)
    private String certification;

    @CreationTimestamp
    private LocalDateTime createAt;
    @UpdateTimestamp
    private LocalDateTime updateAt;

    public boolean authenticate(String code) {
        if (this.certification.equals("authenticate")) {
            return false;
        }

        if (this.certification.equals(code)) {
            this.certification = "authenticate";
            return true;
        }

        return false;
    }

    public boolean isAuthenticate() {
        return this.certification.equals("authenticate");
    }

    public void withDraw() {
        //탈퇴
    }
}
