package assignments;
interface Drawable {
    void drawingColor(String color);
    void thickness(int t);
}

interface Fillable {
    void fillingColor(String color);
    void size(double s);
}

class Line implements Drawable {
    private String color;
    private int thickness;

    @Override
    public void drawingColor(String color) {
        this.color = color;
    }

    @Override
    public void thickness(int t) {
        this.thickness = t;
    }

    public void display() {
        System.out.println("Line -> Color: " + color + ", Thickness: " + thickness);
    }
}

class Circle implements Drawable, Fillable {
    private String drawColor;
    private int thickness;
    private String fillColor;
    private double size;

    @Override
    public void drawingColor(String color) {
        this.drawColor = color;
    }

    @Override
    public void thickness(int t) {
        this.thickness = t;
    }

    @Override
    public void fillingColor(String color) {
        this.fillColor = color;
    }

    @Override
    public void size(double s) {
        this.size = s;
    }

    public void display() {
        System.out.println("Circle -> Drawing Color: " + drawColor + ", Thickness: " + thickness +
                           ", Filling Color: " + fillColor + ", Size: " + size);
    }
}

class Square implements Drawable, Fillable {
    private String drawColor;
    private int thickness;
    private String fillColor;
    private double size;

    @Override
    public void drawingColor(String color) {
        this.drawColor = color;
    }

    @Override
    public void thickness(int t) {
        this.thickness = t;
    }

    @Override
    public void fillingColor(String color) {
        this.fillColor = color;
    }

    @Override
    public void size(double s) {
        this.size = s;
    }

    public void display() {
        System.out.println("Square -> Drawing Color: " + drawColor + ", Thickness: " + thickness +
                           ", Filling Color: " + fillColor + ", Size: " + size);
    }
}

public class Q22 {
    public static void main(String[] args) {
        Line line = new Line();
        line.drawingColor("Black");
        line.thickness(2);

        Circle circle = new Circle();
        circle.drawingColor("Blue");
        circle.thickness(3);
        circle.fillingColor("Yellow");
        circle.size(5.5);

        Square square = new Square();
        square.drawingColor("Red");
        square.thickness(4);
        square.fillingColor("Green");
        square.size(8.0);

        
        line.display();
        circle.display();
        square.display();
    }
}

/* Line -> Color: Black, Thickness: 2
Circle -> Drawing Color: Blue, Thickness: 3, Filling Color: Yellow, Size: 5.5
Square -> Drawing Color: Red, Thickness: 4, Filling Color: Green, Size: 8.0
*/