package com.demo.utils.response;

import lombok.Data;

@Data
public class AreaResponseDTO {
    private String Id_Area; // R or C

    private Integer Number_Of_Slot; // 20 slot for each area(customer, resident)

    private String type; // name of area (resident area or customer area)

    private BuildingResponseDTO building;
}
