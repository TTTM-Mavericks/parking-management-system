package com.demo.service.Impl;

import com.demo.entity.Booking;
import com.demo.entity.Customer_Slot;
import com.demo.repository.BookingRepository;
import com.demo.repository.BuildingRepository;
import com.demo.repository.CustomerRepository;
import com.demo.repository.Customer_Slot_Repository;
import com.demo.service.BookingService;
import com.demo.utils.request.BookingDTO;
import com.demo.utils.response.BookingRepsonseDTO;
import com.demo.utils.response.ManagerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.demo.service.Impl.CustomerServiceImpl.mapperedToCustomer;
import static com.demo.service.Impl.Customer_Slot_Service_Impl.staticmapperedToCustomerSlot;
import static com.demo.service.Impl.ManageServiceImpl.mapperedToManager;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    Customer_Slot_Repository customer_slot_repository;

    @Autowired
    BookingRepository bookingRepository;

    @Override
    public BookingRepsonseDTO save(BookingDTO dto) throws Exception {
        Booking booking = new Booking();
        booking.setStartDate(dto.getStartDate());
        booking.setEndDate(dto.getEndDate());
        booking.setStartTime(dto.getStartTime());
        booking.setEndTime(dto.getEndTime());
        booking.setCustomer(customerRepository.findById(dto.getId_Customer()).get());
        booking.setCustomer_slot(customer_slot_repository.findById(dto.getId_C_Slot()).get());
        return mapperedToBooking(bookingRepository.save(booking));
    }

    @Override
    public Optional<BookingRepsonseDTO> findById(Long Id_Booking) {
        return Optional.of(mapperedToBooking(bookingRepository.findById(Id_Booking).get()));
    }

    @Override
    public List<BookingRepsonseDTO> findAll() {
        return bookingRepository.findAll().stream().map(b -> mapperedToBooking(b)).collect(Collectors.toList());
    }

    @Override
    public BookingRepsonseDTO update(BookingDTO dto, Long Id_Booking) throws Exception {
        Booking booking = bookingRepository.findById(Id_Booking).get();
//        Date startDate = new SimpleDateFormat("yyyy-MM-dd").parse(dto.getStartDate().toString());
        booking.setStartDate(dto.getStartDate());
//        Date endDate = new SimpleDateFormat("yyyy-MM-dd").parse(dto.getEndDate().toString());
        booking.setEndDate(dto.getEndDate());
        booking.setStartTime(dto.getStartTime());
        booking.setEndTime(dto.getEndTime());
        booking.setCustomer(customerRepository.findById(dto.getId_Customer()).get());
        booking.setCustomer_slot(customer_slot_repository.findById(dto.getId_C_Slot()).get());
        return mapperedToBooking(bookingRepository.save(booking));
    }

    @Override
    public String delete(Long Id_Booking) {
        bookingRepository.deleteById(Id_Booking);
        return "delete successfully";
    }


    private BookingRepsonseDTO mapperedToBooking(Booking booking)
    {
        BookingRepsonseDTO dto = new BookingRepsonseDTO();
        dto.setStartDate(booking.getStartDate());
        dto.setEndDate(booking.getEndDate());
        dto.setStartTime(booking.getStartTime());
        dto.setEndTime(booking.getEndTime());
        dto.setId_Customer(mapperedToCustomer(customerRepository.findById(booking.getCustomer().getIdUser()).get()));
        Customer_Slot customer_slot = customer_slot_repository.findById(booking.getCustomer_slot().getId_C_Slot()).get();
        ManagerResponseDTO  managerResponseDTO = mapperedToManager(customer_slot.getArea().getBuilding().getManager());
        dto.setId_C_Slot(staticmapperedToCustomerSlot(customer_slot, managerResponseDTO));
        return dto;
    }
}
