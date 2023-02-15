package com.demo.utils.response;

import lombok.Data;

@Data
public class Customer_Slot_Response_DTO {
    private String Id_C_Slot;

    private String Type_Of_Vehicle;

    private boolean Status_Slots;

    private AreaResponseDTO area;
}
