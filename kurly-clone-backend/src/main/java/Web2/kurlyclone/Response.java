package Web2.kurlyclone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class Response<T> {

    @AllArgsConstructor
    public enum Code {
        SUCCESS,
    }

    public static int SUCCESS = 0;

    int code;
    T payload;

    private Response(int code) { this.code = code; }

    public Response<T> body(T payload) {
        this.payload = payload;
        return this;
    }

    public static Response<String> ok(String msg) {
        return new Response<>(Code.SUCCESS.ordinal(), msg);
    }

    public static <T> Response<T> ok() { return new Response<>(0); }
}
