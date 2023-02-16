package com.demo.utils.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PresentTheAvailableSlotResponse {
    private String id_building;

    private String Type_of_area; // R or C

    private String area_name; // name of area (resident area or customer area)

    private boolean status_slots;

    private String id_c_slot;
}
