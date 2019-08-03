package com.almeida.rest.webservices.restfullwebservices.controllers;

import com.almeida.rest.webservices.restfullwebservices.beans.TodoBean;
import com.almeida.rest.webservices.restfullwebservices.services.TodoHardCodedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResourceController {

    private final TodoHardCodedService todoHardCodedService;

    public TodoResourceController(TodoHardCodedService todoHardCodedService) {
        this.todoHardCodedService = todoHardCodedService;
    }

    @GetMapping(path = "/users/{username}/todos")
    public List<TodoBean> getAllTodos(@PathVariable String username) {
        return todoHardCodedService.findAll();
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {

        TodoBean todoBean = todoHardCodedService.deleteById(id);
        if (todoBean != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public TodoBean getTodo(@PathVariable String username, @PathVariable long id) {
        return todoHardCodedService.findById(id);
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<TodoBean> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody TodoBean todo) {

        TodoBean updatedTodo = todoHardCodedService.saveTodo(todo);

        return new ResponseEntity<>(updatedTodo,HttpStatus.OK);

    }

    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username,
            @RequestBody TodoBean todo) {

        TodoBean createdTodo = todoHardCodedService.saveTodo(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }

}
