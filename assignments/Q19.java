package assignments;
abstract class Bank {
    String accNo,custName,custJob; int custGender;
    double curBal;
    public abstract double calcBalance();
    public String toString(){ return accNo+" "+custName+" "+curBal; }
}

class Saving extends Bank {
    double savRate;
    Saving(String a,String n,double bal,double rate){
        accNo=a;custName=n;curBal=bal;savRate=rate;
    }
    public double calcBalance(){ return curBal + (savRate*curBal); }
}

class Current extends Bank {
    boolean fixedDep; double curRate;
    Current(String a,String n,double bal,double rate,boolean f){
        accNo=a;custName=n;curBal=bal;curRate=rate;fixedDep=f;
    }
    public double calcBalance(){
        double bal = curBal + (curRate*curBal);
        if(fixedDep) bal -= 150;
        return bal;
    }
}

public class Q19 {
    public static void main(String[] args) {
        Saving s = new Saving("S1","Amit",1000,0.1);
        System.out.println(s.calcBalance());
        Current c = new Current("C1","Raj",2000,0.05,true);
        System.out.println(c.calcBalance());
    }
}

/* 1100.0
1950.0
*/