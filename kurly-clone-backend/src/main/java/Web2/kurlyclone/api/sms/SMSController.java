package Web2.kurlyclone.api.sms;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class SMSController {

    private final SMSService smsService;

    @PostMapping("/sms/send")
    public SMSResponseDto sendSMS(@RequestBody SMSDto smsDto) throws JsonProcessingException, RestClientException, URISyntaxException, InvalidKeyException, NoSuchAlgorithmException, UnsupportedEncodingException {
        return smsService.sendSMS(smsDto);
    }

}
