package com.demo.controller;

import com.demo.service.BuildingService;
import com.demo.service.PaymentService;
import com.demo.utils.request.BuildingDTO;
import com.demo.utils.request.PaymentDTO;
import com.demo.utils.response.BuildingResponseDTO;
import com.demo.utils.response.PaymentReponseDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @PostMapping("/save")
    public ResponseEntity<PaymentReponseDTO> save(@RequestBody String json) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        PaymentDTO dto = mapper.readValue(json, PaymentDTO.class);
        return new ResponseEntity<>(paymentService.save(dto), HttpStatus.OK);
    }

    @GetMapping("/findPayment")
    public ResponseEntity<PaymentReponseDTO> findPayment()
    {
        return new ResponseEntity<>(paymentService.findPayment(), HttpStatus.OK);
    }
}
