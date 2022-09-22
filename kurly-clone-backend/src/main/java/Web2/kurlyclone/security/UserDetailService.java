package Web2.kurlyclone.security;

import Web2.kurlyclone.exception.LogicErrorList;
import Web2.kurlyclone.exception.LogicException;
import Web2.kurlyclone.user.UserRepo;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class UserDetailService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
        List<GrantedAuthority> authorityList = AuthorityUtils.createAuthorityList();

        Web2.kurlyclone.user.User user = userRepo.findByMemberId(memberId)
                .orElseThrow(() -> new LogicException(LogicErrorList.DoesNotExist_Account));

//        if (!user.isAuthenticate()) {
//            throw new LogicException(LogicErrorList.Authentication_Required);
//        }

        return new User(user.getMemberId(), user.getPassword(), authorityList);
    }
}

