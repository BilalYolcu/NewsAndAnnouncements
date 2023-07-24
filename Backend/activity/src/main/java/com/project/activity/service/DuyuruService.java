package com.project.activity.service;

import com.project.activity.model.Duyuru;
import com.project.activity.repository.DuyuruRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DuyuruService {
    private final DuyuruRepository duyuruRepository;

    @Autowired
    public DuyuruService(DuyuruRepository duyuruRepository) {
        this.duyuruRepository = duyuruRepository;
    }

    public List<Duyuru> getAllDuyurular() {
        return duyuruRepository.findByEtkinlikTuru("Duyuru");
    }

    public Duyuru getDuyuruById(Long id) {
        return  duyuruRepository.findByIdAndEtkinlikTuru(id,"Duyuru");
    }

    public void createDuyuru(Duyuru duyuru) {
        duyuruRepository.save(duyuru);
    }

    public void updateDuyuru(Duyuru duyuru) {
        Duyuru existingDuyuru = duyuruRepository.findById(duyuru.getId()).orElse(null);
        if (existingDuyuru != null) {
            existingDuyuru.setKonu(duyuru.getKonu());
            existingDuyuru.setIcerik(duyuru.getIcerik());
            existingDuyuru.setGecerlilikTarihi(duyuru.getGecerlilikTarihi());
            existingDuyuru.setResim(duyuru.getResim());
            duyuruRepository.save(existingDuyuru);
        } else {
            throw new RuntimeException("Güncellenmek istenen duyuru bulunamadı.");
        }
    }

    public void deleteDuyuru(Long id) {
        duyuruRepository.deleteById(id);
    }
}
