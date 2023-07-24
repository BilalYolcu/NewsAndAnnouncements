package com.project.activity.service;

import com.project.activity.model.Haber;
import com.project.activity.repository.HaberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HaberService {

    private final HaberRepository haberRepository;

    @Autowired
    public HaberService(HaberRepository haberRepository) {
        this.haberRepository = haberRepository;
    }

    public List<Haber> getAllHaberler() {
        return haberRepository.findByEtkinlikTuru("Haber");
    }

    public Haber getHaberById(Long id) {
        return haberRepository.findByIdAndEtkinlikTuru(id, "Haber");
    }

    public void createHaber(Haber haber) {
        haberRepository.save(haber);
    }

    public void updateHaber(Haber haber) {
        Haber existingHaber = haberRepository.findById(haber.getId()).orElse(null);
        if (existingHaber != null) {
            existingHaber.setKonu(haber.getKonu());
            existingHaber.setIcerik(haber.getIcerik());
            existingHaber.setGecerlilikTarihi(haber.getGecerlilikTarihi());
            existingHaber.setHaberLinki(haber.getHaberLinki());
            haberRepository.save(existingHaber);
        } else {
            throw new RuntimeException("Güncellenmek istenen haber bulunamadı.");
        }
    }

    public void deleteHaber(Long id) {
        haberRepository.deleteById(id);
    }
}
