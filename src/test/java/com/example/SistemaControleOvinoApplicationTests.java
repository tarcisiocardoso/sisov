package com.example;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import br.com.sco.SistemaControleOvinoApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SistemaControleOvinoApplication.class)
@WebAppConfiguration
public class SistemaControleOvinoApplicationTests {

	@Test
	public void contextLoads() {
	}

}
