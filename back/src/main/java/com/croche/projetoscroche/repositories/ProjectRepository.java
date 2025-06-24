package com.croche.projetoscroche.repositories;

import com.croche.projetoscroche.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
