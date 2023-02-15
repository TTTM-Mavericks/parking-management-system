package com.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Customer_Slot")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer_Slot {
    @Id
    @Column(name = "Id_C_Slot", unique = false)
    private String Id_C_Slot;

    @Column(name = "Type_Of_Vehicle")
    private String Type_Of_Vehicle;

    @Column(name = "Status_Slots")
    private boolean Status_Slots;

    @OneToMany(mappedBy = "customer_slot", cascade =  CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private List<Booking> listBooking;

    public Customer_Slot(String id_C_Slot, String type_Of_Vehicle, boolean status_Slots, Area area) {
        Id_C_Slot = id_C_Slot;
        Type_Of_Vehicle = type_Of_Vehicle;
        Status_Slots = status_Slots;
        this.area = area;
    }

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_Area")
    private Area area;


}