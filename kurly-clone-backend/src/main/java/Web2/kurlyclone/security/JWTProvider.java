package Web2.kurlyclone.security;

import Web2.kurlyclone.user.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;


public class JWTProvider {

    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    static final String SECRET = "kurly-clone-api";
    static final long EXPIRATION_TIME = 86400000L * 7;

    public static Integer getIdfAccount(String jwt) {
        try {
            Integer idfAccount = (Integer) Jwts.parser().setSigningKey(SECRET)
                    .parseClaimsJws(jwt.replace(TOKEN_PREFIX, "")).getBody().get("idfAccount");
            return idfAccount;
        } catch (RuntimeException e) {
            return null;
        }
    }

    public static String getMemberId(String jwt) {
        try {
            String memberId = (String) Jwts.parser().setSigningKey(SECRET)
                    .parseClaimsJws(jwt.replace(TOKEN_PREFIX, "")).getBody().get("memberId");
            return memberId;
        } catch (RuntimeException e) {
            return null;
        }
    }

    public static String createJwt(User user) {
        return Jwts.builder()
                .claim("idfAccount", user.getIdfAccount())
                .claim("name", user.getName())
                .claim("memberId", user.getMemberId())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();
    }
}
