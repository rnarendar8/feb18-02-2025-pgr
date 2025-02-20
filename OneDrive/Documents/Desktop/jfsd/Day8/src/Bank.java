public class Bank {
	
	int openBalance=0;
	
	
	
	public Bank(int openBalance) {
		//super();
		this.openBalance = openBalance;
	}

	void deposit(int amt) {
		this.openBalance = this.openBalance + amt;
		System.out.println("successfully deposited------>"+amt);
	}
	
	void withDraw(int amt) {
		this.openBalance = this.openBalance - amt;
		System.out.println("successfully withDrawn------>"+amt);
			
	}
	void checkBalance() {
		System.out.println("avl balance-->"+this.openBalance);
	}

	@Override
	public String toString() {
		return "Bank [openBalance=" + openBalance + "]";
	}
	
	

}