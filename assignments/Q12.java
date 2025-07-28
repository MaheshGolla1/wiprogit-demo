package assignments;

class Student {
    private static int counter = 1;
    private int rollNo;
    private String name;
    private int eng, maths, sci;

    public Student(String name, int eng, int maths, int sci) {
        this.rollNo = counter++;
        this.name = name;
        this.eng = eng;
        this.maths = maths;
        this.sci = sci;
    }

    public int getRollNo() { return rollNo; }
    public String getName() { return name; }
    public int getEng() { return eng; }
    public int getMaths() { return maths; }
    public int getSci() { return sci; }
    public int getTotal() { return eng + maths + sci; }
    public double getPercentage() { return getTotal() / 3.0; }
}

class Standard {
    Student[] studs;
    public Standard(Student[] studs) {
        this.studs = studs;
    }

    public void displayAll() {
        for (Student s : studs)
            System.out.println(s.getRollNo() + " " + s.getName());
    }

    public void highestPercentage() {
        Student max = studs[0];
        for (Student s : studs)
            if (s.getPercentage() > max.getPercentage()) max = s;
        System.out.println("Highest %: " + max.getRollNo() + " " + max.getName());
    }

    public void highestMaths() {
        Student max = studs[0];
        for (Student s : studs)
            if (s.getMaths() > max.getMaths()) max = s;
        System.out.println("Highest Maths: " + max.getRollNo() + " " + max.getName());
    }
}

public class Q12 {
    public static void main(String[] args) {
        Student[] arr = {
            new Student("A",80,90,70),
            new Student("B",70,85,60),
            new Student("C",88,91,72),
            new Student("D",50,60,65),
            new Student("E",72,88,60),
            new Student("F",90,77,88),
            new Student("G",45,65,75),
            new Student("H",70,80,90),
        };
        Standard std = new Standard(arr);
        std.displayAll();
        std.highestPercentage();
        std.highestMaths();
    }
}

/*
5 E
6 F
7 G
8 H
Highest %: 6 F
Highest Maths: 3 C
*/