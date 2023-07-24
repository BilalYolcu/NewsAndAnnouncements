package com.project.activity.repository;

import com.project.activity.model.Haber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HaberRepository extends JpaRepository<Haber, Long> {
    List<Haber> findByEtkinlikTuru(String etkinlikTuru);
    Haber findByIdAndEtkinlikTuru(Long id, String etkinlikTuru);
}
