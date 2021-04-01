package com.react.server.model;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ConfigurationProperties("tasks")
public class TaskDefinition extends TaskHelp {

    Map<String, TaskDefinitionHelper> tasks = new HashMap<>();

    public Map<String, TaskDefinitionHelper> getTask() {
        return tasks;
    }

    static class TaskDefinitionHelper {
        @JsonProperty("task")
        String task;
        @JsonProperty("dateB")
        String dateB;
        @JsonProperty("dateE")
        String dateE;
        @JsonProperty("completed")
        float completed;
        @JsonProperty("show")
        boolean show;
    }
}
