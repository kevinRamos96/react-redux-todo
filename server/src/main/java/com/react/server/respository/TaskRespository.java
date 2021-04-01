package com.react.server.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

import com.react.server.model.Task;

public interface TaskRespository extends MongoRepository<Task, String> {

    List<Task> findByCategory(String category);

    @Query(value = "{ 'category' : {$ne : null}}", fields = "{ 'category' : 1 }")
    List<Task> findCategoryName();
}
