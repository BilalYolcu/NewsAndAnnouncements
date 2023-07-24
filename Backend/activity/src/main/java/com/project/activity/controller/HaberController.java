package com.project.activity.controller;

import com.project.activity.model.Etkinlik;
import com.project.activity.model.Haber;
import com.project.activity.service.EtkinlikFacadeDesign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/haberler")
public class HaberController {
    private final EtkinlikFacadeDesign etkinlikFacadeDesign;

    @Autowired
    public HaberController(EtkinlikFacadeDesign etkinlikFacadeDesign) {
        this.etkinlikFacadeDesign = etkinlikFacadeDesign;
    }

    @GetMapping
    public List<Haber> getAllHaberler() {
        return etkinlikFacadeDesign.getAllHaberler();
    }

    @GetMapping("/{id}")
    public Haber getHaberById(@PathVariable Long id) {
        return etkinlikFacadeDesign.getHaberById(id);
    }

    @PostMapping
    public void createHaber(@RequestBody Haber haber) {
        etkinlikFacadeDesign.createHaber(haber);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateHaber(@PathVariable Long id, @RequestBody Haber haber) {
        Etkinlik existingHaber = etkinlikFacadeDesign.getHaberById(id);
        if (existingHaber != null) {
            etkinlikFacadeDesign.updateHaber(haber);
            return ResponseEntity.ok("İşlem başarı ile tamamlandı");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteHaber(@PathVariable Long id) {
        etkinlikFacadeDesign.deleteHaber(id);
    }
}
