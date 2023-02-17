package com.demo.repository;

import com.demo.entity.Customer_Slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Customer_Slot_Repository extends JpaRepository<Customer_Slot, String> {

    @Query(
            value = "select c.* \n" +
                    "from area a join customer_slot c on c.id_area =  a.id_area \n" +
                    " join building b on a.id_building = b.id_building where b.id_building = ?1",
            nativeQuery = true
    )
    List<Customer_Slot> findAllSlotOfEachBuilding(String id_Building);
}
