package Bespoke.BespokeBids.repository;

import Bespoke.BespokeBids.domain.Member;
import Bespoke.BespokeBids.domain.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {

}
