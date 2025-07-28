package assignments;
abstract class Person {
    abstract void eat();
    abstract void exercise();
}

class Athlete extends Person {
    void eat() {
        System.out.println("Athlete eats a healthy and high-protein diet.");
    }

    void exercise() {
        System.out.println("Athlete exercises daily with intense workouts.");
    }
}

class LazyPerson extends Person {
    void eat() {
        System.out.println("LazyPerson eats junk food all the time.");
    }

    void exercise() {
        System.out.println("LazyPerson rarely exercises.");
    }
}

public class Q21 {
    public static void main(String[] args) {
        Person p1 = new Athlete();
        p1.eat();
        p1.exercise();

        Person p2 = new LazyPerson();
        p2.eat();
        p2.exercise();
    }
}

/* Athlete eats a healthy and high-protein diet.
Athlete exercises daily with intense workouts.
LazyPerson eats junk food all the time.
LazyPerson rarely exercises.
*/