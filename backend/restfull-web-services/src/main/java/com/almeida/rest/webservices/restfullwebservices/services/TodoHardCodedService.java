package com.almeida.rest.webservices.restfullwebservices.services;

import com.almeida.rest.webservices.restfullwebservices.beans.TodoBean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoHardCodedService {

    private static List<TodoBean> todos = new ArrayList<>();
    private static long counter = 0;

    static {
        todos.add(new TodoBean(++counter, "Almeida", "Learn to Code", new Date(), false));
        todos.add(new TodoBean(++counter, "Almeida", "Learn to sky-dive", new Date(), false));
        todos.add(new TodoBean(++counter, "Almeida", "Learn to skate", new Date(), false));
        todos.add(new TodoBean(++counter, "Almeida", "Learn to back-flip", new Date(), false));
        todos.add(new TodoBean(++counter, "Almeida", "Learn to street dance", new Date(), false));
    }

    public List<TodoBean> findAll() {
        return todos;
    }

    public TodoBean deleteById(long id) {
        TodoBean todoBean = findById(id);

        if (todoBean == null) return null;
        if (todos.remove(todoBean)) return todoBean;

        return null;
    }

    public TodoBean findById(long id) {
        return todos.stream().filter(
                todo -> id == todo.getId()
        ).findAny().orElse(null);
    }

    public TodoBean saveTodo(TodoBean todo) {
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++counter);
            todos.add(todo);
        } else {
            /*todos.forEach(t -> {
                if (t.getId() == todo.getId()) {
                    t.setDescription(todo.getDescription());
                    t.setTargetDate(todo.getTargetDate());
                    t.setDone(todo.isDone());
                }
            });*/

            todos = todos.stream().map(
                    t -> t.getId() == todo.getId() ? todo : t
            ).collect(Collectors.toList());
        }



        return todo;
    }


}
