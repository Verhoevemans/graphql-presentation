package com.graphqljava.tutorial.bookdetails;

import com.graphqljava.tutorial.bookdetails.domain.Author;
import com.graphqljava.tutorial.bookdetails.domain.Book;
import com.graphqljava.tutorial.bookdetails.repositories.AuthorRepository;
import com.graphqljava.tutorial.bookdetails.repositories.BookRepository;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class GraphQLDataFetchers {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    AuthorRepository authorRepository;

    public DataFetcher getBooksDataFetcher() {
        return dataFetchingEnvironment -> {
            Integer count = dataFetchingEnvironment.getArgument("count");

            if (count != null) {
                return bookRepository.findAll().stream().limit(count).collect(Collectors.toList());
            } else {
                return bookRepository.findAll();
            }
        };
    }

    public DataFetcher getBookByNameDataFetcher() {
        return dataFetchingEnvironment -> {
            String name = dataFetchingEnvironment.getArgument("name");
            return bookRepository.findAllByNameStartsWith(name)
                    .stream()
                    .findFirst()
                    .orElse(null);
        };
    }

    public DataFetcher getAuthorDataFetcher() {
        return dataFetchingEnvironment -> {
            Book book = dataFetchingEnvironment.getSource();
            String authorName = book.getAuthor().getLastName();
            return authorRepository.findAllByLastName(authorName)
                    .stream()
                    .findFirst()
                    .orElse(null);
        };
    }

    public DataFetcher getAuthorsDataFetcher() {
        return dataFetchingEnvironment -> {
            return authorRepository.findAll();
        };
    }

    public DataFetcher getPageCountDataFetcher() {
        return dataFetchingEnvironment -> {
            Book book = dataFetchingEnvironment.getSource();
            return book.getTotalPages();
        };
    }

    public DataFetcher createNewAuthorDataFetcher() {
        return dataFetchingEnvironment -> {
            String authorFirstName = dataFetchingEnvironment.getArgument("firstName");
            String authorLastName = dataFetchingEnvironment.getArgument("lastName");
            Author author = new Author(authorFirstName, authorLastName);
            authorRepository.save(author);
            return author;
        };
    }
}
