package assignments;

class Worker {
    String name;
    int salaryRate;
    Worker(String n, int rate)
    { 
    	name=n; salaryRate=rate; 
    }
    int pay(int hours)
    {
    	return 0; 
    }
}
class DailyWorker extends Worker 
{
    DailyWorker(String n,int r)
    { 
    	super(n,r); 
    }
    int pay(int days)
    { 
    	return salaryRate*days; 
    }
}
class SalariedWorker extends Worker 
{
    SalariedWorker(String n,int r)
    {
    	super(n,r); 
    }
    int pay(int hours)
    { 
    	return salaryRate*40; 
    }
}
public class Q13 {
    public static void main(String[] args) {
        DailyWorker d = new DailyWorker("fooya", 500);
        SalariedWorker s = new SalariedWorker("friya"
        		+ "", 200);
        System.out.println("DailyWorker pay: "+d.pay(5));
        System.out.println("SalariedWorker pay: "+s.pay(50));
    }
}

/* DailyWorker pay: 2500
SalariedWorker pay: 8000
*/