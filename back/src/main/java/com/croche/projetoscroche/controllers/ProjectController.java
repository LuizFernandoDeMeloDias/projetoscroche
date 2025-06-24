package com.croche.projetoscroche.controllers;


import com.croche.projetoscroche.dtos.ProjectDTO;
import com.croche.projetoscroche.models.Project;
import com.croche.projetoscroche.repositories.ProjectRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    ProjectRepository repository;

    @GetMapping
    public ResponseEntity getAll(){

        List<Project> projectList = repository.findAll();

        return ResponseEntity.status(HttpStatus.OK).body(projectList);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id){

        Optional project = repository.findById(id);

        if(project.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível achar um projeto com esse ID.");
        }else{
            return ResponseEntity.status(HttpStatus.FOUND).body(project.get());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") Integer id){
        Optional<Project> project = repository.findById(id);

        if(project.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível achar o projeto para excluir!");
        }

        repository.delete(project.get());

        return ResponseEntity.status(HttpStatus.OK).body("O projeto foi excluído com sucesso!");

    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable(value = "id") Integer id , @RequestBody ProjectDTO dto){
        Optional<Project> project = repository.findById(id);
        if(project.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não foi possível achar o projeto para alteração");
        }
        var projectModel = project.get();

        BeanUtils.copyProperties(dto, projectModel);

        return ResponseEntity.status(HttpStatus.OK).body(repository.save(projectModel));
    }


    @PostMapping
    public ResponseEntity save(@RequestBody ProjectDTO dto){

        var project = new Project();

        BeanUtils.copyProperties(dto, project);

        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(project));

    }

}
