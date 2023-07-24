package com.project.activity.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("Haber")
public class Haber extends Etkinlik{
    private String haberLinki;
}
