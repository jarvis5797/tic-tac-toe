package com.example.tic_tac_toe.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tic_tac_toe.dao.UpdateStatusDao;
import com.example.tic_tac_toe.entities.User;
import com.example.tic_tac_toe.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public String addUser(String name) {
		List<String> users = userRepository.findAllByName();
		if( users.indexOf(name)<0) {
			User user  = new User();
			user.setName(name);
			user.setLossCount(0);
			user.setWinCount(0);
			user.setDrawCount(0);
			userRepository.save(user);
			return "user added";
		}else {
			return "user already exist";
		}
	}
	
	public List<String> allUsersName(){
		return userRepository.findAllByName();
	}
	
	public User getUserDetail(String name) {
		return userRepository.findByName(name).get(0);
	}
	
	public List<User> updateUserStatus(UpdateStatusDao updateStatusDao){
		System.out.println(updateStatusDao);
		User winnerUser = userRepository.findByName(updateStatusDao.getPlayer1Name()).get(0);
		User loserUser = userRepository.findByName(updateStatusDao.getPlayer2Name()).get(0);
		if(updateStatusDao.getPlayer1Status().equals("winner")) {
			winnerUser.setWinCount(winnerUser.getWinCount()+1);
			loserUser.setLossCount(loserUser.getLossCount()+1);
		}else {
			winnerUser.setDrawCount(winnerUser.getDrawCount()+1);
			loserUser.setDrawCount(loserUser.getDrawCount()+1);
		}
		System.out.println(winnerUser);
		System.out.println(loserUser);
		userRepository.save(winnerUser);
		userRepository.save(loserUser);
		List<User> users = new ArrayList<>();
		users.add(winnerUser);
		users.add(loserUser);
		
		return users;
	}
	
	

}
