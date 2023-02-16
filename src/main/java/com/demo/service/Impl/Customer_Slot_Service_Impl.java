package com.demo.service.Impl;

import com.demo.entity.Customer_Slot;
import com.demo.repository.AreaRepository;
import com.demo.repository.BuildingRepository;
import com.demo.repository.Customer_Slot_Repository;
import com.demo.service.Customer_Slot_Service;
import com.demo.utils.request.Customer_Slot_DTO;
import com.demo.utils.response.Customer_Slot_Response_DTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Customer_Slot_Service_Impl implements Customer_Slot_Service {

    @Autowired
    Customer_Slot_Repository customer_slot_repository;

    @Override
    public List<Customer_Slot_Response_DTO> findAllSlotOfEachBuilding(String id_Building) {
        List<Customer_Slot_Response_DTO> list = new ArrayList<>();
        List<Customer_Slot> slotList = customer_slot_repository.findAllSlotOfEachBuilding(id_Building);

        for(int i = 0; i < slotList.size(); i++)
        {
            list.add(new Customer_Slot_Response_DTO(id_Building, slotList.get(i).getId_C_Slot(), slotList.get(i).isStatus_Slots()));
        }
        return list;
    }
}
