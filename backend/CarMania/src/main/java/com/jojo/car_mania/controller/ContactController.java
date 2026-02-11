package com.jojo.car_mania.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jojo.car_mania.dto.ContactRequest;
import com.jojo.car_mania.service.MailService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    
    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping
    public ResponseEntity<?> sendRequest(
        @Valid @RequestBody ContactRequest req) {
        mailService.sendContactMail(req);

        return ResponseEntity.ok("Message sent successfully.");
    }
}
