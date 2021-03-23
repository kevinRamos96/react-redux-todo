package com.react.server.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Help {

    @JsonProperty("step")
    String step;
    @JsonProperty("dateBS")
    String dateBS;
    @JsonProperty("completedS")
    Integer completedS;

}
