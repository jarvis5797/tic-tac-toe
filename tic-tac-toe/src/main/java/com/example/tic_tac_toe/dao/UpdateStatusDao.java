package com.example.tic_tac_toe.dao;

public class UpdateStatusDao {
	
	private String player1Name;
	
	private String player1Status;
	
	private String player2Name;
	
	private String player2Status;

	public UpdateStatusDao(String player1Name, String player1Status, String player2Name, String player2Status) {
		
		this.player1Name = player1Name;
		this.player1Status = player1Status;
		this.player2Name = player2Name;
		this.player2Status = player2Status;
	}

	public UpdateStatusDao() {
		
	}

	public String getPlayer1Name() {
		return player1Name;
	}

	public void setPlayer1Name(String player1Name) {
		this.player1Name = player1Name;
	}

	public String getPlayer1Status() {
		return player1Status;
	}

	public void setPlayer1Status(String player1Status) {
		this.player1Status = player1Status;
	}

	public String getPlayer2Name() {
		return player2Name;
	}

	public void setPlayer2Name(String player2Name) {
		this.player2Name = player2Name;
	}

	public String getPlayer2Status() {
		return player2Status;
	}

	public void setPlayer2Status(String player2Status) {
		this.player2Status = player2Status;
	}

	@Override
	public String toString() {
		return "updateStatusDao [player1Name=" + player1Name + ", player1Status=" + player1Status + ", player2Name="
				+ player2Name + ", player2Status=" + player2Status + "]";
	}
	
	
	
	

}
