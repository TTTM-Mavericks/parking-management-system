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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_Booking")
    private Long Id_Booking;

    @Column(name = "startDate")
    private Date startDate;

    @Column(name = "endDate")
    private Date endDate;

    @Column(name = "startTime")
    private String startTime;

    @Column(name = "EndTime")
    private String endTime;

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_C_Slot")
    private Customer_Slot customer_slot;

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_Customer")
    private Customer customer;

    public Booking(Date startDate, Date endDate, String startTime, String endTime, Customer_Slot customer_slot, Customer customer) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.customer_slot = customer_slot;
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "Id_Booking=" + Id_Booking +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", customer_slot=" + customer_slot.getId_C_Slot() +
                ", customer=" + customer.getIdUser() +
                '}';
    }

    @OneToOne(mappedBy = "booking")
    @JsonIgnore
    private Payment_C payment_c;
}