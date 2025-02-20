
public class SBIAccount {
	String name;
	int accNo;
	String mobile;
	int balance;
	public SBIAccount(String name,String mobile,int balance) {
		super();
		this.name=name;
		this.mobile=mobile;
		this.balance=balance;
		this.accNo=generateaccNo();
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name=name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String name) {
		this.mobile = mobile;
	}
	int generateaccNo() {
		int max = 5000;
		int min = 500;
		int range = max-min+1;
		int randNo=(int)(Math.random()*range)+min;
		return randNo;
	}
	@Override
	public String toString() {
		return "SBIAccount [name="+name+",accNo="+accNo+",mobile="+mobile+"balance="+balance+"]";
		
	}
	void deposit(int amt) {
		this.balance this.balance+amt;
		System.out.println("successfully deposited...."+amt);
	}
	
	void checkBalance() {
		System.out.println("Avl balance----->"+this.balance);
		
	}
	void withDraw(int amt) {
		if(this.balance>amt) {
			this.balance=this.balance-amt;
			System.out.println("Successfully withDrawn..."+amt);
		}
		else {
			System.out.println("Insufficient Balance");
		}
	}
	
	
	public static void main(String[] args) {
		
	}

}
