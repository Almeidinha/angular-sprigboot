package com.almeida.rest.webservices.restfullwebservices.controllers;


import com.almeida.rest.webservices.restfullwebservices.beans.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean basicAuthentication() {
        return new AuthenticationBean("whateverrrr");
    }

}
