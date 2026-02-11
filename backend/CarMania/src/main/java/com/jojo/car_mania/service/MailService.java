package com.jojo.car_mania.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.jojo.car_mania.dto.ContactRequest;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    private MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(ContactRequest req) {
        SimpleMailMessage msg = new SimpleMailMessage();

        msg.setTo("jozef.vydra1@gmail.com");
        
        msg.setFrom("jozef.vydra1@gmail.com");

        msg.setReplyTo(req.getEmail());

        msg.setSubject("New message from " + req.getFirstName() + " " + req.getLastName());

        String body = "Name: " + req.getFirstName() + " " + req.getLastName() + "\n"
            + "Email: " + req.getEmail() + "\n"
            + "Phone: " + req.getPhone() + "\n"
            + "Message:\n" + req.getMessage() + "\n";

        msg.setText(body);

        mailSender.send(msg);
    }   
}
