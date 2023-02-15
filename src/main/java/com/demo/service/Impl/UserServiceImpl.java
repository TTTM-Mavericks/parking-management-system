package com.demo.service.Impl;

import com.demo.entity.User;
import com.demo.repository.UserRepository;
import com.demo.service.UserService;
import com.demo.utils.request.UserDTO;
import com.demo.utils.response.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.crypto.spec.PSource;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<UserResponseDTO> findById(String id) {
        return Optional.of(mapperedToUserResponse(userRepository.findById(id).get()));
    }

    @Override
    public List<UserResponseDTO> findAll() {
        return userRepository.findAll().stream().map(c -> mapperedToUserResponse(c)).collect(Collectors.toList());
    }

    @Override
    public UserResponseDTO save(UserDTO user) throws Exception{
        User dto = new User();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setGender(user.isGender());
        dto.setDateofbirth(user.getDateofbirth());
        dto.setPassword(user.getPassword());
        dto.setFullname(user.getFullname());
        dto.setPhone(user.getPhone());
        return mapperedToUserResponse(userRepository.save(dto));
    }

    @Override
    public UserResponseDTO update(UserDTO user, String id) throws Exception {
        User dto = userRepository.findById(id).get();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setGender(user.isGender());
        SimpleDateFormat apiDateFormat = new SimpleDateFormat("E MMM dd HH:mm:ss z yyyy");
        String date = user.getDateofbirth() + "";
        Date apiDate = apiDateFormat.parse(date);
        SimpleDateFormat desiredFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formattedDateString = desiredFormat.format(apiDate);
        Date formattedDate = desiredFormat.parse(formattedDateString);
        dto.setDateofbirth(formattedDate);
        dto.setPassword(user.getPassword());
        dto.setFullname(user.getFullname());
        dto.setPhone(user.getPhone());
        return mapperedToUserResponse(userRepository.save(dto));
    }

    @Override
    public String delete(String id) {
        userRepository.deleteById(id);
        return "Delete Successfully";
    }

    public static UserResponseDTO mapperedToUserResponse(User user)
    {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setGender(user.isGender());
        dto.setDateofbirth(user.getDateofbirth());
        dto.setPassword(user.getPassword());
        dto.setFullname(user.getFullname());
        dto.setPhone(user.getPhone());
        return dto;
    }
}
