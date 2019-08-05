package com.almeida.rest.webservices.restfullwebservices.repository;

import com.almeida.rest.webservices.restfullwebservices.beans.TodoBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJPArepository extends JpaRepository<TodoBean, Long> {

    List<TodoBean> findByUserName(String username);

}
