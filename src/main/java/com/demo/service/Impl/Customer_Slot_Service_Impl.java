package com.demo.service.Impl;

import com.demo.entity.Area;
import com.demo.entity.Customer_Slot;
import com.demo.repository.AreaRepository;
import com.demo.repository.Customer_Slot_Repository;
import com.demo.service.Customer_Slot_Service;
import com.demo.utils.request.Customer_Slot_DTO;
import com.demo.utils.response.Customer_Slot_Response_DTO;
import com.demo.utils.response.ManagerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.demo.service.Impl.AreaServiceImpl.staticmapperedToArea;
import static com.demo.service.Impl.ManageServiceImpl.mapperedToManager;

@Controller
public class Customer_Slot_Service_Impl implements Customer_Slot_Service {

    @Autowired
    AreaRepository areaRepository;

    @Autowired
    Customer_Slot_Repository customer_slot_repository;

    @Override
    public Customer_Slot_Response_DTO save(Customer_Slot_DTO dto) {
        Customer_Slot customer_slot = new Customer_Slot();
        customer_slot.setId_C_Slot(dto.getId_C_Slot());
        customer_slot.setType_Of_Vehicle(dto.getType_Of_Vehicle());
        customer_slot.setStatus_Slots(dto.isStatus_Slots());
        customer_slot.setArea(areaRepository.findById(dto.getId_Area()).get());
        return mapperedToCustomerSlot(customer_slot_repository.save(customer_slot));
    }

    @Override
    public Optional<Customer_Slot_Response_DTO> findById(String Id_C_Slot) {
        return Optional.of(mapperedToCustomerSlot(customer_slot_repository.findById(Id_C_Slot).get()));
    }

    @Override
    public List<Customer_Slot_Response_DTO> findAll() {
        return customer_slot_repository.findAll().stream().map(cs -> mapperedToCustomerSlot(cs)).collect(Collectors.toList());
    }

    @Override
    public Customer_Slot_Response_DTO update(Customer_Slot_DTO dto, String Id_C_Slot) {
        Customer_Slot customer_slot = customer_slot_repository.findById(Id_C_Slot).get();
        customer_slot.setId_C_Slot(dto.getId_C_Slot());
        customer_slot.setType_Of_Vehicle(dto.getType_Of_Vehicle());
        customer_slot.setStatus_Slots(dto.isStatus_Slots());
        customer_slot.setArea(areaRepository.findById(dto.getId_Area()).get());
        return mapperedToCustomerSlot(customer_slot_repository.save(customer_slot));
    }

    @Override
    public String delete(String Id_C_Slot) {
        customer_slot_repository.deleteById(Id_C_Slot);
        return "deleted successfully";
    }

    private Customer_Slot_Response_DTO mapperedToCustomerSlot(Customer_Slot customer_slot)
    {
        Customer_Slot_Response_DTO dto = new Customer_Slot_Response_DTO();
        dto.setId_C_Slot(customer_slot.getId_C_Slot());
        dto.setStatus_Slots(customer_slot.isStatus_Slots());
        dto.setType_Of_Vehicle(customer_slot.getType_Of_Vehicle());
        Area area = areaRepository.findById(customer_slot.getArea().getId_Area()).get();
        ManagerResponseDTO managerResponseDTO = mapperedToManager(area.getBuilding().getManager());
        dto.setArea(staticmapperedToArea(area, managerResponseDTO));
        return dto;
    }

    public static Customer_Slot_Response_DTO staticmapperedToCustomerSlot(Customer_Slot customer_slot, ManagerResponseDTO manager)
    {
        Customer_Slot_Response_DTO dto = new Customer_Slot_Response_DTO();
        dto.setId_C_Slot(customer_slot.getId_C_Slot());
        dto.setStatus_Slots(customer_slot.isStatus_Slots());
        dto.setType_Of_Vehicle(customer_slot.getType_Of_Vehicle());
        dto.setArea(staticmapperedToArea(customer_slot.getArea(), manager));
        return dto;
    }
}
