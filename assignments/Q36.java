package assignments;
class Tank {
    private boolean filled = false;

    public void fill() {
        filled = true;
        System.out.println("Tank filled");
    }

    public void empty() {
        filled = false;
        System.out.println("Tank emptied");
    }

    public void releaseTank() {
        filled = false;
        System.out.println("Tank released properly");
    }

    @Override
    protected void finalize() throws Throwable {
        if (filled) {
            System.out.println("Error: Tank was not released before cleanup!");
        } else {
            System.out.println("Tank cleanup successful");
        }
        super.finalize();
    }
}

public class Q36 {
    public static void main(String[] args) {
        Tank t1 = new Tank();
        t1.fill();
        t1.releaseTank();
        t1 = null;
        System.gc();
        Tank t2 = new Tank();
        t2.fill();
        t2 = null;
        System.gc();
    }
}

/* Tank filled
Tank released properly
Tank filled
Tank cleanup successful
Error: Tank was not released before cleanup!
*/
