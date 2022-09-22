package Web2.kurlyclone.api.sms;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class SMSRequestDto {

    private String type;
    private String contentType;
    private String countryCode;
    private String from;
    private String content;
    private List<SMSDto> messages;


}
