const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const allCourses = require('./data/course.json');
const course = require('./data/course.json')

app.get('/per-courses/:id', (req, res)=> {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.course_id === id);
    res.send(selectedCourse);
})

app.get('/per-courses',(req, res)=>{
    res.send(allCourses)
})
app.get('/', (req, res) => {
    res.send('news API Running')
});

app.get('/all-courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Learning server running on port', port);
})