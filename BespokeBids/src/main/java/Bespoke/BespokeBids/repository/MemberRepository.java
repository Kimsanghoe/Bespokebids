package Bespoke.BespokeBids.repository;


import Bespoke.BespokeBids.MemberStatus;
import Bespoke.BespokeBids.domain.Member;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(String userId) {
        return em.find(Member.class, userId);
    }

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

    public Optional<Member> findByUserId(String userId) {
        return em.createQuery("select m from Member m where m.userId = :userId", Member.class)
                .setParameter("userId", userId)
                .getResultList().stream().findAny();
    }

    public Optional<Member> findByMemberId(UUID id) {
        return em.createQuery("select m from Member m where m.id = :id", Member.class)
                .setParameter("id", id)
                .getResultList().stream().findAny();
    }

    //회원 탈퇴 로직//
    public int memberQuit(String userId) {
        return em.createQuery("update Member m set m.memberStatus = :memberStatus where m.userId = :userId")
                .setParameter("memberStatus", MemberStatus.INACTIVE)
                .setParameter("userId", userId)
                .executeUpdate();
        //회원 데이터를 아예 지우는것이 아닌 회원상태만 변경한다.
    }

    //회원 정보 수정 로직//
    public String memberModified(String userId, String address, String phoneNumber, String userName, String email) {
        em.createQuery("update Member m set m.address = :address, m.phoneNumber = :phoneNumber, m.userName = :userName, m.email = :email where m.userId = :userId")
                .setParameter("address", address)
                .setParameter("phoneNumber", phoneNumber)
                .setParameter("userName", userName)
                .setParameter("email", email)
                .setParameter("userId", userId)
                .executeUpdate();
        return userId;

    }



}
