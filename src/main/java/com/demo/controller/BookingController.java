package com.demo.controller;

import com.demo.service.BookingService;
import com.demo.utils.request.BookingDTO;
import com.demo.utils.response.BookingRepsonseDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;

    @PostMapping("/save")
    public ResponseEntity<BookingRepsonseDTO> save(@RequestBody String json) throws JsonProcessingException, Exception {
        ObjectMapper mapper = new ObjectMapper();
        BookingDTO dto = mapper.readValue(json, BookingDTO.class);
        return new ResponseEntity<>(bookingService.save(dto), HttpStatus.OK);
    }

    @GetMapping("/findById")
    public ResponseEntity<Optional<BookingRepsonseDTO>> findById(@RequestParam("Id_Booking") Long Id_Booking)
    {
        return new ResponseEntity<>(bookingService.findById(Id_Booking), HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<BookingRepsonseDTO>> findAll()
    {
        return new ResponseEntity<>(bookingService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<BookingRepsonseDTO> update(@RequestBody String json, @RequestParam("Id_Booking") Long Id_Booking) throws JsonProcessingException, Exception {
        ObjectMapper mapper = new ObjectMapper();
        BookingDTO dto = mapper.readValue(json, BookingDTO.class);
        return new ResponseEntity<>(bookingService.update(dto, Id_Booking), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> update(@RequestParam("Id_Booking") Long Id_Booking)
    {
        return new ResponseEntity<>(bookingService.delete(Id_Booking), HttpStatus.OK);
    }
}
