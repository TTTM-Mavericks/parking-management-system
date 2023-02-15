package com.demo.repository;

import com.demo.entity.Customer_Slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Customer_Slot_Repository extends JpaRepository<Customer_Slot, String> {

}
