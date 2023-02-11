package com.demo.service.Impl;

import com.demo.entity.Manager;
import com.demo.repository.ManagerRepository;
import com.demo.repository.UserRepository;
import com.demo.service.ManageService;
import com.demo.utils.request.ManagerDTO;
import com.demo.utils.response.ManagerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.demo.service.Impl.UserServiceImpl.mapperedToUserResponse;

@Service
public class ManageServiceImpl implements ManageService {
    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public ManagerResponseDTO save(ManagerDTO dto) {
        Manager manager = new Manager();
        manager.setRole(dto.isRole());
        manager.setIdUser(dto.getIdUser());
        manager.setUser(userRepository.findById(dto.getIdUser()).get());
        return mapperedToManager(managerRepository.save(manager));
    }

    @Override
    public Optional<ManagerResponseDTO> findById(String IdUser) {
        return Optional.of(mapperedToManager(managerRepository.findById(IdUser).get()));
    }

    @Override
    public List<ManagerResponseDTO> findAll() {
        return managerRepository.findAll().stream().map(m -> mapperedToManager(m)).collect(Collectors.toList());
    }

    @Override
    public ManagerResponseDTO update(ManagerDTO dto, String IdUser) {
        Manager manager = managerRepository.findById(IdUser).get();
        manager.setRole(dto.isRole());
        manager.setIdUser(dto.getIdUser());
        manager.setUser(userRepository.findById(dto.getIdUser()).get());
        return mapperedToManager(managerRepository.save(manager));
    }

    @Override
    public String delete(String IdUser) {
        managerRepository.deleteById(IdUser);
        return "Delete Successfully";
    }

    private ManagerResponseDTO mapperedToManager(Manager manager)
    {
        ManagerResponseDTO dto =  new ManagerResponseDTO();
        dto.setIdUser(manager.getIdUser());
        dto.setUser(mapperedToUserResponse(manager.getUser()));
        dto.setRole(manager.isRole());
        return dto;
    }
}
