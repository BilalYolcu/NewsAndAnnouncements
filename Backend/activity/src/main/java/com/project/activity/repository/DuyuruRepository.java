package com.project.activity.repository;

import com.project.activity.model.Duyuru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DuyuruRepository extends JpaRepository<Duyuru, Long> {
    List<Duyuru> findByEtkinlikTuru(String etkinlikTuru);
    Duyuru findByIdAndEtkinlikTuru(Long id, String etkinlikTuru);
}
