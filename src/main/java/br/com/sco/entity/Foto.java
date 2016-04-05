package br.com.sco.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Foto {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;

	private String pathImagem;
	private Date dtInsert;
	
	public Foto(String pathImagem, Date dtInsert) {
		super();
		this.pathImagem = pathImagem;
		this.dtInsert = dtInsert;
	}

	public Foto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPathImagem() {
		return pathImagem;
	}

	public void setPathImagem(String pathImagem) {
		this.pathImagem = pathImagem;
	}

	public Date getDtInsert() {
		return dtInsert;
	}

	public void setDtInsert(Date dtInsert) {
		this.dtInsert = dtInsert;
	}

	@Override
	public String toString() {
		return "Foto [id=" + id + ", pathImagem=" + pathImagem + ", dtInsert=" + dtInsert + "]";
	}

}
