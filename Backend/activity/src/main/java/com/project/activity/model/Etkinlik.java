package com.project.activity.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "etkinlik_turu", discriminatorType = DiscriminatorType.STRING)
public abstract class Etkinlik {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String konu;
    private String icerik;
    private Date gecerlilikTarihi;

    @Column(name = "etkinlik_turu", insertable = false, updatable = false)
    private String etkinlikTuru;
}
