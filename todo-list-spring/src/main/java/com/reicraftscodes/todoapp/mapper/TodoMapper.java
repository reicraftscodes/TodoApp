package com.reicraftscodes.todoapp.mapper;

import com.reicraftscodes.todoapp.dto.TodoRequest;
import com.reicraftscodes.todoapp.dto.TodoResponse;
import com.reicraftscodes.todoapp.models.Todo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TodoMapper {
    public List<TodoResponse> toResponseList(List<Todo> todoList) {
        return todoList.stream()
                .map(todo -> new TodoResponse(todo.getId(), todo.getText(), todo.getDone()))
                .collect(Collectors.toList());
    }

    public Todo toEntity(TodoRequest todoRequest) {
        Todo todo = new Todo();
        BeanUtils.copyProperties(todoRequest, todo);
        return todo;
    }

    public TodoResponse toResponse(Todo todo) {
        TodoResponse todoResponse = new TodoResponse();
        BeanUtils.copyProperties(todo, todoResponse);
        return todoResponse;
    }
}
