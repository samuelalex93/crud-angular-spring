package com.aguiar.crud_spring.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.aguiar.crud_spring.dto.CourseDTO;
import com.aguiar.crud_spring.dto.mapper.CourseMapper;
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
  private final CourseMapper courseMapper;

  public CourseService(CourseRepository courseRepository, CourseMapper courseMapper) {
    this.courseRepository = courseRepository;
    this.courseMapper = courseMapper;
  }

  public List<CourseDTO> list() {
    return courseRepository.findAll()
    .stream()
    .map(courseMapper::toDTO)
    .collect(Collectors.toList());
  }

  public CourseDTO findById(@NotNull @Positive Long id) {
    return courseRepository.findById(id).map(courseMapper::toDTO).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public CourseDTO create(@Valid  @NotNull CourseDTO course) {
    return courseMapper.toDTO(courseRepository.save(courseMapper.toEntity(course)));
  }

  public CourseDTO update(@NotNull @Positive Long id, @RequestBody @Valid @NotNull CourseDTO courseDTO) {
    return courseRepository.findById(id)
        .map(record -> {
          Course course = courseMapper.toEntity(courseDTO);
          record.setName(courseDTO.name());
          record.setCategory(courseMapper.convertCategoryValue(courseDTO.category()));
          record.getLessons().clear();
          course.getLessons().forEach(record.getLessons()::add);
          return courseMapper.toDTO(courseRepository.save(record));
        }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@NotNull @Positive Long id) {
    courseRepository.delete(courseRepository.findById(id).orElseThrow(() -> new RecordNotFoundException(id)));
  }

}
