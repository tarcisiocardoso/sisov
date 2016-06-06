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

	private Long idFilho;
	private Long idPai;

	
	public Filho() {
		super();
	}

	public Filho(Long idFilho, Long idPai) {
		super();
		this.idPai = idPai;
		this.idFilho = idFilho;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdAnimal() {
		return idPai;
	}

	public void setIdAnimal(Long idAnimal) {
		this.idPai = idAnimal;
	}

	public Long getIdPai() {
		return idFilho;
	}

	public void setIdPai(Long idPai) {
		this.idFilho = idPai;
	}
	
}
