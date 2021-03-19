package com.react.server.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.react.server.model.Task;

public interface TaskRespository extends MongoRepository<Task, String> {

}
