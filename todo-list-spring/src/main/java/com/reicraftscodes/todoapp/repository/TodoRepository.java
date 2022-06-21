package com.reicraftscodes.todoapp.repository;


import com.reicraftscodes.todoapp.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findByDone(boolean done);
}
