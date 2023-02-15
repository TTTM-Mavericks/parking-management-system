package com.demo.repository;

import com.demo.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(
        value = "select b.* from Booking b where b.startDate = ?1 and b.endDate = ?2 and b.startTime = ?3 and " +
                "b.endTime = ?4", nativeQuery = true
    )
    List<Booking> findidBooking(Date startDate, Date endDate, String startTime, String endTime);
}
