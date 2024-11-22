package com.example.tic_tac_toe.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.tic_tac_toe.entities.User;

@EnableJpaRepositories
public interface UserRepository extends JpaRepository<User, Long>{
	
	
	@Query(value= "select name from user" , nativeQuery = true)
	public List<String> findAllByName();
	
	List<User> findByName(String name);

}
