package com.example.tic_tac_toe.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private Integer winCount;
	
	private Integer lossCount;

	private Integer drawCount;
	
	
	
	

	public User(Long id, String name, Integer winCount, Integer lossCount, Integer drawCount) {
		this.id = id;
		this.name = name;
		this.winCount = winCount;
		this.lossCount = lossCount;
		this.drawCount = drawCount;
	}
	
	

	public User() {
		
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getWinCount() {
		return winCount;
	}

	public void setWinCount(Integer winCount) {
		this.winCount = winCount;
	}

	public Integer getLossCount() {
		return lossCount;
	}

	public void setLossCount(Integer lossCount) {
		this.lossCount = lossCount;
	}

	public Integer getDrawCount() {
		return drawCount;
	}

	public void setDrawCount(Integer drawCount) {
		this.drawCount = drawCount;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", winCount=" + winCount + ", lossCount=" + lossCount
				+ ", drawCount=" + drawCount + "]";
	}

	
	
}
