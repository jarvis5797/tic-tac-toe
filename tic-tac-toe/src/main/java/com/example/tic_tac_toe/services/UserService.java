package com.example.tic_tac_toe.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
			userRepository.save(user);
			return "user added";
		}else {
			return "user already exist";
		}
	}
	
	public List<String> allUsersName(){
		return userRepository.findAllByName();
	}

}
