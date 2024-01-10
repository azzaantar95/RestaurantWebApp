package com.spring.restaurant.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class CategoryOrder extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "dataCreate")
    @CreationTimestamp
    private Date dataCreate;

    @Column(name = "dataUpdate")
    @UpdateTimestamp
    private Date dataUpdate;
}
