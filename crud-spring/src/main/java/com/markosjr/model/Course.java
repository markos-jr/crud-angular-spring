package com.markosjr.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


//@Generated (Poderia ser usado, porém o @Date é equivalente) 
//@Setter    (Poderia ser usado, porém o @Date é equivalente)       
@Data
@Entity
//@Table(name ="cursos")    <----- Se eu quiser pegar uma tabela já existente no banco de dados
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)   // @Column (name = "nome")  <-- Se minhas tabelas tem colunas com nomes diferentes das minhas propriedades eu consigo associar assim <--
    private String name;

    @Column(length = 10, nullable = false)
    private String category;
}
