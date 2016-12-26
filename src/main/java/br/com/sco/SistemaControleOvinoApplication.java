package br.com.sco;

import java.io.File;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@SpringBootApplication
public class SistemaControleOvinoApplication {

//	public static String ROOT = "upload-dir";
	public static String ROOT = "/home/tarcisio/Documentos/workspace-sts-3.7.3.RELEASE/SistemaControleOvino/src/main/resources/static/foto";
	
	public static void main(String[] args) {
		SpringApplication.run(SistemaControleOvinoApplication.class, args);
	}
	
	@Bean
    CommandLineRunner init() {
        return (String[] args) -> {
            new File(ROOT).mkdir();
        };
    }
}
