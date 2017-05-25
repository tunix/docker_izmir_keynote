package com.example.demo.model;

import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@EqualsAndHashCode(of = "id")
@Data
@Entity
public class Message {
    @Id
    private long id;

    @ManyToOne
    private User user;

    @Lob
    private String message;

    @Column(nullable = false, updatable = false)
    @CreatedDate
    private ZonedDateTime createdAt;
}
