package com.demo.controller;

import com.demo.service.AreaService;
import com.demo.service.Customer_Slot_Service;
import com.demo.utils.request.AreaDTO;
import com.demo.utils.request.Customer_Slot_DTO;
import com.demo.utils.response.AreaResponseDTO;
import com.demo.utils.response.Customer_Slot_Response_DTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer_slot")
public class Customer_Slot_Controller {
    @Autowired
    Customer_Slot_Service customer_slot_service;

    @PostMapping("/save")
    public ResponseEntity<Customer_Slot_Response_DTO> save(@RequestBody String json) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
        return new ResponseEntity<>(customer_slot_service.save(dto), HttpStatus.OK);
    }

    @GetMapping("/findById")
    public ResponseEntity<Optional<Customer_Slot_Response_DTO>> findById(@RequestParam("Id_C_Slot") String Id_C_Slot)
    {
        return new ResponseEntity<>(customer_slot_service.findById(Id_C_Slot), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Customer_Slot_Response_DTO>> findAll()
    {
        return new ResponseEntity<>(customer_slot_service.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Customer_Slot_Response_DTO> update(@RequestBody String json, @RequestParam("Id_C_Slot") String Id_C_Slot) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        Customer_Slot_DTO dto = mapper.readValue(json, Customer_Slot_DTO.class);
        return new ResponseEntity<>(customer_slot_service.update(dto, Id_C_Slot), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> update(@RequestParam("Id_C_Slot") String Id_C_Slot)
    {
        return new ResponseEntity<>(customer_slot_service.delete(Id_C_Slot), HttpStatus.OK);
    }
}
