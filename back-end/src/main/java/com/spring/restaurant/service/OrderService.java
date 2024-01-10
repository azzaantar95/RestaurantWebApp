package com.spring.restaurant.service;

import com.spring.restaurant.dao.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private OrderRepo orderRepo;
    @Autowired

    public OrderService(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }
}
