package com.graphqljava.tutorial.bookdetails.repositories;

import com.graphqljava.tutorial.bookdetails.domain.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {

    List<Book> findByName(String name);
    List<Book> findAll();
    List<Book> findAllByNameStartsWith(String name);

}
