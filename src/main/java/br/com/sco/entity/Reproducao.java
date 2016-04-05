package br.com.sco.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reproducao {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private Long idMae;
	private Long idFilho;
	
	private Long idProcedimento;
	
	private String descricao;

	public Reproducao(Long idMae, Long idFilho, Long idProcedimento, String descricao) {
		super();
		this.idMae = idMae;
		this.idFilho = idFilho;
		this.idProcedimento = idProcedimento;
		this.descricao = descricao;
	}

	public Reproducao() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdMae() {
		return idMae;
	}

	public void setIdMae(Long idMae) {
		this.idMae = idMae;
	}

	public Long getIdFilho() {
		return idFilho;
	}

	public void setIdFilho(Long idFilho) {
		this.idFilho = idFilho;
	}

	public Long getIdProcedimento() {
		return idProcedimento;
	}

	public void setIdProcedimento(Long idProcedimento) {
		this.idProcedimento = idProcedimento;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Override
	public String toString() {
		return "Reproducao [id=" + id + ", idMae=" + idMae + ", idFilho=" + idFilho + ", idProcedimento="
				+ idProcedimento + ", descricao=" + descricao + "]";
	}
	
	
}
