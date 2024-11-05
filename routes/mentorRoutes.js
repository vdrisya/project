const express = require('express');
const router = express.Router();
const { verifyToken, isMentor } = require('../middleware/authMiddleware');
const {
  getAssignedStudents,
  getStudentProjectDetails,
  updateProjectStatus,
  evaluateSubmission,
  manageReferenceMaterials,
} = require('../controllers/mentor');

// Middleware to verify token and ensure mentor role
router.use(verifyToken, isMentor);

// Route to get the list of students assigned to the mentor
router.get('/students', getAssignedStudents);

// Route to get project details and progress of a specific student
router.get('/students/:studentId/project', getStudentProjectDetails);

// Route to update project status for a specific student
router.put('/students/:studentId/project/status', updateProjectStatus);

// Route to evaluate a student's submission with marks and comments
router.put('/students/:studentId/submission/evaluate', evaluateSubmission);

// Route to add, edit, or delete reference materials for students
router.post('/reference-materials', manageReferenceMaterials);

module.exports = router;
