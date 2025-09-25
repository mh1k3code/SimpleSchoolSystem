package com.example.studentsystem.service;


import java.util.List;

import com.example.studentsystem.model.Student;


public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents(); 

    public Student deleteStudent(Long id);

    public boolean deleteStudent(Integer id);


}
