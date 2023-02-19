package com.demo.repository;

import com.demo.entity.Resident_Slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Resident_Slot_Repository extends JpaRepository<Resident_Slot, String> {
    @Query(
            value = "select * from resident_slot where id_resident = ?1", nativeQuery = true
    )
    List<Resident_Slot> findResidentSlotByIdResident(String idUser);
}
