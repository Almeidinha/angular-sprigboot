package com.almeida.rest.webservices.restfullwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCrypsPasswordEncoderTest {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String encodedPassword = "";
        for (int i =1; i <= 42; i++) {
            encodedPassword = encoder.encode("demo");
        }
        System.out.println(encodedPassword);
    }
}
