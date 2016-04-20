package br.com.sco.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.sco.SistemaControleOvinoApplication;
import br.com.sco.entity.Animal;
import br.com.sco.entity.AnimalFoto;
import br.com.sco.entity.Cruzamento;
import br.com.sco.entity.Filho;
import br.com.sco.entity.Peso;
import br.com.sco.entity.Reproducao;
import br.com.sco.repository.AnimalFotoRepository;
import br.com.sco.repository.AnimalRepository;
import br.com.sco.repository.CruzamentoRepository;
import br.com.sco.repository.FilhoRepository;
import br.com.sco.repository.PesoRepository;
import br.com.sco.repository.ReproducaoRepository;

@RestController
public class AnimalController {

	public static final String PATH_IMAGE = "/home/xys/Documents/workspace-sts-3.7.3.RELEASE/SistemaControleOvino/src/main/java/data/fotos/";
	
	@Autowired
	ServletContext servletContext;
	
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
	
	@Autowired
	AnimalFotoRepository animalFotoRepository;
	
	@RequestMapping(value="/animal")
	Collection<Animal> animais(){
		return this.animalRepository.findAll();
	}
	
	@RequestMapping(value="/animal/reprodutor")
	Collection<Animal> reprodutor(){
		return this.animalRepository.findByTipo("Reprodutor");
	}
	
	@RequestMapping(value="/animal/matriz")
	Collection<Animal> matriz(){
		return this.animalRepository.findByTipo("Matriz");
	}
	
	@RequestMapping(value = "/foto/{nome}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	public byte[] foto( @PathVariable("nome") String nome ) throws IOException {
		
		String foto = SistemaControleOvinoApplication.ROOT + "/" +nome+".jpg";
		
		File file = new File(foto);
		InputStream in = new BufferedInputStream(new FileInputStream(file));
		
		return IOUtils.toByteArray(in);
	}
	
	@RequestMapping(value = "/animal/reprodutor/foto/{id}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	public byte[] findImage(@PathVariable("id") String id) throws IOException {
		
		String foto = this.animalFotoRepository.getFoto( new Long(id) );
		if( foto == null){
			foto = "sheep.png";
		}
		File file = new File(AnimalController.PATH_IMAGE+foto);
		
		InputStream in = new BufferedInputStream(new FileInputStream(file));

		return IOUtils.toByteArray(in);

	}
	
	@RequestMapping(value="/animal", method=RequestMethod.POST)
	String animalSubmit(@RequestBody Animal animal, Model model){
		System.out.println( animal );
		this.animalRepository.save(animal);
		this.animalRepository.flush();
		
		//return this.animalRepository.findAll();
		return "{\"sucesso\": \"ok\", \"id\": "+animal.getId()+"}";
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
