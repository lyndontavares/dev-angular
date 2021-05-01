package com.codeusingjava.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codeusingjava.model.Book;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

	private List<Book> books = createList();

	private static List<Book> createList() {
		List<Book> bookList = new ArrayList<>();

		Book book1 = new Book();
		book1.setName("The Godfather");
		book1.setAuthor("Mario Puzo");
		book1.setPrice(10d);

		Book book2 = new Book();
		book2.setName("The Fellowship of the Ring");
		book2.setAuthor("J.R.R. Tolkien");
		book2.setPrice(15d);

		bookList.add(book1);
		bookList.add(book2);

		return bookList;
	}

	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return books;
	}

	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		System.out.println("Added Book - " + book.getName());
		books.add(book);
		return book;
	}

	@PutMapping("/books/{name}")
	public Book updateBook(@PathVariable(value = "name") String name, @RequestBody Book bookDetails) {
		System.out.println("Updated Book - " + name);
		for (Book book : books) {
			if (book.getName().equals(name)) {
				books.remove(books.indexOf(book));
				books.add(bookDetails);
				break;
			}
		}
		return bookDetails;
	}

	@DeleteMapping("/books/{name}")
	public Book deleteBook(@PathVariable(value = "name") String name) {
		System.out.println("Deleted Book - " + name);
		Book deletedBook = null;
		for (Book book : books) {
			if (book.getName().equals(name)) {
				books.remove(book);
				deletedBook = book;
				break;
			}
		}
		return deletedBook;
	}
}
