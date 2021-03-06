package br.com.sco.entity;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Animal {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String identificador;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dtNascimento;
	
	@Column(nullable=true) 
	private Long idPai;
	
	@Column(nullable=true)
	private Long idMae;
	
	@Column(nullable=true)
	private String raca;
	
	@Column(nullable=true)
	private String tipo;
	
	private Character sexo;
	
	@Transient
    @Column(name="foto")	
	private String foto;
	
	@Transient
	private Float peso;
	
	public Float getPeso() {
		return peso;
	}

	public void setPeso(Float peso) {
		this.peso = peso;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public Animal(String identificador) {
		super();
		this.identificador = identificador;
	}

	public Animal() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificado(String identificador) {
		this.identificador = identificador;
	}

	public Date getDtNascimento() {
		return dtNascimento;
	}

	public void setDtNascimento(Date dtNascimento) {
		this.dtNascimento = dtNascimento;
	}

	public Long getIdPai() {
		return idPai;
	}

	public void setIdPai(Long idPai) {
		this.idPai = idPai;
	}

	public Long getIdMae() {
		return idMae;
	}

	public void setIdMae(Long idMae) {
		this.idMae = idMae;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public Character getSexo() {
		return sexo;
	}

	public void setSexo(Character sexo) {
		this.sexo = sexo;
	}

	
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", identificador=" + identificador + ", dtNascimento=" + dtNascimento + ", idPai="
				+ idPai + ", idMae=" + idMae + ", raca=" + raca + ", sexo=" + sexo + ", foto="+foto+"]";
	}

	
}
