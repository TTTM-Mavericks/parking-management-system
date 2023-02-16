package com.demo.service.Impl;

import com.demo.entity.Area;
import com.demo.entity.Customer_Slot;
import com.demo.repository.AreaRepository;
import com.demo.repository.BuildingRepository;
import com.demo.repository.Customer_Slot_Repository;
import com.demo.service.PresentTheAvailableSlotService;
import com.demo.utils.response.PresentTheAvailableSlotResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PresentTheAvailableSlotImpl implements PresentTheAvailableSlotService {

    @Autowired
    BuildingRepository buildingRepository;

    @Autowired
    AreaRepository areaRepository;

    @Autowired
    Customer_Slot_Repository customer_slot_repository;

    @Override
    public List<PresentTheAvailableSlotResponse> present_slot (String id_Building) {
        List<Area> area = areaRepository.findIdAreaByIdBuilding(id_Building);
        List<PresentTheAvailableSlotResponse> list = new ArrayList<>();
        List<Customer_Slot> customer_slotList = customer_slot_repository.findAll();
        for(int t = 0; t < area.size(); t++)
        {
            Area area_i = area.get(t);
            for (int i = 0; i < customer_slotList.size(); i++)
            {
                Customer_Slot customer_slot = customer_slotList.get(i);
                if(customer_slot.getArea().getId_Area() == area_i.getId_Area() && customer_slot.isStatus_Slots() == true)
                {
                    list.add(new PresentTheAvailableSlotResponse(
                            id_Building,
                            area_i.getType_of_area(),
                            area_i.getArea_name(),
                            customer_slot.isStatus_Slots(),
                            customer_slot.getId_C_Slot()
                    ));
                }
            }
        }
        return list;
    }
}
