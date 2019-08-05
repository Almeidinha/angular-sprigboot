package com.almeida.rest.webservices.restfullwebservices.controllers;

import com.almeida.rest.webservices.restfullwebservices.beans.TodoBean;
import com.almeida.rest.webservices.restfullwebservices.repository.TodoJPArepository;
import com.almeida.rest.webservices.restfullwebservices.services.TodoHardCodedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJPAResourceController {

    private final TodoJPArepository todoJPArepository;

    public TodoJPAResourceController(TodoJPArepository todoJPArepository) {
        this.todoJPArepository = todoJPArepository;
    }

    @GetMapping(path = "/jpa/users/{username}/todos")
    public List<TodoBean> getAllTodos(@PathVariable String username) {
        return todoJPArepository.findByUserName(username);
    }

    @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {

        todoJPArepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(path = "/jpa/users/{username}/todos/{id}")
    public TodoBean getTodo(@PathVariable String username, @PathVariable long id) {
        return todoJPArepository.findById(id).orElse(null);
    }

    @PutMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<TodoBean> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody TodoBean todo) {

        TodoBean updatedTodo = todoJPArepository.save(todo);
        return new ResponseEntity<>(updatedTodo,HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username,
            @RequestBody TodoBean todo) {

        TodoBean createdTodo = todoJPArepository.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }

}
