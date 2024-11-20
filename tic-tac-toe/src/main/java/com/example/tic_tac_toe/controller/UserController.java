package com.example.tic_tac_toe.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.tic_tac_toe.services.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/saveUser")
	public ResponseEntity<?> addUser(@RequestParam (name = "name") String name){
		return ResponseEntity.status(HttpStatus.OK).body(userService.addUser(name));
	}
	
	@GetMapping("/allUsers")
	public ResponseEntity<?> getAllNames(){
		return ResponseEntity.status(HttpStatus.OK).body(userService.allUsersName());
	}
}
