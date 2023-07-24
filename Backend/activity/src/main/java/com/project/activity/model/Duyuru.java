package com.project.activity.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("Duyuru")
public class Duyuru extends Etkinlik{
    private String resim;
}
