package br.com.sco.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sco.entity.Animal;
import br.com.sco.entity.Cruzamento;
import br.com.sco.entity.Filho;
import br.com.sco.entity.Peso;
import br.com.sco.entity.Reproducao;
import br.com.sco.repository.AnimalRepository;
import br.com.sco.repository.CruzamentoRepository;
import br.com.sco.repository.FilhoRepository;
import br.com.sco.repository.PesoRepository;
import br.com.sco.repository.ReproducaoRepository;

@RestController
public class AnimalController {

	@Autowired
	AnimalRepository animalRepository;
	
	@Autowired
	FilhoRepository filhoRepository;
	
	@Autowired
	ReproducaoRepository reproducaoRepository;
	
	@Autowired
	CruzamentoRepository cruzamentoRepository;
	
	@Autowired
	PesoRepository pesoRepository; 
	
	@RequestMapping("/animais")
	Collection<Animal> animais(){
		return this.animalRepository.findAll();
	}
	
	@RequestMapping("/filhos")
	Collection<Filho> filhos(){
		return this.filhoRepository.findAll();
	}
	
	@RequestMapping("/reproducao")
	Collection<Reproducao> reproducao(){
		return this.reproducaoRepository.findAll();
	}
	
	@RequestMapping("/cruza")
	Collection<Cruzamento> cruzas(){
		return this.cruzamentoRepository.findAll();
	}
	
	@RequestMapping("/peso")
	Collection<Peso> peso(){
		return this.pesoRepository.findAll();
	}
}
