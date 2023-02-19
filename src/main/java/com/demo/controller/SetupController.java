package com.demo.controller;

import com.demo.service.*;
import com.demo.utils.request.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/setup")
public class SetupController {

    @Autowired
    UserService userService;

    private String generatePhone() {
        String phoneNumber = "";
        Random r = new Random();
        for (int i = 0; i <= 9; i++) {
            phoneNumber += String.valueOf(r.nextInt(9));
        }

        return phoneNumber;
    }

    private String generateDateOfBirth() {
        String date = "";
        date += (int) ((Math.random() * (2023 - 1970)) + 1970);
        int s = (int) ((Math.random() * (13 - 1)) + 1);
        if (s < 10) {
            date += "-0" + s;
        }
        else date += "-" + s;
        s = (int) ((Math.random() * (32 - 1)) + 1);
        if (s < 10) {
            date += "-0" + s;
        }
        else date += "-"+s;
        return date;
    }

    @GetMapping("/createUSER")
    public void createUser() throws Exception {
        Random random = new Random();
        for (int i = 1; i <= 40; i++) {
            String json = "{" +
                    "    \"id\" : \"user" + i + "\"," +
                    "    \"phone\": \"0" + generatePhone() + "\"," +
                    "    \"password\": \"Aa@123456\"," +
                    "    \"email\": \"user" + i + "@gmail.com\"," +
                    "    \"fullname\": \"user" + i + "\"," +
                    "    \"dateofbirth\": \"" + generateDateOfBirth() + "\"," +
                    "    \"gender\":" + random.nextBoolean() + "" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            UserDTO dto = mapper.readValue(json, UserDTO.class);
            System.out.println(dto);
            userService.save(dto);
        }
    }

    @Autowired
    ManageService manageService;

    @GetMapping("/createMANAGER")
    public void createManager() throws Exception {
        String json = "{\n" +
                "    \"role\": 1,\n" +
                "    \"idUser\": \"user1\"\n" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        ManagerDTO dto = mapper.readValue(json, ManagerDTO.class);
//            System.out.println(dto);
        manageService.save(dto);

        for (int i = 2; i <= 4; i++) {
            json = "{" +
                    "    \"role\": 2," +
                    "    \"idUser\": \"user" + i + "\"\n" +
                    "}";
            dto = mapper.readValue(json, ManagerDTO.class);
            manageService.save(dto);
        }
        for (int i = 5; i <= 7; i++) {
            json = "{" +
                    "    \"role\": 3," +
                    "    \"idUser\": \"user" + i + "\"\n" +
                    "}";
            dto = mapper.readValue(json, ManagerDTO.class);
            manageService.save(dto);
        }
    }

    @Autowired
    CustomerService customerService;

    @GetMapping("/createCUSTOMER")
    public void createCustomer() throws JsonProcessingException {
        for (int i = 10; i <= 25; i++) {
            String json = "{" +
                    "    \"status_Account\":" + Math.round(Math.random()) + "," +
                    "    \"idUser\": \"user" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            CustomerDTO dto = mapper.readValue(json, CustomerDTO.class);
            System.out.println(dto);
            customerService.save(dto);
        }
    }

    @Autowired
    ResidentService residentService;

    @GetMapping("/createRESIDENT")
    public void createResident() throws JsonProcessingException {

        for (int i = 26; i <= 40; i++) {
            String json = "{" +
                    "    \"status_Account\":" + Math.round(Math.random()) + "," +
                    "    \"idUser\": \"user" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            ResidentDTO dto = mapper.readValue(json, ResidentDTO.class);
            System.out.println(dto);
            residentService.save(dto);
        }
    }


    @Autowired
    BuildingService buildingService;
    @GetMapping("/createBUILDING")
    public void createBuilding() throws JsonProcessingException {
        String json = "{\n" +
                "    \"income\": 900," +
                "    \"number_Of_Area\": 2," +
                "    \"id_Building\": \"A\"" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        BuildingDTO dto = mapper.readValue(json, BuildingDTO.class);
        System.out.println(dto);
        buildingService.save(dto);
        json = "{\n" +
                "    \"income\": 600," +
                "    \"number_Of_Area\": 2," +
                "    \"id_Building\": \"B\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, BuildingDTO.class);
        System.out.println(dto);
        buildingService.save(dto);
        json = "{\n" +
                "    \"income\": 800," +
                "    \"number_Of_Area\": 2," +
                "    \"id_Building\": \"C\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, BuildingDTO.class);
        System.out.println(dto);
        buildingService.save(dto);
    }


    @Autowired
    AreaService areaService;
    @GetMapping("/createAREA")
    public void createArea() throws JsonProcessingException {
        String json = "{\n" +
                "    \"type_of_area\" : \"R\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"resident area\"," +
                "    \"id_Building\": \"A\"" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        AreaDTO dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
        json = "{" +
                "    \"type_of_area\" : \"R\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"resident area\"," +
                "    \"id_Building\": \"B\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
        json = "{" +
                "    \"type_of_area\" : \"R\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"resident area\"," +
                "    \"id_Building\": \"C\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
        json = "{" +
                "    \"type_of_area\" : \"C\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"customer area\"," +
                "    \"id_Building\": \"A\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
        json = "{" +
                "    \"type_of_area\" : \"C\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"customer area\"," +
                "    \"id_Building\": \"B\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
        json = "{" +
                "    \"type_of_area\" : \"C\"," +
                "    \"number_Of_Slot\": \"20\"," +
                "    \"area_name\": \"customer area\"," +
                "    \"id_Building\": \"C\"" +
                "}";
        mapper = new ObjectMapper();
        dto = mapper.readValue(json, AreaDTO.class);
        areaService.save(dto);
    }

    @Autowired
    Customer_Slot_Service customer_slot_service;

    @GetMapping("/createSLOT")
    public void createSlot() throws JsonProcessingException {

        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"1\"," +
                    "    \"id_C_Slot\": \"R" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"2\"," +
                    "    \"id_C_Slot\": \"R" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"3\"," +
                    "    \"id_C_Slot\": \"R" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"4\"," +
                    "    \"id_C_Slot\": \"C" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"5\"," +
                    "    \"id_C_Slot\": \"C" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
        for (int i = 1; i <= 20; i++) {
            final String[] proper_noun = {"Car", "Motor", "Bike"};
            Random random = new Random();
            int index = random.nextInt(proper_noun.length);
            String json = "{" +
                    "    \"type_Of_Vehicle\": \""+proper_noun[index]+"\"," +
                    "    \"status_Slots\":" + Math.round(Math.random()) + "," +
                    "    \"id_Area\": \"6\"," +
                    "    \"id_C_Slot\": \"C" + i + "\"" +
                    "}";
            ObjectMapper mapper = new ObjectMapper();
            Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
            System.out.println(dto);
            customer_slot_service.save(dto);
        }
    }
}

