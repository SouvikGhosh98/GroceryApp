package com.example.LoginManagement.controller;

import com.example.LoginManagement.domain.model.CredentialsReq;
import com.example.LoginManagement.domain.services.CredentialsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login-service")
@CrossOrigin(originPatterns = "*localhost*")
public class CredentialsController {

    private final CredentialsService credentialsService;

    @PostMapping("/login")
    public int userLogin(@RequestBody CredentialsReq credentialsReq) {
        int res=credentialsService.userLogin(credentialsReq);

        return res;
    }
}