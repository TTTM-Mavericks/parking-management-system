package com.demo.service;

import com.demo.utils.response.PresentTheAvailableSlotResponse;

import java.util.List;

public interface PresentTheAvailableSlotService {
    List<PresentTheAvailableSlotResponse> present_slot(String id_Building);

}
