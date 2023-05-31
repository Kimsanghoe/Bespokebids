package Bespoke.BespokeBids.service;

import Bespoke.BespokeBids.domain.Member;
import Bespoke.BespokeBids.domain.Test;
import Bespoke.BespokeBids.repository.TestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TestService {
    private TestRepository testRepository;

    public List<Test> getUserList() {
        return testRepository.findAll();
    }
}
