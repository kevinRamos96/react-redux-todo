package com.react.server.controller;

import java.util.List;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
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

    @GetMapping("/getCategories")
    public List<String> getCategories() {
        List<String> result = new ArrayList<String>();
        List<Task> filter = taskRespository.findCategoryName();
        for (Task list : filter) {
            String temp = list.getCategory();
            System.out.println("List item " + temp);
            if (result.isEmpty()) {
                result.add(temp);

            } else if (!result.contains(temp)) {
                result.add(temp);
            } else {
                return result;
            }
        }
        return result;
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

    @PutMapping("/{id}/{formatKey}")
    public void updateSteps(@PathVariable("id") String id, @PathVariable String formatKey, @RequestBody Task payload) {
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        String stringDate = date.format(formatter);
        Optional<Task> newData = taskRespository.findById(id);
        String key = formatKey.replace("_", " ");
        System.out.println("new format key---------" + key);
        if (newData.isPresent() && (!key.equals("null"))) {
            Task result = newData.get();
            result.setTask(result.getTask());
            result.setDateB(result.getDateB());
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
            Help tempHolder;
            for (String name : holder.keySet()) {
                index = index + 1;
                tempHolder = holder.get(name); // tempholder holds the temporary values of holder.get(key)
                completed = completed + tempHolder.getCompletedS();
            }
            float newCompleted = 0;
            if (index != 0) {
                newCompleted = (completed / index);
            }
            result.setCompleted(newCompleted); // now we
            if (newCompleted == 1.0) {
                result.setDateE(stringDate);
            }

            taskRespository.save(result); // save the new obj on the db
        }

        else {
            Task result = newData.get();
            result.setTask(result.getTask());
            result.setDateB(result.getDateB());
            // not setting result.SetCompleted() yet becuase we need to compute the new
            // result
            result.setShow(result.isShow());
            System.out.println("inside else of steps: " + result.getCompleted());
            if ((int) result.getCompleted() == 0) {
                result.setCompleted(1);
                result.setDateE(stringDate);
            } else {
                result.setCompleted(0);
                result.setDateE("TBD");
            }
            taskRespository.save(result); // save the new obj on the db

        }
    }
}
