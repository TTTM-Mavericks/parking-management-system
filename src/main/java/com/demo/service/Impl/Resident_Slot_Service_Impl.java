package com.demo.service.Impl;

import com.demo.entity.Area;
import com.demo.entity.Customer_Slot;
import com.demo.entity.Resident;
import com.demo.entity.Resident_Slot;
import com.demo.repository.AreaRepository;
import com.demo.repository.BuildingRepository;
import com.demo.repository.ResidentRepository;
import com.demo.repository.Resident_Slot_Repository;
import com.demo.service.Resident_Slot_Service;
import com.demo.utils.request.Resident_Slot_DTO;
import com.demo.utils.response.Resident_Slot_Response_DTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class Resident_Slot_Service_Impl implements Resident_Slot_Service {
    @Autowired
    AreaRepository areaRepository;

    @Autowired
    Resident_Slot_Repository resident_slot_repository;

    @Autowired
    BuildingRepository buildingRepository;

    @Autowired
    ResidentRepository residentRepository;

    public Resident_Slot_Response_DTO resident_slot_response_dto;

    @Override
    public Resident_Slot_Response_DTO save(Resident_Slot_DTO dto) {
        Resident resident = residentRepository.findById(dto.getIdUser()).get();

        Area area = areaRepository.findIdAreaByIdBuilding(dto.getId_Building(), dto.getId_R_Slot().contains("R") ? "R" : "C");

        Resident_Slot resident_slot = new Resident_Slot(dto.getId_R_Slot(), dto.getType_Of_Vehicle(), true, resident, area);

        resident_slot_repository.save(resident_slot);

        resident_slot_response_dto = new Resident_Slot_Response_DTO(dto.getIdUser(), dto.getFullname(), dto.getEmail(), dto.getPhone(),
                    dto.getId_Building(), dto.getType_Of_Vehicle(), dto.getId_R_Slot());

        return resident_slot_response_dto;
    }

    @Override
    public Resident_Slot_Response_DTO find_Resident_Slot() {
        return resident_slot_response_dto;
    }
}
