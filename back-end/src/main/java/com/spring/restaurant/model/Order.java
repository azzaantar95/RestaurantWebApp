package com.spring.restaurant.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends CategoryOrder {
    @Column(name = "price")
    private int price;
    @Column(name = "image")
    private String img;

    @Column(name = "description",length = 2000)
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

}
