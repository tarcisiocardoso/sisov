package br.com.sco.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Filho {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private Long idAnimal;
	private Long idFilho;
	

	
	public Filho() {
		super();
	}

	public Filho(Long idAnimal, Long idFilho) {
		super();
		this.idAnimal = idAnimal;
		this.idFilho = idFilho;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdPai() {
		return idFilho;
	}

	public void setIdPai(Long idPai) {
		this.idFilho = idPai;
	}
	public Long getIdAnimal() {
		return idAnimal;
	}

	public void setIdAnimal(Long idAnimal) {
		this.idAnimal = idAnimal;
	}

	public Long getIdFilho() {
		return idFilho;
	}

	public void setIdFilho(Long idFilho) {
		this.idFilho = idFilho;
	}
	
}
