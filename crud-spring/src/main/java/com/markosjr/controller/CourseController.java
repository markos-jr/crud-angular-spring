package com.markosjr.controller;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.markosjr.model.Course;
import com.markosjr.repository.CourseRepository;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;
    

    
    //@AllArgsConstructor  <-- Como opção também podemos usar essa notação do loombok
    public CourseController(CourseRepository courseRepository) {   
        this.courseRepository = courseRepository;
    }



    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Course> list(){
        return courseRepository.findAll();
    }
    @Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository){
        return args -> {
            courseRepository.deleteAll();

            Course c = new Course();
            c.setName("Angular com Spring");
            c.setCategory("front-end");

            courseRepository.save(c);
        };
    }
}
