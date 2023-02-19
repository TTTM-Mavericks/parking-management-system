package com.demo.service.Impl;

import com.demo.entity.*;
import com.demo.repository.*;
import com.demo.service.BookingCustomerService;

import com.demo.utils.request.BookingCustomerDTO;
import com.demo.utils.response.BookingCustomerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingCustomerServiceImpl implements BookingCustomerService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    BuildingRepository buildingRepository;

    @Autowired
    ManagerRepository managerRepository;
    @Autowired
    Customer_Slot_Repository customer_slot_repository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    AreaRepository areaRepository;

    public BookingCustomerResponseDTO bookingCustomerResponseDTO;

    @Override
    public BookingCustomerResponseDTO save(BookingCustomerDTO dto) {


        Area area = areaRepository.findIdAreaByIdBuilding(dto.getId_Building(), dto.getId_C_Slot().contains("C") ? "C" : "R");

        Customer_Slot customer_slot = new Customer_Slot(dto.getId_C_Slot(), dto.getType_Of_Vehicle(), true, area);
        customer_slot_repository.save(customer_slot);

        List<Booking> list = bookingRepository.findAll();
        Booking booking1 = new Booking(Long.parseLong(list.size() + 1 + ""),
                dto.getStartDate(), dto.getEndDate(), dto.getStartTime(), dto.getEndTime(),
                customer_slot_repository.findById(dto.getId_C_Slot()).get(), customerRepository.findById(dto.getIdUser()).get());
        bookingRepository.save(booking1);

        bookingCustomerResponseDTO =  new BookingCustomerResponseDTO(booking1.getId_Booking(), dto.getFullname(), dto.getEmail(), dto.getPhone(),
                dto.getId_Building(), dto.getType_Of_Vehicle(), dto.getId_C_Slot(), dto.getStartDate(),
                dto.getEndDate(), dto.getStartTime(), dto.getEndTime(), 26);
        return  bookingCustomerResponseDTO;
    }

    @Override
    public BookingCustomerResponseDTO findBooking() {
        return bookingCustomerResponseDTO;
    }
}
