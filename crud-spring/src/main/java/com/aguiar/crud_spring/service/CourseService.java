package com.aguiar.crud_spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.aguiar.crud_spring.exception.RecordNotFoundException;
import com.aguiar.crud_spring.model.Course;
import com.aguiar.crud_spring.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CourseService {
  private final CourseRepository courseRepository;

  public CourseService(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  public List<Course> list() {
    return courseRepository.findAll();
  }

  public Course findById(@PathVariable @NotNull @Positive Long id) {
    return courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public Course create(@Valid Course course) {
    return courseRepository.save(course);
  }

  public Course update(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid Course course) {
    return courseRepository.findById(id)
        .map(record -> {
          record.setName(course.getName());
          record.setCategory(course.getCategory());
          Course updated = this.courseRepository.save(record);
          return updated;
        }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@PathVariable @NotNull @Positive Long id) {
    courseRepository.delete(courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id)));
  }

}
