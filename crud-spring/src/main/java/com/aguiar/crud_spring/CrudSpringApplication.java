package com.aguiar.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.aguiar.crud_spring.enums.Category;
import com.aguiar.crud_spring.model.Course;
import com.aguiar.crud_spring.model.Lesson;
import com.aguiar.crud_spring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();
			Course c = new Course();
			c.setName("Spring Boot");
			c.setCategory(Category.BACK_END);
			Lesson l = new Lesson();
			l.setName("Intro");
			l.setYoutubeUrl("m/5465sdfsf");
			l.setCourse(c);
			c.getLessons().add(l);
			courseRepository.save(c);
		};
	}

}
