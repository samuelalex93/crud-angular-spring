package com.aguiar.crud_spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/hello")
public class HelloController {

  @GetMapping
  public String hello() {
    return "Hello World!";
  }
}
