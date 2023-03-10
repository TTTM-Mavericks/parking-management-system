package com.demo.service;

import com.demo.entity.User;
import com.demo.utils.request.UserDTO;
import com.demo.utils.response.UserResponseDTO;


import java.util.List;
import java.util.Optional;

public interface UserService {
    UserResponseDTO save(UserDTO dto)  throws Exception;

    Optional<UserResponseDTO> findById(String id);

    List<UserResponseDTO> findAll();

    UserResponseDTO update(UserDTO dto, String id) throws Exception;

    String delete (String id);

    UserResponseDTO createCustomer(UserDTO dto);

    List<User> ListAllCustomer();

    User updateCustomer(UserDTO dto);

}
