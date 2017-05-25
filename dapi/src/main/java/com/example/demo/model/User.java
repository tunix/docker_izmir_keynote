package com.example.demo.model;

import java.time.ZonedDateTime;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@EqualsAndHashCode(of = "id")
@Data
@Entity
public class User {
    @Id
    private long id;

    @Column(unique = true)
    private String username;

    private String firstName;
    private String lastName;
    private String languageCode;

    @Column(nullable = false, updatable = false)
    @CreatedDate
    private ZonedDateTime createdAt;

    @OneToMany(mappedBy = "user")
    private Set<Message> messages;
}
