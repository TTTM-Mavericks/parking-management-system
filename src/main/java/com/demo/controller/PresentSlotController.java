package com.demo.controller;

import com.demo.service.PresentTheAvailableSlotService;
import com.demo.utils.response.AreaResponseDTO;
import com.demo.utils.response.PresentTheAvailableSlotResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PresentSlotController {
    @Autowired
    PresentTheAvailableSlotService presentTheAvailableSlotService;

    @GetMapping("/present_slot/{id_building}")
    public ResponseEntity<List<PresentTheAvailableSlotResponse>>present_slot(@PathVariable("id_building") String id_building)
    {
        return new ResponseEntity<>(presentTheAvailableSlotService.present_slot(id_building) , HttpStatus.OK);
    }
}
