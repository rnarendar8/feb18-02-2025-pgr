
package com.stpeters.stu.marks.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stpeters.stu.marks.Entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{

}
