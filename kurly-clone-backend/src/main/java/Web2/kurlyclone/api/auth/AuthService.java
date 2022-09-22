package Web2.kurlyclone.api.auth;

import Web2.kurlyclone.Response;
import Web2.kurlyclone.exception.LogicErrorList;
import Web2.kurlyclone.exception.LogicException;
import Web2.kurlyclone.user.User;
import Web2.kurlyclone.user.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

    private final UserRepo userRepo;
    private final RedisTemplate<String, Object> redisTemplate;

    public Response<String> signup(AuthDto authDto) {
        User signedUser = userRepo.findByPhone(authDto.getPhone()).orElse(null);
        if (signedUser != null) {
            throw new LogicException(LogicErrorList.Already_SignedUser);
        }

        User user = User.builder()
                .memberId(authDto.getMemberId())
                .password(new BCryptPasswordEncoder().encode(authDto.getPassword()))
                .name(authDto.getName())
                .email(authDto.getEmail())
                .phone(authDto.getPhone())
                .address1(authDto.getAddress1())
                .address2(authDto.getAddress2())
                .gender(authDto.getGender())
                .birthYear(authDto.getBirthYear())
                .birthMonth(authDto.getBirthMonth())
                .birthDay(authDto.getBirthDay())
                .build();
        userRepo.save(user);

        return Response.<String>ok().body("회원가입이 완료되었습니다.");
    }

    public Response<String> idDuplicationCheck(AuthDto authDto) {
        User idExists = userRepo.findByMemberId(authDto.getMemberId()).orElse(null);
        if (idExists != null) {
            throw new LogicException(LogicErrorList.Already_SignedUser);
        }

        return Response.<String>ok().body("사용할 수 있는 아이디입니다.");
    }

    public Response<String> emailDuplicationCheck(AuthDto authDto) {
        User emailExists = userRepo.findByEmail(authDto.getEmail()).orElse(null);
        if (emailExists != null) {
            throw new LogicException(LogicErrorList.Already_SignedUser);
        }

        return Response.<String>ok().body("사용할 수 있는 이메일입니다.");
    }

    public Response<String> authenticate(AuthenticateDto authenticateDto) {
        String authKey = authenticateDto.getCode();
        String phone = authenticateDto.getPhone();

        if (!redisTemplate.opsForValue().get(phone).equals(authKey)) {
            throw new LogicException(LogicErrorList.NotValid_Code);
        }

        return Response.<String>ok().body("인증에 성공하였습니다.");
    }
}

