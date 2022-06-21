package com.reicraftscodes.todoapp.exceptions;

public class InvalidTodoException extends RuntimeException {
    public InvalidTodoException(String message) {
        super(message);
    }
}
