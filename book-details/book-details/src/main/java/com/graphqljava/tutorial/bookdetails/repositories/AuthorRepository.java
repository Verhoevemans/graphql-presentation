package com.graphqljava.tutorial.bookdetails.repositories;

import com.graphqljava.tutorial.bookdetails.domain.Author;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AuthorRepository extends CrudRepository<Author, Long> {

    List<Author> findAll();
    List<Author> findAllByLastName(String lastName);

}
