package com.project.activity.service;

import com.project.activity.model.Duyuru;
import com.project.activity.model.Haber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EtkinlikFacadeDesign {

    private final HaberService haberService;
    private final DuyuruService duyuruService;

    @Autowired
    public EtkinlikFacadeDesign(HaberService haberService, DuyuruService duyuruService) {
        this.haberService = haberService;
        this.duyuruService = duyuruService;
    }

    // Haber CRUD
    public List<Haber> getAllHaberler() {
        return haberService.getAllHaberler();
    }

    public Haber getHaberById(Long id) {
        return haberService.getHaberById(id);
    }

    public void createHaber(Haber haber) {
        haberService.createHaber(haber);
    }

    public void updateHaber(Haber haber) {
        haberService.updateHaber(haber);
    }

    public void deleteHaber(Long id) {
        haberService.deleteHaber(id);
    }


    // Duyuru CRUD

    public List<Duyuru> getAllDuyurular() {
        return duyuruService.getAllDuyurular();
    }

    public Duyuru getDuyuruById(Long id) {
        return duyuruService.getDuyuruById(id);
    }

    public void createDuyuru(Duyuru duyuru) {
        duyuruService.createDuyuru(duyuru);
    }

    public void updateDuyuru(Duyuru duyuru) {
        duyuruService.updateDuyuru(duyuru);
    }

    public void deleteDuyuru(Long id) {
        duyuruService.deleteDuyuru(id);
    }

}
