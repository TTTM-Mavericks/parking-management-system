package com.demo.service;

import com.demo.utils.request.PaymentDTO;
import com.demo.utils.response.PaymentReponseDTO;

public interface PaymentService {
    PaymentReponseDTO save(PaymentDTO dto);

    PaymentReponseDTO findPayment();
}
