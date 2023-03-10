package com.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Booking")
@Data
@NoArgsConstructor
public class Booking {
    @Id
    @Column(name = "Id_Booking")
    private Long Id_Booking;

    @Column(name = "startDate")
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column(name = "endDate")
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column(name = "startTime")
    @Temporal(TemporalType.DATE)
    private String startTime;

    @Column(name = "EndTime")
    @Temporal(TemporalType.DATE)
    private String endTime;

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_Index")
    private Customer_Slot customer_slot;

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_Customer")
    private Customer customer;

    public Booking(Long id_Booking, Date startDate, Date endDate, String startTime, String endTime, Customer_Slot customer_slot, Customer customer) {
        this.Id_Booking = id_Booking;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.customer_slot = customer_slot;
        this.customer = customer;
    }

    @OneToOne(mappedBy = "booking")
    @JsonIgnore
    private Payment_C payment_c;
}