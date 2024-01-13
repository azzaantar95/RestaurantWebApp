package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "categories")
public class Category extends CategoryOrder {


    @Column(name = "categorylogo")
    private String logo;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Order> orders;
}
