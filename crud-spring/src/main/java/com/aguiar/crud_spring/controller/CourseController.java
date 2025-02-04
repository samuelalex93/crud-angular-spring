package com.aguiar.crud_spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aguiar.crud_spring.model.Course;
import com.aguiar.crud_spring.repository.CourseRepository;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

  private final CourseRepository courseRepository;

  public CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }
  
  @GetMapping
  public List<Course> list() {
    return this.courseRepository.findAll();
  }
}
