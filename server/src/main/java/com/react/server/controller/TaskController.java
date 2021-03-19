package com.react.server.controller;

import java.util.List;
import java.util.Map;

import com.react.server.model.Task;
import com.react.server.respository.TaskRespository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskRespository taskRespository;

    @GetMapping("/")
    public List<Task> getTask() {
        return taskRespository.findAll();
    }

    @PostMapping("/")
    public void putTask(@RequestBody Task payload) {
        System.out.println("what is inside item? " + payload);
        taskRespository.save(payload);
        // taskRespository.save(item);
        // taskRespository.save(item);
    }
}
