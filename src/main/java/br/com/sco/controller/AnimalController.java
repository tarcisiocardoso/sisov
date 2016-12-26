package br.com.sco.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import javax.servlet.ServletContext;
import javax.sql.DataSource;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.sco.SistemaControleOvinoApplication;
import br.com.sco.entity.Animal;
import br.com.sco.entity.AnimalFoto;
import br.com.sco.entity.Cobertura;
import br.com.sco.entity.Filho;
import br.com.sco.entity.Foto;
import br.com.sco.entity.Peso;
import br.com.sco.entity.Reproducao;
import br.com.sco.repository.AnimalFotoRepository;
import br.com.sco.repository.AnimalRepository;
import br.com.sco.repository.CruzamentoRepository;
import br.com.sco.repository.FilhoRepository;
import br.com.sco.repository.FotoRepository;
import br.com.sco.repository.PesoRepository;
import br.com.sco.repository.ReproducaoRepository;
import br.com.sco.repository.dao.AnimalDao;

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
	
	//@Autowired
	//TesteJDBC jdbc;
	@Autowired
	DataSource dataSource;
	
	@Autowired
	FotoRepository fotoRepository;
	
	@Autowired
	AnimalDao jdbc;
	
	@RequestMapping(value="/pesoMax/{idAnimal}")
	public String getPesoMaxAniaml(@PathVariable("idAnimal") Long idAnimal){
		String peso = "";
		peso = this.pesoRepository.getPeso(idAnimal);
		return peso;
	}
	@RequestMapping(value="/peso/{idAnimal}")
	public Collection<Peso> getPesoAniaml(@PathVariable("idAnimal") Long idAnimal){
		return this.pesoRepository.getPesoDoAnimal(idAnimal);
	}
	
	@RequestMapping(value="/animal")
	Collection<Animal> animais(){
//		return this.animalRepository.findAll();
		
//		Collection<Object[]> c = this.animalRepository.findTodos();
//		Collection<Animal> aLst = new ArrayList<Animal>(c.size());
//		for (Object []item : c) {
//			Animal a = new Animal();
//			a.setId( ((BigInteger)item[0]).longValue() );
//			a.setFoto( (String)item[9] );
//			System.out.println(a);
//			aLst.add(a);
//		}
//		return aLst;
//		return jdbc.todos();
		
		return jdbc.todos();
		
//		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
//		
//		jdbcTemplate.query(
//                "SELECT *, 'xxx' as foto FROM animal",
//                (rs, rowNum) -> make(rs)
//        ).forEach(a -> System.out.println(a.toString()));
//		
//		return null;
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

	@RequestMapping(value="/foto", method = RequestMethod.POST, headers = {"Content-type=application/json"})
	String addFoto(@RequestBody Foto foto, Model model){
		System.out.println( foto );
		
		Foto fotoSalvo = this.fotoRepository.save(foto);
		this.fotoRepository.flush();

		return "{\"sucesso\": \"ok\", \"id\": "+fotoSalvo.getId()+"}";
	}
	@RequestMapping(value="/peso", method = RequestMethod.POST, headers = {"Content-type=application/json"})
	String addPeso(@RequestBody Peso peso, Model model){
		System.out.println( peso );
		
		Peso pesoSalvo = this.pesoRepository.save(peso);
		this.pesoRepository.flush();

		return "{\"sucesso\": \"ok\", \"id\": "+pesoSalvo.getId()+"}";
	}
	
	@RequestMapping(value="/animal", method = RequestMethod.POST, headers = {"Content-type=application/json"})
	String animalSubmit(@RequestBody Animal animal, Model model){
		System.out.println( animal );
		Animal animalSalvo = this.animalRepository.save(animal);
		this.animalRepository.flush();
		if( animal.getFoto() != null ){
			//TODO mover imagem
			File f = new File(SistemaControleOvinoApplication.ROOT+"/"+animal.getFoto());
			if( f.isFile() ){
				f.renameTo( new File( PATH_IMAGE +"/"+animal.getFoto() )  );
			}
			Foto foto = new Foto();
			foto.setPathImagem( animal.getFoto() );
			foto.setDtInsert( new Date(System.currentTimeMillis()) );
			//TODO concluir savar foto
			this.fotoRepository.save(foto);
			
			AnimalFoto animalFoto = new AnimalFoto();
			animalFoto.setIdAnimal( animalSalvo.getId() );
			animalFoto.setIdFoto( foto.getId() );
			this.animalFotoRepository.save(animalFoto );
		}
		if( animal.getPeso() != null){
			Peso peso = new Peso();
			peso.setIdAnimal( animalSalvo.getId() );
			peso.setValor( animal.getPeso() );
			this.pesoRepository.save(peso );
			this.pesoRepository.flush();
		}
		return "{\"sucesso\": \"ok\", \"id\": "+animalSalvo.getId()+"}";
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
	Collection<Cobertura> cruzas(){
		return this.cruzamentoRepository.findAll();
	}
	
	@RequestMapping("/peso")
	Collection<Peso> peso(){
		return this.pesoRepository.findAll();
	}
	
}
