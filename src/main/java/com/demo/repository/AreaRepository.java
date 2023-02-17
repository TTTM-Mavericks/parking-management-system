package com.demo.repository;

import com.demo.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    @Query(value = "select a.* from area a inner join building b on a.id_building = b.id_building " +
            "where a.id_building = ?1", nativeQuery = true)
    List<Area> findIdAreaByIdBuilding(String id_Building);

}
