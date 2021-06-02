package com.springboot.web.app.bank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com")
@EntityScan(basePackages = "com")
@EnableJpaRepositories(basePackages = "com")

public class BankApp {

	public static void main(String[] args) {
		SpringApplication.run(BankApp.class, args);
	}

}
