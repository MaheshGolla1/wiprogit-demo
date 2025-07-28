package assignments;
class Vehicle {
    String color; int wheels; String model;
    Vehicle(String c,int w,String m)
    {
    	color=c; wheels=w; model=m;
    }
    void show()
    {
    	System.out.println(model+" "+color+" "+wheels+" wheels"); 
    }
}
class Truck extends Vehicle {
    Truck(){ super("Red",6,"TataTruck"); }
}
class Car extends Vehicle {
    Car(){ super("Blue",4,"Suzuki"); }
}
class Bus extends Vehicle {
    Bus(){ super("Yellow",8,"Volvo"); }
}

public class Q17 {
    public static void main(String[] args) {
        Truck t=new Truck(); Car c=new Car(); Bus b=new Bus();
        t.show(); c.show(); b.show();
    }
}

/* TataTruck Red 6 wheels
Suzuki Blue 4 wheels
Volvo Yellow 8 wheels
*/