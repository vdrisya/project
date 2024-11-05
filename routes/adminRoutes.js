const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const {
  addCourse,
  editCourse,
  deleteCourse,
  getCourses,
  getMentorsByCourse,
  addMentor,
  editMentor,
  deleteMentor,
  getStudents,
  viewStudentProgress,
} = require('../controllers/admin');

// Middleware to verify token and ensure admin role
router.use(verifyToken, isAdmin);

// Route to add a new course (e.g., FSD, DSA, CSA)
router.post('/courses', addCourse);

// Route to edit an existing course
router.put('/courses/:courseId', editCourse);

// Route to delete a course
router.delete('/courses/:courseId', deleteCourse);

// Route to get all courses
router.get('/courses', getCourses);

// Route to get mentors assigned to a specific course
router.get('/courses/:courseId/mentors', getMentorsByCourse);

// Route to add a new mentor
router.post('/mentors', addMentor);

// Route to edit an existing mentor
router.put('/mentors/:mentorId', editMentor);

// Route to delete a mentor
router.delete('/mentors/:mentorId', deleteMentor);

// Route to get all students
router.get('/students', getStudents);

// Route to view progress of a specific student
router.get('/students/:studentId/progress', viewStudentProgress);

module.exports = router;
