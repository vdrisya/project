const express = require('express');
const router = express.Router();
const { verifyToken, isStudent } = require('../middleware/authMiddleware');
const {
  getProjectDetails,
  updateProjectPhaseStatus,
  addLearning,
  submitProject,
  viewSubmissionStatus,
} = require('../controllers/student');

// Middleware to verify token and ensure student role
router.use(verifyToken, isStudent);

// Route to get project details and progress for the student
router.get('/project', getProjectDetails);

// Route to update the status of a specific project phase
router.put('/project/phase/:phaseId/status', updateProjectPhaseStatus);

// Route to add or update additional learnings for a specific project phase
router.put('/project/phase/:phaseId/learning', addLearning);

// Route to submit the project for evaluation
router.post('/project/submit', submitProject);

// Route to view the submission status and mentor feedback
router.get('/project/submission/status', viewSubmissionStatus);

module.exports = router;
