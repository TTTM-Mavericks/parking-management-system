package com.demo.service;

import com.demo.utils.request.AreaDTO;
import com.demo.utils.response.AreaResponseDTO;

import java.util.List;
import java.util.Optional;

public interface AreaService {
    AreaResponseDTO save(AreaDTO dto);

    Optional<AreaResponseDTO> findById(String Id_Area);

    List<AreaResponseDTO> findAll();

    AreaResponseDTO update(AreaDTO dto, String Id_Area);

    String delete (String Id_Area);
}
