package Web2.kurlyclone.user;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByPhone(String phone);

    Optional<User> findByEmail(String email);

    Optional<User> findByMemberId(String memberId);
}
