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

    @Override
    public BookingCustomerResponseDTO save(BookingCustomerDTO dto) {
        // update info of the customer
        //using userRepository
        User user = userRepository.findById(dto.getIdUser()).get();
        user.setFullname(dto.getFullname());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        userRepository.save(user);

        //when the building is choose it will take 1 manager to keep trace of them
        boolean checkBuilding =  false;
        Building building = null;
        List<Manager> list_manager = managerRepository.findAll();
        List<Building> List_building = buildingRepository.findAll();
        // if these is no building then the first_manager will manage that building
        if(List_building.size() == 0)
        {
           building =  new Building(dto.getId_Building(), 2, 1000, list_manager.get(0));
        }
        else // if the building is existed
        {
            boolean ok = false;
            for(int i = 0; i < List_building.size(); i++)
            {
                // check if the building is existed in DB is equals with the building from the API
                // If existed the building then maintain the manager who keep track of that building
                if(List_building.get(i).getId_Building().equals(dto.getId_Building()))
                {
                    ok = true;
                    checkBuilding = true;
                    building = new Building(dto.getId_Building(), 2, 1000, List_building.get(i).getManager());
                }
            }
            // These is no building from API existed in DB
            if(ok == false) building = new Building(dto.getId_Building(), 2, 1000, list_manager.get(List_building.size() + 1));
        }
        // no need to save the building which is existed in DB
        if(checkBuilding == false) buildingRepository.save(building);
        System.out.println(building);

        //find list of building id existed in the area
        List<Area> areaList = areaRepository.findAreaByIdBuilding(dto.getId_Building());
        for(Area area : areaList)
        {
            System.out.println(area);
        }
        Area area = null;
        boolean checkArea = false;
        for(int i = 0; i < areaList.size(); i++)
        {
            //Check the id_Area is the same with the first letter of the id slot
            if(areaList.get(i).getId_Area().equals(dto.getId_C_Slot().contains("R") ? "R" : "C"))
            {
                area = new Area(dto.getId_C_Slot().contains("R") ? "R" : "C", 20,
                        dto.getId_C_Slot().contains("R") ? "resident area" : "customer area", building);
                checkArea = true;
            }
        }
        if(checkArea == false)
        {
            area = new Area(dto.getId_C_Slot().contains("R") ? "R" : "C", 20,
                    dto.getId_C_Slot().contains("R") ? "resident area" : "customer area", building);
            areaRepository.save(area);
        }

       // System.out.println(area);
        List<Customer_Slot> customer_slotList = customer_slot_repository.findAll();
        Customer_Slot customer_slot = new Customer_Slot(dto.getId_C_Slot(), dto.getType_Of_Vehicle(), true, area);
        customer_slot_repository.save(customer_slot);

        Booking booking1 = new Booking(dto.getStartDate(), dto.getEndDate(), dto.getStartTime(), dto.getEndTime(),
                customer_slot_repository.findById(dto.getId_C_Slot()).get(), customerRepository.findById(dto.getIdUser()).get());
//        System.out.println(booking1);
        bookingRepository.save(booking1);

//        List<Booking> list_Booking = bookingRepository.findidBooking(dto.getStartDate(), dto.getEndDate(), dto.getStartTime(), dto.getEndTime());
//        String id_Booking = "";
//        for(Booking book : list_Booking)
//        {
//            if(book.getCustomer_slot().equals(customer_slot_repository.findById(dto.getId_C_Slot()).get()) &&
//               book.getCustomer().equals(customerRepository.findById(dto.getIdUser()).get()))
//            {
//                id_Booking = book.getId_Booking() + "";
//                break;
//            }
//        }

        return new BookingCustomerResponseDTO("1", dto.getFullname(), dto.getEmail(), dto.getPhone(),
                dto.getId_Building(), dto.getType_Of_Vehicle(), dto.getId_C_Slot(), dto.getStartDate(),
                dto.getEndDate(), dto.getStartTime(), dto.getEndTime(), 26);
    }
}
