package br.com.sco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@SpringBootApplication
public class SistemaControleOvinoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemaControleOvinoApplication.class, args);
	}
}
