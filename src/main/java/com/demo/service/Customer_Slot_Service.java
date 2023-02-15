package com.demo.service;

import com.demo.utils.request.AreaDTO;
import com.demo.utils.request.Customer_Slot_DTO;
import com.demo.utils.response.Customer_Slot_Response_DTO;

import java.util.List;
import java.util.Optional;

public interface Customer_Slot_Service {
    Customer_Slot_Response_DTO save(Customer_Slot_DTO dto);

    Optional<Customer_Slot_Response_DTO> findById(String Id_C_Slot);

    List<Customer_Slot_Response_DTO> findAll();

    Customer_Slot_Response_DTO update(Customer_Slot_DTO dto, String Id_C_Slot);

    String delete (String Id_C_Slot);
}
