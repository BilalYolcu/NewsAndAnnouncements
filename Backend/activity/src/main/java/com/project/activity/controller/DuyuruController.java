package com.project.activity.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.activity.model.Duyuru;
import com.project.activity.model.Etkinlik;
import com.project.activity.service.EtkinlikFacadeDesign;
import com.project.activity.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/duyurular")
public class DuyuruController {

    @Value("${upload-dir}")
    private String uploadDir;
    private final EtkinlikFacadeDesign etkinlikFacadeDesign;

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    public DuyuruController(EtkinlikFacadeDesign etkinlikFacadeDesign) {
        this.etkinlikFacadeDesign = etkinlikFacadeDesign;
    }

    @GetMapping
    public List<Duyuru> getAllDuyurular() {
        return etkinlikFacadeDesign.getAllDuyurular();
    }

    @GetMapping("/{id}")
    public Duyuru getDuyuruById(@PathVariable Long id) {
        return etkinlikFacadeDesign.getDuyuruById(id);
    }

    @PostMapping
    public void createDuyuru(MultipartHttpServletRequest request) throws IOException {
        MultipartFile file = request.getFile("file");
        Duyuru duyuru = new ObjectMapper().readValue(request.getParameter("duyuru"), Duyuru.class);
        Path fileName = fileStorageService.storeFile(file);
        duyuru.setResim(String.valueOf(fileName));
        etkinlikFacadeDesign.createDuyuru(duyuru);
    }

    @PutMapping("/{id}")
    public void updateDuyuru(@PathVariable Long id, MultipartHttpServletRequest request) throws IOException {
        MultipartFile file = request.getFile("file");
        Duyuru duyuru = new ObjectMapper().readValue(request.getParameter("duyuru"), Duyuru.class);
        Path fileName = fileStorageService.storeFile(file);
        Etkinlik existingDuyuru = etkinlikFacadeDesign.getDuyuruById(id);

        if (existingDuyuru != null) {
            duyuru.setResim(String.valueOf(fileName));
            etkinlikFacadeDesign.updateDuyuru(duyuru);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteDuyuru(@PathVariable Long id) {
        etkinlikFacadeDesign.deleteDuyuru(id);
    }

    @GetMapping("/resim/{dosyaAdi}")
    public ResponseEntity<String> getResim(@PathVariable String dosyaAdi) throws IOException {
        Path path = Paths.get(uploadDir).resolve(dosyaAdi);
        Resource resource = new UrlResource(path.toUri());
        if (resource.exists() && resource.isReadable()) {
            byte[] fileBytes = Files.readAllBytes(path);
            String base64 = Base64.getEncoder().encodeToString(fileBytes);
            return ResponseEntity.ok(base64);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
