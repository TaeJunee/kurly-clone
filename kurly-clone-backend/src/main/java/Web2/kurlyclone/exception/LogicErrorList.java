package Web2.kurlyclone.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum LogicErrorList {
    DoesNotExist_Account(-1, "DoesNotExist_Account"),
    Already_SignedUser(1, "Already_SignedUser"),
    Authentication_Required(2, "Authentication_Required"),
    NotValid_Code(9999, "NotValid_Code");

    private final int errorCode;
    private final String errorMsg;
}
