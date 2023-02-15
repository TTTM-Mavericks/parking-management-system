package com.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Area")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Area {
    @Id
    @Column(name = "Id_Area", unique = false)
    private String Id_Area; // R or C

    @Column(name = "Number_Of_Slot")
    private Integer Number_Of_Slot; // 20 slot for each area(customer, resident)

    @Column(name = "type")
    private String type; // name of area (resident area or customer area)

    @ManyToOne(cascade =  CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "Id_Building")
    private Building building;

    public Area(String id_Area, Integer number_Of_Slot, String type, Building building) {
        Id_Area = id_Area;
        Number_Of_Slot = number_Of_Slot;
        this.type = type;
        this.building = building;
    }

    @Override
    public String toString() {
        return "Area{" +
                "Id_Area='" + Id_Area + '\'' +
                ", Number_Of_Slot=" + Number_Of_Slot +
                ", type='" + type + '\'' +
                ", building=" + building +
                '}';
    }

    @OneToMany(mappedBy = "area")
    @JsonIgnore
    private List<Resident_Slot> List_resident_slot;

    @OneToMany(mappedBy = "area")
    @JsonIgnore
    private List<Customer_Slot> List_customer_slot;
}
