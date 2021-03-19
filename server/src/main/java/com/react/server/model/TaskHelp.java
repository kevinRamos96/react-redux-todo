package com.react.server.model;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ConfigurationProperties("steps")
public class TaskHelp {
    Map<String, Help> steps = new HashMap<>();

    public Map<String, Help> getSteps() {
        return steps;
    }

    static class Help {
        @JsonProperty("step")
        String step;
        @JsonProperty("dateBS")
        String dateBS;
        @JsonProperty("copmletedS")
        int completedS;
    }
}
