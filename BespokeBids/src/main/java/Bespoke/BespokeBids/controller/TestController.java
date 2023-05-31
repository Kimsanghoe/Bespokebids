package Bespoke.BespokeBids.controller;

import Bespoke.BespokeBids.domain.Member;
import Bespoke.BespokeBids.domain.Test;
import Bespoke.BespokeBids.service.TestService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class TestController {
    private final TestService testService;

    @GetMapping(value = "/test")
    public List<Test> getUserList() {
        return testService.getUserList();
    }
}