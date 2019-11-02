package com.graphqljava.tutorial.bookdetails;

import com.graphqljava.tutorial.bookdetails.domain.Author;
import com.graphqljava.tutorial.bookdetails.domain.Book;
import com.graphqljava.tutorial.bookdetails.repositories.AuthorRepository;
import com.graphqljava.tutorial.bookdetails.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookDetailsApplication implements CommandLineRunner {

	@Autowired
	BookRepository bookRepository;

	@Autowired
	AuthorRepository authorRepository;

	public static void main(String[] args) {
		SpringApplication.run(BookDetailsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Author author1 = authorRepository.save(new Author("Joanne", "Rowling"));
		Author author2 = authorRepository.save(new Author("Herman", "Melville"));

		bookRepository.save(new Book(
				"Harry Potter and the Philosopher's Stone",
				223,
				author1
		));
		bookRepository.save(new Book(
				"Harry Potter and the Prisoner of Azkaban",
				317,
				author1
		));
		bookRepository.save(new Book("Moby Dick", 635, author2));
	}
}
