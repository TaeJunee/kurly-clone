package Web2.kurlyclone.util;

import java.util.concurrent.ThreadLocalRandom;

public class RandomNumUtil {

    public static String generate() {
        int randNum = ThreadLocalRandom.current().nextInt(100000, 1000000);
        return Integer.toString(randNum);
    }
}
