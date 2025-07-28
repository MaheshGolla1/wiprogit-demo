package assignments;
class Shape 
{
    void area(int side) 
    {
        System.out.println("Square Area: " + (side * side));
    }
    void area(int l, int b) 
    {
        System.out.println("Rectangle Area: " + (l * b));
    }
    void perimeter(int side) 
    {
        System.out.println("Square Perimeter: " + (4 * side));
    }
    void perimeter(int l, int b) 
    {
        System.out.println("Rectangle Perimeter: " + (2 * (l + b)));
    }
}

public class Q14 {
    public static void main(String[] args) {
        Shape s = new Shape();
        s.area(6);
        s.area(4,8);
        s.perimeter(7);
        s.perimeter(4,8);
    }
}

/* Square Area: 36
Rectangle Area: 32
Square Perimeter: 28
Rectangle Perimeter: 24
*/