package com.example.produto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.produto.models.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	Produto findById(long id);
}
