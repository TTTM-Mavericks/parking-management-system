package com.demo.service.Impl;

import com.demo.entity.Area;
import com.demo.entity.Manager;
import com.demo.repository.AreaRepository;
import com.demo.repository.BuildingRepository;
import com.demo.service.AreaService;
import com.demo.utils.request.AreaDTO;
import com.demo.utils.response.AreaResponseDTO;
import com.demo.utils.response.ManagerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.demo.service.Impl.BuildingServiceImpl.*;
import static com.demo.service.Impl.BuildingServiceImpl.staticmapperedToBuilding;
import static com.demo.service.Impl.ManageServiceImpl.mapperedToManager;

@Service
public class AreaServiceImpl implements AreaService {
    @Autowired
    AreaRepository areaRepository;

    @Autowired
    BuildingRepository buildingRepository;

    @Override
    public AreaResponseDTO save(AreaDTO dto) {
        Area area = new Area();
        area.setId_Area(dto.getId_Area());
        area.setType(dto.getType());
        area.setNumber_Of_Slot(dto.getNumber_Of_Slot());
        area.setBuilding(buildingRepository.findById(dto.getId_Building()).get());
        return mapperedToArea(areaRepository.save(area));
    }

    @Override
    public Optional<AreaResponseDTO> findById(String Id_Area) {
        return Optional.of(mapperedToArea(areaRepository.findById(Id_Area).get()));
    }

    @Override
    public List<AreaResponseDTO> findAll() {
        return areaRepository.findAll().stream().map(a -> mapperedToArea(a)).collect(Collectors.toList());
    }

    @Override
    public AreaResponseDTO update(AreaDTO dto, String Id_Area) {
        Area area = areaRepository.findById(Id_Area).get();
        area.setId_Area(dto.getId_Area());
        area.setType(dto.getType());
        area.setNumber_Of_Slot(dto.getNumber_Of_Slot());
        area.setBuilding(buildingRepository.findById(dto.getId_Building()).get());
        return mapperedToArea(areaRepository.save(area));
    }

    @Override
    public String delete(String Id_Area) {
        areaRepository.deleteById(Id_Area);
        return "delete successfully";
    }

    private AreaResponseDTO mapperedToArea(Area area)
    {
        AreaResponseDTO dto = new AreaResponseDTO();
        dto.setId_Area(area.getId_Area());
        dto.setNumber_Of_Slot(area.getNumber_Of_Slot());
        dto.setType(area.getType());
        ManagerResponseDTO manager =  mapperedToManager(buildingRepository.findById(area.getBuilding().getId_Building()).get().getManager());
        dto.setBuilding(staticmapperedToBuilding(buildingRepository.findById(area.getBuilding().getId_Building()).get(), manager));
        return dto;
    }

    public static AreaResponseDTO staticmapperedToArea(Area area, ManagerResponseDTO manager)
    {
        AreaResponseDTO dto = new AreaResponseDTO();
        dto.setId_Area(area.getId_Area());
        dto.setNumber_Of_Slot(area.getNumber_Of_Slot());
        dto.setType(area.getType());
        dto.setBuilding(staticmapperedToBuilding(area.getBuilding(), manager));
        return dto;
    }
}
