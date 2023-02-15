package com.demo.repository;

import com.demo.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AreaRepository extends JpaRepository<Area, String> {

    @Query(value = "select a.* from area a where a.id_building = ?1", nativeQuery = true)
    List<Area> findAreaByIdBuilding(String idBuilding);
}
