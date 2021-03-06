package com.react.server.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.react.server.model.Help;
import com.react.server.model.Task;
import com.react.server.respository.TaskRespository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PutMapping("/{id}")
    public void updateShow(@PathVariable("id") String id, @RequestBody Task payload) {
        Optional<Task> newData = taskRespository.findById(id);
        if (newData.isPresent()) {
            Task result = newData.get();
            result.setTask(result.getTask());
            result.setDateB(result.getDateB());
            result.setDateE(result.getDateE());
            result.setCompleted(result.getCompleted());
            result.setShow(!result.isShow());
            taskRespository.save(result);
            /*
             * String task; String dateB; String dateE; Integer completed; boolean show;
             */
        }

    }

    @PutMapping("/{id}/{key}")
    public void updateSteps(@PathVariable("id") String id, @PathVariable String key, @RequestBody Task payload) {
        Optional<Task> newData = taskRespository.findById(id);
        if (newData.isPresent()) {
            Task result = newData.get();
            result.setTask(result.getTask());
            result.setDateB(result.getDateB());
            result.setDateE(result.getDateE());
            // not setting result.SetCompleted() yet becuase we need to compute the new
            // result
            result.setShow(result.isShow());
            Map<String, Help> holder = result.getSteps(); // find step among steps map
            Help newValue = holder.get(key);
            int temp = (newValue.getCompletedS() == 0) ? 1 : 0; // set the value for steps:{completedS:to 1 or 0}
            newValue.setCompletedS(temp);
            holder.replace(key, newValue); // replace the step that is being change on the map with the newValue var
            result.setSteps(holder); // save the new steps(holder) on the result
            float index = 0;
            float completed = 0;
            for (String name : holder.keySet()) {
                index = index + 1;
                Help tempHolder = holder.get(name); // tempholder holds the temporary values of holder.get(key)
                completed = completed + tempHolder.getCompletedS();
            }
            float newCompleted = 0;
            if (index != 0) {
                newCompleted = (completed / index);
            }
            result.setCompleted(newCompleted); // now we
            taskRespository.save(result); // save the new obj on the db
        }
    }
}
