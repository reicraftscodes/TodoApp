package com.informatics.todoapp.advice;

import com.informatics.todoapp.exceptions.InvalidTodoException;
import com.informatics.todoapp.exceptions.TodoNotFoundException;
import com.informatics.todoapp.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalControllerAdvice {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handTodoNotFoundException(TodoNotFoundException todoNotFoundException) {
        return new ErrorResponse(todoNotFoundException.getMessage(), HttpStatus.NOT_FOUND.name());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handInvalidTodoException(InvalidTodoException invalidTodoException) {
        return new ErrorResponse(invalidTodoException.getMessage(), HttpStatus.BAD_REQUEST.name());
    }
}
