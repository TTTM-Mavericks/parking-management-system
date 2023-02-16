package com.demo.service;

import com.demo.utils.request.AreaDTO;
import com.demo.utils.request.Customer_Slot_DTO;
import com.demo.utils.response.Customer_Slot_Response_DTO;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface Customer_Slot_Service {
    List<Customer_Slot_Response_DTO> findAllSlotOfEachBuilding(String id_Building);

}
